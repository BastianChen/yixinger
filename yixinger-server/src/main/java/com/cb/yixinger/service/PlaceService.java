package com.cb.yixinger.service;

import com.cb.yixinger.entity.Place;

import java.util.List;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-12-11 13:40
 **/
public interface PlaceService {
    Place addPlace(Place place, String uid, String type);

    Place getPlaceByUid(String uid);

    List<Place> getPlaceList(Integer type);

    List<Place> getPlaceList(String uidList, Double longitude, Double latitude);

    String resetContent(String content);
}
