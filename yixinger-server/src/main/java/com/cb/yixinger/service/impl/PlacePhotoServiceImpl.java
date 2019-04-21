package com.cb.yixinger.service.impl;

import com.cb.yixinger.dao.PlacePhotoDao;
import com.cb.yixinger.dao.PlacePhotoMapper;
import com.cb.yixinger.entity.PageBean;
import com.cb.yixinger.entity.PlacePhoto;
import com.cb.yixinger.service.PlacePhotoService;
import com.cb.yixinger.utils.CommonUtil;
import com.github.pagehelper.PageHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tk.mybatis.mapper.entity.Example;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.List;

/**
 * @Description: 地点照片ServiceImpl
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-01-22 17:04
 **/
@Service("PlacePhotoService")
public class PlacePhotoServiceImpl implements PlacePhotoService {
    @Autowired
    private PlacePhotoMapper placePhotoMapper;
    @Autowired
    private PlacePhotoDao placePhotoDao;
    private static final Logger logger = LoggerFactory.getLogger(PlaceServiceImpl.class);

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void addPlacePhotoByReptile(String photoList, String placeId) {
        if (!CommonUtil.isNullOrWhiteSpace(photoList)) {
            List<String> photoPathList = Arrays.asList(photoList.split(";"));
            logger.info("对爬取下来的部分图片进行持久化（只有景点才有该部分图片）");
            PlacePhoto placePhoto = new PlacePhoto();
            for (String photoPath : photoPathList) {
                placePhoto.setPlaceId(placeId);
                placePhoto.setImageUrl(photoPath);
                placePhoto.setReadTimes(0);
                placePhoto.setImageSource("百度地图");
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                String date = sdf.format(System.currentTimeMillis());
                placePhoto.setUploadDate(date);
                placePhoto.setUserName("百度地图网友");
                placePhoto.setCommentType(1);
                placePhotoMapper.insertSelective(placePhoto);
            }
        }
    }

    @Override
    public List<PlacePhoto> getPlacePhoto(String uid) {
        Example example = new Example(PlacePhoto.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("placeId", uid);
        criteria.andEqualTo("commentType", 1);
        List<PlacePhoto> placePhotoList = placePhotoMapper.selectByExample(example);
        return placePhotoList;
    }

    @Override
    public PageBean<PlacePhoto> getPlacePhotoByUid(String uid, Integer pageNo, Integer pageSize) {
        PageHelper.startPage(pageNo, pageSize);
        List<PlacePhoto> placePhotoList = placePhotoDao.getPlacePhotoByUid(uid);
        int totalCount = placePhotoDao.getCountByUid(uid);
        PageBean<PlacePhoto> pageData = new PageBean<>(pageNo, pageSize, totalCount);
        pageData.setItems(placePhotoList);
        return pageData;
    }

    @Override
    public PlacePhoto getPlacePhotoByPlacePhotoId(Integer placePhotoId) {
        return placePhotoMapper.selectByPrimaryKey(placePhotoId);
    }

    @Override
    public PlacePhoto updateReadTimes(PlacePhoto placePhoto) {
        placePhoto.setReadTimes(placePhoto.getReadTimes() + 1);
        placePhotoMapper.updateByPrimaryKeySelective(placePhoto);
        return placePhoto;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void deletePlacePhotoById(String idList) {
        List<String> integerList = Arrays.asList(idList.split(";"));
        for (String id : integerList) {
            PlacePhoto placePhoto = placePhotoMapper.selectByPrimaryKey(Integer.valueOf(id));
            if (placePhoto != null) {
                String resourcePath = System.getProperty("user.dir") + "/yixinger-server/src/main/resources/static/";
                List<String> imagePathList = Arrays.asList(placePhoto.getImageUrl().split(";"));
                for (String imagePath : imagePathList) {
                    File file = new File(resourcePath + imagePath);
                    if (file.exists()) {
                        logger.info("游玩地点图片删除——删除项目中的图片文件，文件路径为 {}", resourcePath + imagePath);
                        file.delete();
                        logger.info("游玩地点图片删除——删除图片文件成功");
                    }
                }
                logger.info("游玩地点图片删除——删除数据库中id为 {} 的数据", id);
                placePhotoMapper.deleteByPrimaryKey(Integer.valueOf(id));
            }else {
                logger.info("游玩地点图片删除——数据库中并没有id为 {} 的数据", id);
            }
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void addPlacePhoto(PlacePhoto placePhoto) {
        placePhotoMapper.insertSelective(placePhoto);
    }
}
