package com.cb.yixinger.service.impl;

import com.cb.yixinger.dao.PlaceDao;
import com.cb.yixinger.entity.Place;
import com.cb.yixinger.service.PlaceService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-12-11 13:41
 **/
@Service("PlaceService")
public class PlaceServiceImpl implements PlaceService {
    @Autowired
    private PlaceDao placeDao;
    private static final Logger logger = LoggerFactory.getLogger(PlaceServiceImpl.class);

    @Override
    public void addPlace(Place place) {
        placeDao.addPlace(place);
    }
}
