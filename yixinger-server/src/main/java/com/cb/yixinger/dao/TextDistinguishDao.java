package com.cb.yixinger.dao;

import com.cb.yixinger.entity.TextDistinguish;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import tk.mybatis.mapper.entity.Example;

import java.util.List;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-30 9:53
 **/
@Component
public class TextDistinguishDao {
    @Autowired
    private TextDistinguishMapper textDistinguishMapper;

    public List<TextDistinguish> getTextDistinguishByUid(String userId) {
        Example example = new Example(TextDistinguish.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("userId", userId);
        List<TextDistinguish> textDistinguishList = textDistinguishMapper.selectByExample(example);
        return textDistinguishList;
    }

    public Integer getCountByUid(String userId) {
        Example example = new Example(TextDistinguish.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("userId", userId);
        Integer count = textDistinguishMapper.selectCountByExample(example);
        return count;
    }
}
