package com.cb.yixinger.service;


import com.cb.yixinger.entity.TkMybatisTest;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-21 14:51
 **/
public interface TestService {
    void insrtTest(TkMybatisTest tkMybatisTest);

    TkMybatisTest getTest(Integer id);
}
