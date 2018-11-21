package com.cb.yixinger.dao.test;

import com.cb.yixinger.entity.TkMybatisTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-21 15:21
 **/
@Component
public class TestDao {
    @Autowired
    private TestMapper testMapper;

    public void insrtTest(TkMybatisTest tkMybatisTest) {
        testMapper.insert(tkMybatisTest);
    }


    public TkMybatisTest getTest(Integer id) {
        return testMapper.selectByPrimaryKey(id);
    }
}
