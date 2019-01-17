package com.cb.yixinger.dao;

import com.cb.yixinger.entity.PlaceComment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import tk.mybatis.mapper.entity.Example;

import java.util.List;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-30 11:24
 **/
@Component
public class PlaceCommentDao {
    @Autowired
    private PlaceCommentMapper placeCommentMapper;

    public List<PlaceComment> getPlaceCommentByUid(String uid){
        Example example = new Example(PlaceComment.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("placeId", uid);
        List<PlaceComment> placeCommentList = placeCommentMapper.selectByExample(example);
        return placeCommentList;
    }
}
