package com.cb.yixinger.dao;

import com.cb.yixinger.entity.PlaceWithBLOBs;

public interface PlaceMapper {
    int insert(PlaceWithBLOBs record);

    int insertSelective(PlaceWithBLOBs record);
}