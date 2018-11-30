package com.cb.yixinger.controller;

import com.cb.yixinger.config.LoggerManage;
import com.cb.yixinger.entity.User;
import com.cb.yixinger.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-30 11:33
 **/
@Controller
@RequestMapping(value = "/User")
public class UserController {
    @Autowired
    private UserService userService;
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @LoggerManage(logDescription = "添加用户信息")
    @RequestMapping(value = "/addUser", method = RequestMethod.POST, produces = "application/json; charset=UTF-8")
    public void addUser(@RequestBody User user){
        userService.addUser(user);
        logger.info("添加用户 {} 成功",user.getNickName());
    }
}
