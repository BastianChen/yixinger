package com.cb.yixinger.dao;

import com.cb.yixinger.config.BaseMapper;
import com.cb.yixinger.entity.PlaceComment;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.type.JdbcType;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("PlaceCommentMapper")
public interface PlaceCommentMapper extends BaseMapper<PlaceComment> {
    @Select({ "select id,likes,date,user_name,user_image,overall_rating,comment,image_list,resource " +
            "from place_comment where place_id=#{uid,jdbcType=VARCHAR} order by id desc LIMIT 0,3" })
    @Results({ @Result(column = "id", property = "id", jdbcType = JdbcType.INTEGER),
            @Result(column = "likes", property = "likes", jdbcType = JdbcType.INTEGER),
            @Result(column = "date", property = "date", jdbcType = JdbcType.VARCHAR),
            @Result(column = "user_name", property = "userName", jdbcType = JdbcType.VARCHAR),
            @Result(column = "user_image", property = "userImage", jdbcType = JdbcType.VARCHAR),
            @Result(column = "overall_rating", property = "overallRating", jdbcType = JdbcType.DOUBLE),
            @Result(column = "comment", property = "comment", jdbcType = JdbcType.VARCHAR),
            @Result(column = "image_list", property = "imageList", jdbcType = JdbcType.VARCHAR),
            @Result(column = "resource", property = "resource", jdbcType = JdbcType.VARCHAR)})
    List<PlaceComment> querytPlaceCommentByUid(String uid);
}