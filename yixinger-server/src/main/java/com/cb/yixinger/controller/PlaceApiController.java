package com.cb.yixinger.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.cb.yixinger.config.LoggerManage;
import com.cb.yixinger.dto.PlaceDTO;
import com.cb.yixinger.entity.*;
import com.cb.yixinger.service.PlaceCommentService;
import com.cb.yixinger.service.PlaceService;
import com.cb.yixinger.utils.CommonUtil;
import io.swagger.annotations.*;
import net.sf.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
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
    private PlaceCommentService placeCommentService;
    @Autowired
    RedisTemplate<String, String> redisTemplate;
    private static final Logger logger = LoggerFactory.getLogger(PlaceApiController.class);

    @LoggerManage(logDescription = "添加游玩地点")
    @ApiOperation(value = "添加游玩地址信息", notes = "添加游玩地址信息 ", response = BaseMessage.class)
    @RequestMapping(value = "/addPlace", produces = {"application/json"}, method = RequestMethod.POST)
    public ResponseEntity<BaseMessage> addPlace(
            @ApiParam(value = "前端传回的uid", required = true) @RequestParam(value = "uid") String uid,
            @ApiParam(value = "前端传回的地点经度", required = true) @RequestParam(value = "latitude") Double latitude,
            @ApiParam(value = "前端传回的地点维度", required = true) @RequestParam(value = "longitude") Double longitude) {
        BaseMessage baseMessage = new BaseMessage();
        Place place = new Place();
        place.setLatitude(latitude);
        place.setLongitude(longitude);
        place = placeService.addPlace(place, uid);
        placeCommentService.addPlaceCommentByReptile(place.getCommentList(),uid);
        logger.info("添加游玩地点 {} 成功", place.getName());
        baseMessage.setMessage("添加游玩地点 " + place.getName() + " 成功");
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "根据uid获取游玩地点信息")
    @ApiOperation(value = "获取游玩地址信息", notes = "获取游玩地址信息 ", response = BaseMessage.class)
    @RequestMapping(value = "/getPlaceByUid", produces = {"application/json"}, method = RequestMethod.GET)
    public ResponseEntity<BaseMessage> getPlaceByUid(@ApiParam(value = "地点uid", required = true) @RequestParam(value = "uid") String uid) {
        BaseMessage baseMessage = new BaseMessage();
        String placeName = "place?uid=" + uid;
        String placeCommentListName = "placeCommentList?uid=" + uid;
        String placeNameValue = redisTemplate.opsForValue().get(placeName);
        if (CommonUtil.isNotEmpty(placeNameValue)) {
            logger.info("读取缓存数据");
            String placeCommentListNameValue = redisTemplate.opsForValue().get(placeCommentListName);
            JSONObject placeJsonObject = JSONObject.fromObject(placeNameValue);
            Place place = (Place) JSONObject.toBean(placeJsonObject, Place.class);
            List<PlaceComment> placeCommentList = com.alibaba.fastjson.JSONObject.parseArray(placeCommentListNameValue,PlaceComment.class);
            PlaceDTO placeDTO = new PlaceDTO();
            placeDTO.setPlace(place);
            placeDTO.setPlaceCommentList(placeCommentList);
            logger.info("获取uid为 {} 的游玩地点 {} 成功", uid, place.getName());
            baseMessage.setMessage("获取uid为 " + uid + " 的游玩地点 " + place.getName() + " 成功");
            baseMessage.setData(placeDTO);
            return baseMessage.response();
        } else {
            logger.info("未读取到缓存数据");
            Place place = placeService.getPlaceByUid(uid);
            if (place != null) {
                List<PlaceComment> placeCommentList = placeCommentService.getPlaceComment(uid);
                PlaceDTO placeDTO = new PlaceDTO();
                placeDTO.setPlace(place);
                placeDTO.setPlaceCommentList(placeCommentList);
                JSONObject placeJsonObject = JSONObject.fromObject(place);
                JSONArray placeCommentListJsonArray= JSONArray.parseArray(JSON.toJSONString(placeCommentList));
                redisTemplate.opsForValue().set(placeName, placeJsonObject.toString(), 1, TimeUnit.HOURS);
                redisTemplate.opsForValue().set(placeCommentListName, placeCommentListJsonArray.toString(), 1, TimeUnit.HOURS);
                logger.info("获取uid为 {} 的游玩地点 {} 成功", uid, place.getName());
                baseMessage.setMessage("获取uid为 " + uid + " 的游玩地点 " + place.getName() + " 成功");
                baseMessage.setData(placeDTO);
            } else {
                logger.info("没有uid为 {} 的游玩地点", uid);
                baseMessage.setMessage("没有uid为 " + uid + " 的游玩地点 ");
            }
            return baseMessage.response();
        }
    }

    @LoggerManage(logDescription = "根据uid分页获取游玩地点评论")
    @ApiOperation(value = "根据uid分页获取游玩地点评论", notes = "根据uid分页获取游玩地点评论 ", response = BaseMessage.class)
    @RequestMapping(value = "/getPlaceCommentByUid", produces = {"application/json"}, method = RequestMethod.GET)
    public ResponseEntity<BaseMessage> getPlaceComment(
            @ApiParam(value = "地点uid", required = true) @RequestParam(value = "uid") String uid,
            @ApiParam(value = "页数", required = true, defaultValue = "1") @RequestParam(value = "pageNo") Integer pageNo,
            @ApiParam(value = "列数", required = true, defaultValue = "10") @RequestParam(value = "pageSize") Integer pageSize) {
        BaseMessage baseMessage = new BaseMessage();
        PageBean<PlaceComment> placeCommentPageBean = placeCommentService.getPlaceCommentByUid(uid, pageNo, pageSize);
        if (placeCommentPageBean.getItems() != null && placeCommentPageBean.getItems().size() > 0){
            logger.info("获取uid为 {} 的游玩地点的第 {} 页的评论成功", uid, pageNo);
            baseMessage.setMessage("获取uid为 " + uid + " 的游玩地点的评论成功");
            baseMessage.setData(placeCommentPageBean);
        }else {
            logger.info("没有uid为 {} 的游玩地点的评论", uid);
            baseMessage.setMessage("暂无评论");
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "根据uid给游玩地点添加评论")
    @ApiOperation(value = "根据uid给游玩地点添加评论", notes = "根据uid给游玩地点添加评论 ", response = BaseMessage.class)
    @RequestMapping(value = "/addPlaceComment", produces = {"application/json"}, method = RequestMethod.POST)
    public ResponseEntity<BaseMessage> addPlaceComment(@ApiParam(value = "评论", required = true) @RequestBody PlaceComment placeComment) {
        BaseMessage baseMessage = new BaseMessage();
        boolean result = placeCommentService.addPlaceComment(placeComment);
        if (!result) {
            logger.error("给uid为 {} 的游玩地点添加评论失败", placeComment.getPlaceId());
            baseMessage.initStateAndMessage(1001, "添加失败");
        }else {
            logger.info("给uid为 {} 的游玩地点添加评论成功", placeComment.getPlaceId());
            baseMessage.setMessage("评论成功");
        }
        return baseMessage.response();
    }
}
