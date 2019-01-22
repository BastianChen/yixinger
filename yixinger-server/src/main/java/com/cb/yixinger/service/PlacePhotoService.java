package com.cb.yixinger.service;

import com.cb.yixinger.entity.PlacePhoto;

import java.util.List;

/**
 * @Description: 地点照片Service
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-01-22 17:04
 **/
public interface PlacePhotoService {
    void addPlacePhotoByReptile(String photoList, String placeId);

    List<PlacePhoto> getPlacePhoto(String uid);
}
