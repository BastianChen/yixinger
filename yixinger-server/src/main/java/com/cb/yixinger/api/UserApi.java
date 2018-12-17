package com.cb.yixinger.api;

import com.cb.yixinger.entity.BaseMessage;
import com.cb.yixinger.entity.User;
import io.swagger.annotations.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * @Description: UserController接口类
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-12-13 17:00
 **/
public interface UserApi {
    @ApiOperation(value = "添加用户信息", notes = "添加用户信息 ", response = BaseMessage.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "添加成功", response = BaseMessage.class)})
    @RequestMapping(value = "/User/addUser",
            produces = {"application/json"},
            method = RequestMethod.POST)
    ResponseEntity<BaseMessage> addUser(@ApiParam(value = "用户", required = true) @RequestBody User user,
                                        @ApiParam(value = "前端传回的code", required = true) @RequestParam String code);

    @ApiOperation(value = "获取并翻译用户信息", notes = "获取并翻译用户信息 ", response = BaseMessage.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功", response = BaseMessage.class)})
    @RequestMapping(value = "/User/getUser",
            produces = {"application/json"},
            method = RequestMethod.GET)
    ResponseEntity<BaseMessage> getUser(@ApiParam(value = "用户openid", required = true) @RequestParam String openid,
                                        @ApiParam(value = "用户选择的翻译语言", required = true) @RequestParam String language);

    @ApiOperation(value = "更改用户信息", notes = "更改用户信息 ", response = BaseMessage.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功", response = BaseMessage.class)})
    @RequestMapping(value = "/User/updateUser",
            produces = {"application/json"},
            method = RequestMethod.POST)
    ResponseEntity<BaseMessage> updateUser(@ApiParam(value = "用户信息", required = true) @RequestParam User user);
}
