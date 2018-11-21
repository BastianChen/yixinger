package com.cb.yixinger.controller;

import com.cb.yixinger.entity.TkMybatisTest;
import com.cb.yixinger.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-21 14:55
 **/
@Controller
@RequestMapping(value = "/Test")
public class TestController {
    @Autowired
    private TestService testService;

    @RequestMapping(value = "/tkMabatisTest", method = RequestMethod.POST, produces = "application/json; charset=UTF-8")
    public void TkMabatisTest(){
        TkMybatisTest tkMybatisTest = new TkMybatisTest();
        tkMybatisTest.setName("ben");
        tkMybatisTest.setRealName("陈奔");
        tkMybatisTest.setAge(21);
        testService.insrtTest(tkMybatisTest);

        System.out.println(testService.getTest(1));
    }
}
