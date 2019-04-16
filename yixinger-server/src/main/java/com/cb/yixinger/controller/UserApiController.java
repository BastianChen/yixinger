package com.cb.yixinger.controller;

import com.cb.yixinger.config.LoggerManage;
import com.cb.yixinger.entity.BaseMessage;
import com.cb.yixinger.entity.User;
import com.cb.yixinger.service.TranslatorService;
import com.cb.yixinger.service.UserService;
import com.cb.yixinger.utils.CommonUtil;
import io.swagger.annotations.*;
import net.sf.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.TimeUnit;

/**
 * @Description: UserApiController
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-30 11:33
 **/
@Controller
@RequestMapping("/User")
@Api(description = "用户信息")
public class UserApiController {
    @Autowired
    private UserService userService;
    @Autowired
    private TranslatorService translatorService;
    @Autowired
    RedisTemplate<String, String> redisTemplate;
    private static final Logger logger = LoggerFactory.getLogger(UserApiController.class);

    @LoggerManage(logDescription = "添加用户信息")
    @ApiOperation(value = "添加用户信息", notes = "添加用户信息 ", response = BaseMessage.class)
    @RequestMapping(value = "/addUser", produces = {"application/json"}, method = RequestMethod.POST)
    public ResponseEntity<BaseMessage> addUser(
            @ApiParam(value = "用户", required = true) @RequestBody User newUser,
            @ApiParam(value = "前端传回的code", required = true) @RequestParam(value = "code") String code) {
        BaseMessage baseMessage = new BaseMessage();
        String openId = userService.getOpenId(code);
        User user = userService.getUser(openId);
        if (user != null) {
            userService.updateUser(newUser);
            baseMessage.initStateAndMessage(1001, "该用户已存在并更新用户信息");
        } else {
            newUser.setOpenid(openId);
            userService.addUser(newUser);
            logger.info("添加用户 {} 成功", newUser.getNickName());
            baseMessage.setMessage("添加用户 " + newUser.getNickName() + " 成功");
        }
        baseMessage.setData(openId);
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "获取并翻译用户信息")
    @ApiOperation(value = "获取并翻译用户信息", notes = "获取并翻译用户信息 ", response = BaseMessage.class)
    @RequestMapping(value = "/getUser", produces = {"application/json"}, method = RequestMethod.GET)
    public ResponseEntity<BaseMessage> getUser(
            @ApiParam(value = "用户openid", required = true) @RequestParam(value = "openid") String openid,
            @ApiParam(value = "用户选择的翻译语言", required = true, defaultValue = "zh") @RequestParam(value = "language") String language) {
        BaseMessage baseMessage = new BaseMessage();
        String userValue = redisTemplate.opsForValue().get("user-" + openid);
        if (!CommonUtil.isNullOrWhiteSpace(userValue)) {
            logger.info("读取user-{}缓存数据", openid);
            JSONObject jsonObject = JSONObject.fromObject(userValue);
            User user = (User) JSONObject.toBean(jsonObject, User.class);
            baseMessage.setData(user);
            logger.info("获取用户 {} 信息成功", user.getNickName());
            return baseMessage.response();
        } else {
            logger.info("未读取到user-{}缓存数据", openid);
            User user = userService.getUser(openid);
            if (user != null) {
                baseMessage.setData(user);
                logger.info("获取用户 {} 信息成功", user.getNickName());
                user = translatorService.translateUserInfo(user, language);
                logger.info("翻译用户 {} 信息成功", user.getNickName());
                baseMessage.setMessage("获取并翻译用户 " + user.getNickName() + " 信息成功");
                JSONObject jsonObject = JSONObject.fromObject(user);
                redisTemplate.opsForValue().set("user-" + openid, jsonObject.toString(), 1, TimeUnit.HOURS);
                logger.info("将用户数据添加到redis缓存中，缓存名为user-{}，缓存时间为1小时", openid);
            } else {
                logger.info("不存在openid为 {} 的用户", openid);
                baseMessage.initStateAndMessage(1001, "不存在该用户");
            }
            return baseMessage.response();
        }
    }

    @LoggerManage(logDescription = "更改用户信息")
    @ApiOperation(value = "更改用户信息", notes = "更改用户信息 ", response = BaseMessage.class)
    @RequestMapping(value = "/updateUser", produces = {"application/json"}, method = RequestMethod.POST)
    public ResponseEntity<BaseMessage> updateUser(@ApiParam(value = "用户信息", required = true) @RequestBody User user) {
        BaseMessage baseMessage = new BaseMessage();
        userService.updateUser(user);
        logger.info("修改用户 {} 信息成功", user.getNickName());
        baseMessage.setMessage("修改用户 " + user.getNickName() + " 信息成功");
        return baseMessage.response();
    }
}
