package com.cb.yixinger.service.impl;

import com.cb.yixinger.dao.test.TestDao;
import com.cb.yixinger.entity.TkMybatisTest;
import com.cb.yixinger.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-21 14:52
 **/
@Service("TestService")
public class TestServiceImpl implements TestService {
    @Autowired
    private TestDao testDao;

    @Override
    public void insrtTest(TkMybatisTest tkMybatisTest) {
        testDao.insrtTest(tkMybatisTest);
    }

    @Override
    public TkMybatisTest getTest(Integer id) {
        return testDao.getTest(id);
    }

    @Override
    public void updateTest(TkMybatisTest tkMybatisTest) {
        testDao.updateTest(tkMybatisTest);
    }

    @Override
    public void deleteTest(Integer id) {
        testDao.deleteTest(id);
    }

    @Override
    public List<TkMybatisTest> getTestList() {
        return testDao.getTestList();
    }

    @Override
    public List<TkMybatisTest> getTestListByNameAndAge(String name, Integer age) {
        return testDao.getTestListByNameAndAge(name,age);
    }
}
