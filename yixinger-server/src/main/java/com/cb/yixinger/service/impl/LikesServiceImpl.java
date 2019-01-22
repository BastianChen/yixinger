package com.cb.yixinger.service.impl;


import com.cb.yixinger.dao.LikesMapper;
import com.cb.yixinger.entity.Likes;
import com.cb.yixinger.service.LikesService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.entity.Example;

import java.util.List;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-01-17 13:24
 **/
@Service("LikesService")
public class LikesServiceImpl  implements LikesService {
    @Autowired
    private LikesMapper likesMapper;
    private static final Logger logger = LoggerFactory.getLogger(LikesServiceImpl.class);

    @Override
    public List<Likes> getLikes(String userId, Integer placeCommentId) {
        logger.info("根据用户id和评论id获取该用户是否点赞过该评论");
        Example example = new Example(Likes.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("userId", userId);
        criteria.andEqualTo("placeCommentId", placeCommentId);
        List<Likes> likesList = likesMapper.selectByExample(example);
        return likesList;
    }
}