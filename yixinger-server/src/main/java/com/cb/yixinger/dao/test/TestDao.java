package com.cb.yixinger.dao.test;

import com.cb.yixinger.entity.TkMybatisTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import tk.mybatis.mapper.entity.Example;

import java.util.List;

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

    public void updateTest(TkMybatisTest tkMybatisTest) {
        testMapper.updateByPrimaryKeySelective(tkMybatisTest);
    }

    public void deleteTest(Integer id) {
        testMapper.deleteByPrimaryKey(id);
    }

    public List<TkMybatisTest> getTestList() {
        return testMapper.selectAll();
    }

    public List<TkMybatisTest> getTestListByNameAndAge(String name, Integer age) {
        Example example = new Example(TkMybatisTest.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("name", name);
        criteria.andEqualTo("age", age);
        return testMapper.selectByExample(example);
    }
}
