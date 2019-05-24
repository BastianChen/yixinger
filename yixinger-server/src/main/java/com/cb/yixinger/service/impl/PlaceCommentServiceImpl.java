package com.cb.yixinger.service.impl;

import com.cb.yixinger.dao.LikesMapper;
import com.cb.yixinger.dao.PlaceCommentDao;
import com.cb.yixinger.dao.PlaceCommentMapper;
import com.cb.yixinger.entity.Likes;
import com.cb.yixinger.entity.PageBean;
import com.cb.yixinger.entity.PlaceComment;
import com.cb.yixinger.service.PlaceCommentService;
import com.cb.yixinger.utils.CommonUtil;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tk.mybatis.mapper.entity.Example;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-01-16 13:37
 **/
@Service("PlaceCommentService")
public class PlaceCommentServiceImpl implements PlaceCommentService {
    @Autowired
    private PlaceCommentDao placeCommentDao;
    @Autowired
    private PlaceCommentMapper placeCommentMapper;
    @Autowired
    private LikesMapper likesMapper;
    private static final Logger logger = LoggerFactory.getLogger(PlaceServiceImpl.class);

    @Override
    public PageBean<PlaceComment> getPlaceCommentByUid(String uid, Integer pageNo, Integer pageSize) {
        PageHelper.startPage(pageNo, pageSize);
        List<PlaceComment> placeCommentList = placeCommentDao.getPlaceCommentByUid(uid);
        // 根据评论评分进行排序（答辩时提的要求）
//        int len = placeCommentList.size();
//        int flag = len;
//        // 如果flag>0则排序结束
//        while (flag > 0) {
//            flag = 0;
//            for (int i = 1; i < len; i++) {
//                // 比较评分，若前面小于后面则交换数据
//                if (placeCommentList.get(i - 1).getOverallRating() < placeCommentList.get(i).getOverallRating()) {
//                    PlaceComment temp = placeCommentList.get(i);
//                    placeCommentList.set(i, placeCommentList.get(i - 1));
//                    placeCommentList.set(i - 1, temp);
//                    // 设置最新边界
//                    flag = i;
//                }
//            }
//            // 记录遍历的边界
//            len = flag;
//        }
        int totalCount = placeCommentDao.getCountByUid(uid);
        PageBean<PlaceComment> pageData = new PageBean<>(pageNo, pageSize, totalCount);
        pageData.setItems(placeCommentList);
        return pageData;
    }

