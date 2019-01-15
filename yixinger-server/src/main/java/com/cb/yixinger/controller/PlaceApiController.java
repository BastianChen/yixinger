package com.cb.yixinger.controller;

import com.cb.yixinger.config.LoggerManage;
import com.cb.yixinger.entity.BaseMessage;
import com.cb.yixinger.entity.Place;
import com.cb.yixinger.service.PlaceService;
import io.swagger.annotations.*;
import com.alibaba.fastjson.JSON;
import net.sf.json.JSONObject;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.concurrent.TimeUnit;

/**
 * @Description: PlaceApiController
 * @Auther: Administrator Chen Ben
 * @Date: 2018/12/12/012 21:42
 */
@Controller
@RequestMapping("/Place")
@Api(description = "游玩地点")
public class PlaceApiController {
    @Autowired
    private PlaceService placeService;
    @Autowired
    RedisTemplate<String, String> redisTemplate;
    private static final Logger logger = LoggerFactory.getLogger(PlaceApiController.class);

    @LoggerManage(logDescription = "添加游玩地点")
    @ApiOperation(value = "添加游玩地址信息", notes = "添加游玩地址信息 ", response = BaseMessage.class)
    @RequestMapping(value = "/addPlace", produces = {"application/json"}, method = RequestMethod.POST)
    public ResponseEntity<BaseMessage> addPlace(@ApiParam(value = "前端传回的uid", required = true) @RequestParam String uid,
                                                @ApiParam(value = "前端传回的地点经度", required = true) @RequestParam Double latitude,
                                                @ApiParam(value = "前端传回的地点维度", required = true) @RequestParam Double longitude) {
        BaseMessage baseMessage = new BaseMessage();
        Place place = new Place();
        place.setLatitude(latitude);
        place.setLongitude(longitude);
        place = placeService.addPlace(place, uid);
        logger.info("添加游玩地点 {} 成功", place.getName());
        baseMessage.setMessage("添加游玩地点 " + place.getName() + " 成功");
        baseMessage.setData(place);
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "根据uid获取游玩地点信息")
    @ApiOperation(value = "获取游玩地址信息", notes = "获取游玩地址信息 ", response = BaseMessage.class)
    @RequestMapping(value = "/getPlaceByUid", produces = {"application/json"}, method = RequestMethod.GET)
    public ResponseEntity<BaseMessage> getPlaceByUid(@ApiParam(value = "地点uid", required = true) @RequestParam String uid) {
        BaseMessage baseMessage = new BaseMessage();
        String keyName = "place?uid=" + uid;
        String value = redisTemplate.opsForValue().get(keyName);
        if (!StringUtils.isEmpty(value)) {
            logger.info("读取缓存数据");
            JSONObject jsonObject = JSONObject.fromObject(value);
            Place place = (Place) JSONObject.toBean(jsonObject, Place.class);
            logger.info("获取uid为 {} 的游玩地点 {} 成功", uid, place.getName());
            baseMessage.setMessage("获取uid为 " + uid + " 的游玩地点 " + place.getName() + " 成功");
            baseMessage.setData(place);
            return baseMessage.response();
        } else {
            logger.info("未读取到缓存数据");
            Place place = placeService.getPlaceByUid(uid);
            if (place != null) {
                JSONObject jsonObject = JSONObject.fromObject(place);
                redisTemplate.opsForValue().set(keyName, jsonObject.toString(), 1, TimeUnit.HOURS);
                logger.info("获取uid为 {} 的游玩地点 {} 成功", uid, place.getName());
                baseMessage.setMessage("获取uid为 " + uid + " 的游玩地点 " + place.getName() + " 成功");
                baseMessage.setData(place);
            } else {
                logger.info("没有uid为 {} 的游玩地点", uid);
                baseMessage.setMessage("没有uid为 " + uid + " 的游玩地点 ");
            }
            return baseMessage.response();
        }
    }
}
