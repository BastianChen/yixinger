package com.cb.yixinger.dao;

import com.cb.yixinger.entity.PlacePhoto;

public interface PlacePhotoMapper {
    int insert(PlacePhoto record);

    int insertSelective(PlacePhoto record);
}