    @Override
    public boolean addPlaceComment(PlaceComment placeComment) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date = sdf.format(System.currentTimeMillis());
        placeComment.setDate(date);
        placeComment.setCommentType(2);
        placeComment.setResource("易行ER");
        return placeCommentMapper.insertSelective(placeComment) > 0;
    }

    /**
     * @Description: 对爬取下来的部分评论进行解析并持久化
     * @Param: [commentList]
     * @return: boolean
     * @Author: Chen Ben
     * @Date: 2019/1/16
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void addPlaceCommentByReptile(String commentList, String placeId) {
        if (!CommonUtil.isNullOrWhiteSpace(commentList)) {
            JSONArray jsonArray = JSONArray.fromObject(commentList);
            logger.info("对爬取下来的部分评论进行解析");
            List<PlaceComment> placeCommentList = new ArrayList<>();
            for (int i = 0; i < jsonArray.size(); i++) {
                PlaceComment placeComment = new PlaceComment();
                JSONObject jsonObject = (JSONObject) jsonArray.get(i);
                placeComment.setComment(jsonObject.optString("content"));
                if (CommonUtil.isNullOrWhiteSpace(placeComment.getComment())) {
                    continue;
                }
                placeComment.setPlaceId(placeId);
                placeComment.setLikes(jsonObject.optInt("favorNum", 0));
                placeComment.setDate(jsonObject.optString("date"));
                placeComment.setUserName(jsonObject.optString("user_name"));
                placeComment.setUserImage(jsonObject.optString("user_logo"));
                placeComment.setOverallRating(jsonObject.optDouble("overall_rating"));
                placeComment.setImageList(jsonObject.optString("pics"));
                placeComment.setCommentType(1);
                if (CommonUtil.isNullOrWhiteSpace(placeComment.getUserImage())) {
                    placeComment.setUserImage("https://wzcb97.top/images/default.jpg");
                }
                placeComment.setResource(jsonObject.optString("cn_name", "百度地图"));
                placeCommentList.add(placeComment);
            }
            for (int i = placeCommentList.size() - 1; i >= 0; i--) {
                placeCommentMapper.insertSelective(placeCommentList.get(i));
            }
        }
    }

    /**
     * @Description: 根据uid获取爬虫评论
     * @Param: [uid]
     * @return: java.util.List<com.cb.yixinger.entity.PlaceComment>
     * @Author: Chen Ben
     * @Date: 2019/1/16
     */
    @Override
    public List<PlaceComment> getPlaceComment(String uid) {
        List<PlaceComment> placeCommentList = placeCommentMapper.querytPlaceCommentByUid(uid);
//        Example example = new Example(PlaceComment.class);
//        Example.Criteria criteria = example.createCriteria();
//        criteria.andEqualTo("placeId", uid);
//        List<PlaceComment> placeCommentList = placeCommentMapper.selectByExample(example);
        return placeCommentList;
    }

    @Override
    public PlaceComment getPlaceCommentByPlaceCommentId(Integer placeCommentId) {
        return placeCommentMapper.selectByPrimaryKey(placeCommentId);
    }

    @Override
    public PlaceComment updateLikes(Likes likes, PlaceComment placeComment, Boolean isLikes, String userId, String placeId) {
        if (isLikes == false) {
            logger.info("用户点赞操作开始");
            placeComment.setLikes(placeComment.getLikes() + 1);
            likes = new Likes();
            likes.setUserId(userId);
            likes.setPlaceCommentId(placeComment.getId());
            likes.setPlaceId(placeId);
            Boolean isSuccessLike = likesMapper.insertSelective(likes) > 0;
            if (isSuccessLike) {
                logger.info("用户点赞成功");
            } else {
                logger.error("用户点赞失败");
            }
        } else {
            logger.info("用户取消点赞操作开始");
            placeComment.setLikes(placeComment.getLikes() - 1);
            Boolean isSuccessLikeCancel = likesMapper.deleteByPrimaryKey(likes) > 0;
            if (isSuccessLikeCancel) {
                logger.info("用户取消点赞成功");
            } else {
                logger.error("用户取消点赞失败");
            }
        }
        Boolean isSuccessUpdate = placeCommentMapper.updateByPrimaryKeySelective(placeComment) > 0;
        if (isSuccessUpdate) {
            logger.info("用户更新评论成功");
        } else {
            logger.error("用户更新评论失败");
        }
        return placeComment;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void deleteCommentById(String idList) {
        List<String> integerList = Arrays.asList(idList.split(";"));
        for (String id : integerList) {
            PlaceComment placeComment = placeCommentMapper.selectByPrimaryKey(Integer.valueOf(id));
            if (placeComment != null) {
                if (!CommonUtil.isNullOrWhiteSpace(placeComment.getImageList())) {
                    String resourcePath = System.getProperty("user.dir") + "/yixinger-server/src/main/resources/static/";
                    JSONArray imageArray = JSONArray.fromObject(placeComment.getImageList());
                    logger.info("id为{}的评论有{}张图片", id, imageArray.size());
                    JSONObject imageObject;
                    for (int i = 0; i < imageArray.size(); i++) {
                        imageObject = (JSONObject) imageArray.get(i);
                        File file = new File(resourcePath + imageObject.getString("pic_url"));
                        if (file.exists()) {
                            logger.info("评论记录——删除项目中的图片文件，文件路径为 {}", resourcePath + imageObject.getString("pic_url"));
                            file.delete();
                            logger.info("评论记录——删除图片文件成功");
                        }
                    }
                } else {
                    logger.info("id为{}的评论没有图片", id);
                }
                logger.info("评论记录——删除数据库中id为 {} 的数据", id);
                placeCommentMapper.deleteByPrimaryKey(Integer.valueOf(id));
            } else {
                logger.info("评论记录——数据库中并没有id为 {} 的数据", id);
            }
        }
    }

    @Override
    public Integer getCommentNumber(String uid) {
        Example example = new Example(PlaceComment.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("placeId", uid);
        List<PlaceComment> placeCommentList = placeCommentMapper.selectByExample(example);
        if (placeCommentList != null && placeCommentList.size() > 0) {
            return placeCommentList.size();
        } else {
            return 0;
        }
    }
}
