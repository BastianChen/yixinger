package com.cb.yixinger.dao;

import com.cb.yixinger.entity.PhotoDistinguish;
import com.cb.yixinger.utils.CommonUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import tk.mybatis.mapper.entity.Example;

import java.util.List;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-30 9:50
 **/
@Component
public class PhotoDistinguishDao {
    @Autowired
    private PhotoDistinguishMapper photoDistinguishMapper;

    public List<PhotoDistinguish> getPhotoDistinguishList(String userId, String type) {
        Example example = new Example(PhotoDistinguish.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("userId", userId);
        if (!CommonUtil.isNullOrWhiteSpace(type)) {
            criteria.andEqualTo("type", type);
        }
        List<PhotoDistinguish> photoDistinguishList = photoDistinguishMapper.selectByExample(example);
        return photoDistinguishList;
    }

    public Integer getCountByUid(String userId, String type) {
        Example example = new Example(PhotoDistinguish.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("userId", userId);
        if (!CommonUtil.isNullOrWhiteSpace(type)) {
            criteria.andEqualTo("type", type);
        }
        Integer count = photoDistinguishMapper.selectCountByExample(example);
        return count;
    }
}
