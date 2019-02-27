package com.cb.yixinger.dao;

import com.cb.yixinger.entity.Place;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import tk.mybatis.mapper.entity.Example;

import java.util.List;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-30 11:22
 **/
@Component
public class PlaceDao {
    @Autowired
    private PlaceMapper placeMapper;

    public void addPlace(Place place) {
        placeMapper.insertSelective(place);
    }

    public Place getPlaceByUid(String uid) {
        Example example = new Example(Place.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("uid", uid);
        Place place = placeMapper.selectOneByExample(example);
        return place;
    }
}
