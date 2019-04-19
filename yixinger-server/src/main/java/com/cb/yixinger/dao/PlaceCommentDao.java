package com.cb.yixinger.dao;

import com.cb.yixinger.config.SqlMapper;
import com.cb.yixinger.entity.PlaceComment;
import com.cb.yixinger.utils.CommonUtil;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.type.JdbcType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import tk.mybatis.mapper.entity.Example;

import java.util.Dictionary;
import java.util.Hashtable;
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
    @Autowired
    private SqlMapper sqlMapper;

    public List<PlaceComment> getPlaceCommentByUid(String uid) {
        Example example = new Example(PlaceComment.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("placeId", uid);
        List<PlaceComment> placeCommentList = placeCommentMapper.selectByExample(example);
        return placeCommentList;
    }

    public Integer getCountByUid(String uid) {
        Example example = new Example(PlaceComment.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("placeId", uid);
        Integer count = placeCommentMapper.selectCountByExample(example);
        return count;
    }

//    {
//        String sql = "SELECT id,likes,date,user_name,user_image,overall_rating,comment,image_list,resource from place_comment " +
//                "where place_id = #{uid} LIMIT 0,3";
//        Dictionary<String, Object> dictionary = new Hashtable<>();
//        if (!CommonUtil.isNullOrWhiteSpace(uid)) {
//            dictionary.put("uid", uid);
//        } else {
//            return null;
//        }
//        List<PlaceComment> placeCommentList = sqlMapper.selectList(sql, dictionary, PlaceComment.class);
//        return placeCommentList;
//    }
}
