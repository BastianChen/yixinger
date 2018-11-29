package com.cb.yixinger.dao;

import com.cb.yixinger.entity.PhotoDistinguish;

public interface PhotoDistinguishMapper {
    int insert(PhotoDistinguish record);

    int insertSelective(PhotoDistinguish record);
}