package com.cb.yixinger.dao;

import com.cb.yixinger.entity.PlacePhoto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import tk.mybatis.mapper.entity.Example;

import java.util.List;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-30 11:23
 **/
@Component
public class PlacePhotoDao {
    @Autowired
    private PlacePhotoMapper placePhotoMapper;

    public List<PlacePhoto> getPlacePhotoByUid(String uid) {
        Example example = new Example(PlacePhoto.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("placeId", uid);
        List<PlacePhoto> placePhotoList = placePhotoMapper.selectByExample(example);
        return placePhotoList;
    }

    public Integer getCountByUid(String uid) {
        Example example = new Example(PlacePhoto.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("placeId", uid);
        Integer count = placePhotoMapper.selectCountByExample(example);
        return count;
    }
}
