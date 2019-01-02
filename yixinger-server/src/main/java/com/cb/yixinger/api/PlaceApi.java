package com.cb.yixinger.api;

import com.cb.yixinger.entity.BaseMessage;
import com.cb.yixinger.entity.Place;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * @Description: PlaceController接口类
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-12-13 17:17
 **/
public interface PlaceApi {
    @ApiOperation(value = "添加游玩地址信息", notes = "添加游玩地址信息 ", response = BaseMessage.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "添加成功", response = BaseMessage.class)})
    @RequestMapping(value = "/Place/addPlace",
            produces = {"application/json"},
            method = RequestMethod.POST)
    ResponseEntity<BaseMessage> addPlace(@ApiParam(value = "前端传回的uid", required = true) @RequestParam String uid,
                                         @ApiParam(value = "前端传回的地点经度", required = true) @RequestParam Double latitude,
                                         @ApiParam(value = "前端传回的地点纬度", required = true) @RequestParam Double longitude);

    @ApiOperation(value = "获取游玩地址信息", notes = "获取游玩地址信息 ", response = BaseMessage.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "获取成功", response = BaseMessage.class)})
    @RequestMapping(value = "/Place/getPlaceByUid",
            produces = {"application/json"},
            method = RequestMethod.GET)
    ResponseEntity<BaseMessage> getPlaceByUid(@ApiParam(value = "地点uid", required = true) @RequestParam String uid);

//    @ApiOperation(value = "定时更新游玩地点信息", notes = "定时更新游玩地点信息 ", response = BaseMessage.class)
//    @ApiResponses(value = {
//            @ApiResponse(code = 200, message = "定时更新成功", response = BaseMessage.class)})
//    @RequestMapping(value = "/Place/updatePlaceScheduled",
//            produces = {"application/json"},
//            method = RequestMethod.POST)
//    ResponseEntity<BaseMessage> updatePlaceScheduled();
}
