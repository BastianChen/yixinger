package com.cb.yixinger.controller;

import com.cb.yixinger.api.PlaceApi;
import com.cb.yixinger.entity.BaseMessage;
import com.cb.yixinger.entity.Place;
import com.cb.yixinger.service.PlaceService;
import io.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * @Auther: Administrator Chen Ben
 * @Date: 2018/12/12/012 21:42
 * @Description:
 */
@Controller
public class PlaceApiController implements PlaceApi {
    @Autowired
    private PlaceService placeService;
    private static final Logger logger = LoggerFactory.getLogger(UserApiController.class);

    @Override
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

    @Override
    public ResponseEntity<BaseMessage> getPlaceByUid(@ApiParam(value = "地点uid", required = true) @RequestParam String uid) {
        BaseMessage baseMessage = new BaseMessage();
        Place place = placeService.getPlaceByUid(uid);
        if (place != null) {
            logger.info("获取uid为 {} 的游玩地点 {} 成功", uid, place.getName());
            baseMessage.setMessage("获取uid为 " + uid + " 的游玩地点 " + place.getName() + " 成功");
            baseMessage.setData(place);
        }else {
            logger.info("没有uid为 {} 的游玩地点", uid);
            baseMessage.setMessage("没有uid为 " + uid + " 的游玩地点 ");
        }
        return baseMessage.response();
    }
}
