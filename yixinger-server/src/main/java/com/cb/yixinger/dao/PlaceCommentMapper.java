package com.cb.yixinger.dao;

import com.cb.yixinger.entity.PlaceCommentWithBLOBs;

public interface PlaceCommentMapper {
    int insert(PlaceCommentWithBLOBs record);

    int insertSelective(PlaceCommentWithBLOBs record);
}