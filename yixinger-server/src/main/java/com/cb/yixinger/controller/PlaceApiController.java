package com.cb.yixinger.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.cb.yixinger.config.LoggerManage;
import com.cb.yixinger.dto.PlaceDTO;
import com.cb.yixinger.dto.UserHistoryDTO;
import com.cb.yixinger.entity.*;
import com.cb.yixinger.service.*;
import com.cb.yixinger.utils.CommonUtil;
import com.cb.yixinger.utils.DistanceUtil;
import com.cb.yixinger.utils.FileUploadUtil;
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
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.lang.reflect.Array;
import java.text.SimpleDateFormat;
import java.util.Arrays;
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
    private LikesService likesService;
    @Autowired
    private FileUploadService fileUploadService;
    @Autowired
    private PlacePhotoService placePhotoService;
    @Autowired
    private UserHistoryService userHistoryService;
    @Autowired
    RedisTemplate<String, String> redisTemplate;
    private static final Logger logger = LoggerFactory.getLogger(PlaceApiController.class);

    @LoggerManage(logDescription = "添加游玩地点")
    @ApiOperation(value = "添加游玩地址信息", notes = "添加游玩地址信息 ", response = BaseMessage.class)
    @RequestMapping(value = "/addPlace", produces = {"application/json"}, method = RequestMethod.POST)
    public ResponseEntity<BaseMessage> addPlace(
            @ApiParam(value = "前端传回的uid", required = true) @RequestParam(value = "uidList") String uidList,
            @ApiParam(value = "前端传回的地点经度", required = true) @RequestParam(value = "latitudeList") String latitudeList,
            @ApiParam(value = "前端传回的地点维度", required = true) @RequestParam(value = "longitudeList") String longitudeList,
            @ApiParam(value = "游玩地点类型（1：景点；2：餐馆）", required = true) @RequestParam(value = "type") String type) {
        BaseMessage baseMessage = new BaseMessage();
        List<String> uid = Arrays.asList(uidList.split(";"));
        List<String> latitude = Arrays.asList(latitudeList.split(";"));
        List<String> longitude = Arrays.asList(longitudeList.split(";"));
        for (int i = 0; i < uid.size(); i++) {
            Place place = placeService.getPlaceByUid(uid.get(i));
            if (place != null) {
                logger.info("uid为 {} 的游玩地点已经添加过", uid.get(i));
            } else {
                logger.info("uid为 {} 的游玩地点还未添加过", uid.get(i));
                place = new Place();
                place.setLatitude(Double.valueOf(latitude.get(i)));
                place.setLongitude(Double.valueOf(longitude.get(i)));
                place = placeService.addPlace(place, uid.get(i), type);
                if (place != null) {
                    placeCommentService.addPlaceCommentByReptile(place.getCommentList(), uid.get(i));
                    placePhotoService.addPlacePhotoByReptile(place.getPhotoList(), uid.get(i));
                    logger.info("添加游玩地点 {} 成功", place.getName());
                } else {
                    if (baseMessage.getExtra() != null) {
                        baseMessage.setExtra(baseMessage.getExtra() + uid.get(i) + ";");
                    } else {
                        baseMessage.setExtra("uid为以下的地点既不为景点也不为餐馆：" + uid.get(i) + ";");
                    }
                }
            }
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "根据uid获取游玩地点信息")
    @ApiOperation(value = "根据uid获取游玩地点信息", notes = "根据uid获取游玩地点信息 ", response = BaseMessage.class)
    @RequestMapping(value = "/getPlaceByUid", produces = {"application/json"}, method = RequestMethod.GET)
    public ResponseEntity<BaseMessage> getPlaceByUid(
            @ApiParam(value = "地点uid", required = true) @RequestParam(value = "uid") String uid,
            @ApiParam(value = "经度") @RequestParam(value = "longitude", required = false) Double longitude,
            @ApiParam(value = "纬度") @RequestParam(value = "latitude", required = false) Double latitude) {
        BaseMessage baseMessage = new BaseMessage();
        String placeName = "place?uid=" + uid;
        String placeCommentListName = "placeCommentList?uid=" + uid;
        String placePhotoListName = "placePhotoList?uid=" + uid;
        String placeNameValue = redisTemplate.opsForValue().get(placeName);
        if (CommonUtil.isNotEmpty(placeNameValue)) {
            logger.info("读取 {} 缓存数据", placeName);
            String placeCommentListNameValue = redisTemplate.opsForValue().get(placeCommentListName);
            String placePhotoListNameValue = redisTemplate.opsForValue().get(placePhotoListName);
            JSONObject placeJsonObject = JSONObject.fromObject(placeNameValue);
            Place place = (Place) JSONObject.toBean(placeJsonObject, Place.class);
            List<PlaceComment> placeCommentList = com.alibaba.fastjson.JSONObject.parseArray(placeCommentListNameValue, PlaceComment.class);
            List<PlacePhoto> placePhotoList = com.alibaba.fastjson.JSONObject.parseArray(placePhotoListNameValue, PlacePhoto.class);
            PlaceDTO placeDTO = new PlaceDTO();
            placeDTO.setPlace(place);
            placeDTO.setPlaceCommentList(placeCommentList);
            placeDTO.setPlacePhotoList(placePhotoList);
            logger.info("获取uid为 {} 的游玩地点 {} 成功", uid, place.getName());
            baseMessage.setMessage("获取uid为 " + uid + " 的游玩地点 " + place.getName() + " 成功");
            baseMessage.setData(placeDTO);
            return baseMessage.response();
        } else {
            logger.info("未读取到 {} 缓存数据", placeName);
            Place place = placeService.getPlaceByUid(uid);
            if (place != null) {
                if (place.getContent() != null) {
                    place.setContent(placeService.resetContent(place.getContent()));
                } else {
                    place.setContent("暂无");
                }
                place.setDistance(DistanceUtil.GetShortDistance(longitude, latitude, place.getLongitude(), place.getLatitude()));
                List<PlaceComment> placeCommentList = placeCommentService.getPlaceComment(uid);
                List<PlacePhoto> placePhotoList = placePhotoService.getPlacePhoto(uid);
                PlaceDTO placeDTO = new PlaceDTO();
                placeDTO.setPlace(place);
                placeDTO.setPlaceCommentList(placeCommentList);
                placeDTO.setPlacePhotoList(placePhotoList);
                JSONObject placeJsonObject = JSONObject.fromObject(place);
                JSONArray placeCommentListJsonArray = JSONArray.parseArray(JSON.toJSONString(placeCommentList));
                JSONArray placePhotoListJsonArray = JSONArray.parseArray(JSON.toJSONString(placePhotoList));
                redisTemplate.opsForValue().set(placeName, placeJsonObject.toString(), 1, TimeUnit.HOURS);
                redisTemplate.opsForValue().set(placeCommentListName, placeCommentListJsonArray.toString(), 1, TimeUnit.HOURS);
                redisTemplate.opsForValue().set(placePhotoListName, placePhotoListJsonArray.toString(), 1, TimeUnit.HOURS);
                logger.info("将游玩地点数据添加到redis缓存中，缓存名为{}，缓存时间为1小时", placeName);
                logger.info("将uid为 {} 的游玩地点评论列表数据添加到redis缓存中，缓存名为{}，缓存时间为1小时", uid, placeCommentListName);
                logger.info("将uid为 {} 的游玩地点图片列表数据添加到redis缓存中，缓存名为{}，缓存时间为1小时", uid, placePhotoListName);
                logger.info("获取uid为 {} 的游玩地点 {} 成功", uid, place.getName());
                baseMessage.setMessage("获取uid为 " + uid + " 的游玩地点 " + place.getName() + " 成功");
                baseMessage.setData(placeDTO);
            } else {
                logger.info("没有uid为 {} 的游玩地点", uid);
                baseMessage.initStateAndMessage(1001, "没有uid为 " + uid + " 的游玩地点 ");
            }
            return baseMessage.response();
        }
    }

    @LoggerManage(logDescription = "获取游玩地点信息以用于轮播")
    @ApiOperation(value = "获取游玩地点信息以用于轮播", notes = "获取游玩地点信息以用于轮播 ", response = BaseMessage.class)
    @RequestMapping(value = "/getPlaceListByUids", produces = {"application/json"}, method = RequestMethod.GET)
    public ResponseEntity<BaseMessage> getPlaceListByUids(
            @ApiParam(value = "前端传回的uid", required = true) @RequestParam(value = "uidList") String uidList,
            @ApiParam(value = "经度") @RequestParam(value = "longitude", required = false) Double longitude,
            @ApiParam(value = "纬度") @RequestParam(value = "latitude", required = false) Double latitude) {
        BaseMessage baseMessage = new BaseMessage();
        List<Place> placeList = placeService.getPlaceList(uidList, longitude, latitude);
        if (placeList != null && placeList.size() > 0) {
            baseMessage.setData(placeList);
        } else {
            baseMessage.initStateAndMessage(1001, "暂无数据");
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "根据type获取附近推荐的游玩地点")
    @ApiOperation(value = "根据type获取附近推荐的游玩地点", notes = "根据type获取附近推荐的游玩地点 ", response = BaseMessage.class)
    @RequestMapping(value = "/getPlaceList", produces = {"application/json"}, method = RequestMethod.GET)
    public ResponseEntity<BaseMessage> getPlaceList(
            @ApiParam(value = "游玩地点类型", required = true) @RequestParam(value = "type") Integer type) {
        BaseMessage baseMessage = new BaseMessage();
        List<Place> placeList = placeService.getPlaceList(type);
        if (placeList != null & placeList.size() > 0) {
            logger.info("获取附近推荐游玩地点成功");
            baseMessage.setMessage("获取附近推荐游玩地点成功");
            baseMessage.setData(placeList);
        } else {
            logger.info("附近暂无可以推荐的游玩地点");
            baseMessage.initStateAndMessage(1001, "附近暂无可以推荐的游玩地点");
        }
        return baseMessage.response();
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
        if (placeCommentPageBean.getItems() != null && placeCommentPageBean.getItems().size() > 0) {
            logger.info("获取uid为 {} 的游玩地点的第 {} 页的评论成功", uid, pageNo);
            baseMessage.setMessage("获取uid为 " + uid + " 的游玩地点的评论成功");
            baseMessage.setData(placeCommentPageBean);
        } else {
            logger.info("没有uid为 {} 的游玩地点的评论", uid);
            baseMessage.initStateAndMessage(1001, "暂无评论");
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "根据uid给游玩地点添加评论")
    @ApiOperation(value = "根据uid给游玩地点添加评论", notes = "根据uid给游玩地点添加评论 ", response = BaseMessage.class)
    @RequestMapping(value = "/addPlaceComment", produces = {"application/json"}, method = RequestMethod.POST)
    public ResponseEntity<BaseMessage> addPlaceComment(
            @ApiParam(value = "图片列表", required = true) @RequestParam(value = "imageFiles") MultipartFile[] imageFiles,
            @ApiParam(value = "评论", required = true) @RequestBody PlaceComment placeComment) throws IOException {
        BaseMessage baseMessage = new BaseMessage();
        String resourcePath = System.getProperty("user.dir") + "/yixinger-server/src/main/resources/static/images/comment/";
        String imageName;
        JSONArray imageArray = new JSONArray();
        JSONObject jsonObject = new JSONObject();
        for (MultipartFile imageFile : imageFiles) {
            imageName = fileUploadService.fileUpload(resourcePath, imageFile, baseMessage);
            if (!CommonUtil.isNullOrWhiteSpace(imageName)) {
                logger.info("返回的图片名称为 {}", imageName);
                jsonObject.put("pic_url", "/images/comment/" + imageName + "_src.jpg");
                imageArray.add(jsonObject);
            } else {
                logger.info("返回的图片名称为Null");
                baseMessage.initStateAndMessage(1001, "添加评论失败");
            }
        }
        placeComment.setImageList(imageArray.toString());
        boolean result = placeCommentService.addPlaceComment(placeComment);
        if (!result) {
            logger.error("给uid为 {} 的游玩地点添加评论失败", placeComment.getPlaceId());
            baseMessage.initStateAndMessage(1001, "添加失败");
        } else {
            logger.info("给uid为 {} 的游玩地点添加评论成功", placeComment.getPlaceId());
            baseMessage.setMessage("评论成功");
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "更新评论点赞数")
    @ApiOperation(value = "更新评论点赞数", notes = "更新评论点赞数 ", response = BaseMessage.class)
    @RequestMapping(value = "/updateLikes", produces = {"application/json"}, method = RequestMethod.POST)
    public ResponseEntity<BaseMessage> updateLikes(
            @ApiParam(value = "用户openid", required = true) @RequestParam(value = "userId") String userId,
            @ApiParam(value = "评论id", required = true) @RequestParam(value = "placeCommentId") Integer placeCommentId) {
        BaseMessage baseMessage = new BaseMessage();
        PlaceComment placeComment = placeCommentService.getPlaceCommentByPlaceCommentId(placeCommentId);
        if (placeComment != null) {
            logger.info("获取id为 {} 的评论成功", placeCommentId);
            List<Likes> likesList = likesService.getLikes(userId, placeCommentId);
            if (likesList != null && !likesList.isEmpty()) {
                logger.info("用户openid为 {} 的用户已经给该评论点过赞", userId);
                PlaceComment updatedPlaceComment = placeCommentService.updateLikes(likesList.get(0), placeComment, true, userId);
                baseMessage.setData(updatedPlaceComment);
                baseMessage.setMessage("取消点赞成功");
            } else {
                logger.info("用户openid为 {} 的用户没有给该评论点过赞", userId);
                PlaceComment updatedPlaceComment = placeCommentService.updateLikes(null, placeComment, false, userId);
                baseMessage.setData(updatedPlaceComment);
                baseMessage.setMessage("点赞成功");
            }
        } else {
            logger.error("不存在id为 {} 的评论", placeCommentId);
            baseMessage.initStateAndMessage(1001, "不存在该条评论");
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "根据id删除评论")
    @ApiOperation(value = "根据id删除评论", notes = "根据id删除评论 ", response = BaseMessage.class)
    @RequestMapping(value = "/deleteCommentById", produces = {"application/json"}, method = RequestMethod.POST)
    public ResponseEntity<BaseMessage> deleteCommentById(
            @ApiParam(value = "评论id", required = true) @RequestParam(value = "idList") String idList) {
        BaseMessage baseMessage = new BaseMessage();
        if (!CommonUtil.isNullOrWhiteSpace(idList)) {
            placeCommentService.deleteCommentById(idList);
            logger.info("成功删除id为 {} 的评论记录", idList);
            likesService.deleteLikes(idList);
            logger.info("成功删除相关点赞记录", idList);
            baseMessage.setMessage("删除成功");
        } else {
            logger.info("idList为空", idList);
            baseMessage.initStateAndMessage(1001, "idList为空");
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "根据uid分页获取游玩地点图片")
    @ApiOperation(value = "根据uid分页获取游玩地点图片", notes = "根据uid分页获取游玩地点图片 ", response = BaseMessage.class)
    @RequestMapping(value = "/getPlacePhotoByUid", produces = {"application/json"}, method = RequestMethod.GET)
    public ResponseEntity<BaseMessage> getPlacePhoto(
            @ApiParam(value = "地点uid", required = true) @RequestParam(value = "uid") String uid,
            @ApiParam(value = "页数", required = true, defaultValue = "1") @RequestParam(value = "pageNo") Integer pageNo,
            @ApiParam(value = "列数", required = true, defaultValue = "10") @RequestParam(value = "pageSize") Integer pageSize) {
        BaseMessage baseMessage = new BaseMessage();
        PageBean<PlacePhoto> placePhotoPageBean = placePhotoService.getPlacePhotoByUid(uid, pageNo, pageSize);
        if (placePhotoPageBean.getItems() != null && placePhotoPageBean.getItems().size() > 0) {
            logger.info("获取uid为 {} 的游玩地点的第 {} 页的图片成功", uid, pageNo);
            baseMessage.setMessage("获取uid为 " + uid + " 的游玩地点的图片成功");
            baseMessage.setData(placePhotoPageBean);
        } else {
            logger.info("没有uid为 {} 的游玩地点的图片", uid);
            baseMessage.initStateAndMessage(1001, "暂无图片");
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "获取图片详细数据并更新图片浏览数")
    @ApiOperation(value = "获取图片详细数据并更新图片浏览数", notes = "获取图片详细数据并更新图片浏览数 ", response = BaseMessage.class)
    @RequestMapping(value = "/updateReadTimes", produces = {"application/json"}, method = RequestMethod.POST)
    public ResponseEntity<BaseMessage> updateReadTimes(
            @ApiParam(value = "图片id", required = true) @RequestParam(value = "placePhotoId") Integer placePhotoId) {
        BaseMessage baseMessage = new BaseMessage();
        PlacePhoto placePhoto = placePhotoService.getPlacePhotoByPlacePhotoId(placePhotoId);
        if (placePhoto != null) {
            logger.info("获取id为 {} 的图片成功", placePhotoId);
            placePhoto = placePhotoService.updateReadTimes(placePhoto);
            baseMessage.setData(placePhoto);
            baseMessage.setMessage("获取图片详细数据并更新图片浏览数成功");
        } else {
            logger.error("不存在id为 {} 的图片", placePhotoId);
            baseMessage.initStateAndMessage(1001, "不存在该张图片");
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "根据id删除图片")
    @ApiOperation(value = "根据id删除图片", notes = "根据id删除图片 ", response = BaseMessage.class)
    @RequestMapping(value = "/deletePhotoById", produces = {"application/json"}, method = RequestMethod.POST)
    public ResponseEntity<BaseMessage> deletePhotoById(
            @ApiParam(value = "图片id", required = true) @RequestParam(value = "idList") String idList) {
        BaseMessage baseMessage = new BaseMessage();
        if (!CommonUtil.isNullOrWhiteSpace(idList)) {
            placePhotoService.deletePlacePhotoById(idList);
            logger.info("成功删除id为 {} 的图片", idList);
            baseMessage.setMessage("删除成功");
        } else {
            logger.info("idList为空", idList);
            baseMessage.initStateAndMessage(1001, "idList为空");
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "根据uid给游玩地点上传图片")
    @ApiOperation(value = "根据uid给游玩地点上传图片", notes = "根据uid给游玩地点上传图片 ", response = BaseMessage.class)
    @RequestMapping(value = "/addPlacePhoto", produces = {"application/json"}, method = RequestMethod.POST)
    public ResponseEntity<BaseMessage> addPlacePhoto(
            @ApiParam(value = "图片列表", required = true) @RequestParam(value = "imageFiles") MultipartFile[] imageFiles,
            //@ApiParam(value = "图片列表", required = true) @RequestParam(value = "imageFiles") MultipartFile imageFile,
            @ApiParam(value = "用户openid", required = true) @RequestParam(value = "userId") String userId,
            @ApiParam(value = "用户昵称", required = true) @RequestParam(value = "userName") String userName,
            @ApiParam(value = "地点uid", required = true) @RequestParam(value = "placeId") String placeId) throws IOException {
        BaseMessage baseMessage = new BaseMessage();
        String resourcePath = System.getProperty("user.dir") + "/yixinger-server/src/main/resources/static/images/placephoto/";
        String imageName;
        PlacePhoto placePhoto = new PlacePhoto();
        placePhoto.setUserId(userId);
        placePhoto.setUserName(userName);
        placePhoto.setPlaceId(placeId);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date = sdf.format(System.currentTimeMillis());
        placePhoto.setUploadDate(date);
        placePhoto.setCommentType(2);
        placePhoto.setReadTimes(0);
        placePhoto.setImageSource("易行ER");
        for (MultipartFile imageFile : imageFiles) {
            imageName = fileUploadService.fileUpload(resourcePath, imageFile, baseMessage);
            if (!CommonUtil.isNullOrWhiteSpace(imageName)) {
                logger.info("返回的图片名称为 {}", imageName);
                if (CommonUtil.isNullOrWhiteSpace(placePhoto.getImageUrl())) {
                    placePhoto.setImageUrl("/images/placephoto/" + imageName + "_src.jpg");
                } else {
                    placePhoto.setImageUrl(placePhoto.getImageUrl() + ";" + "/images/placephoto/" + imageName + "_src.jpg");
                }
            } else {
                logger.info("返回的图片名称为Null");
                baseMessage.initStateAndMessage(1001, "上传失败");
            }
        }
        placePhotoService.addPlacePhoto(placePhoto);
        baseMessage.setMessage("上传成功");
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "添加或更新用户浏览记录")
    @ApiOperation(value = "添加或更新用户浏览记录", notes = "添加或更新用户浏览记录 ", response = BaseMessage.class)
    @RequestMapping(value = "/addOrUpdateUserHistory", produces = {"application/json"}, method = RequestMethod.POST)
    public ResponseEntity<BaseMessage> addOrUpdateUserHistory(
            @ApiParam(value = "用户openid", required = true) @RequestParam(value = "userId") String userId,
            @ApiParam(value = "地点uid", required = true) @RequestParam(value = "placeId") String placeId) {
        BaseMessage baseMessage = new BaseMessage();
        UserHistory userHistory = userHistoryService.getUserHistory(userId, placeId);
        if (userHistory != null) {
            logger.info("存在该条浏览记录，则更新浏览时间");
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String date = sdf.format(System.currentTimeMillis());
            userHistory.setReadDate(date);
            Boolean isUpdateSuccess = userHistoryService.updateUserHistory(userHistory);
            if (isUpdateSuccess) {
                logger.info("更新成功");
                baseMessage.setMessage("更新成功");
                baseMessage.setData(userHistory);
            } else {
                logger.info("更新失败");
                baseMessage.setMessage("更新失败");
            }
        } else {
            logger.info("不存在该条浏览记录，则添加该条浏览记录");
            userHistory = new UserHistory();
            userHistory.setUserId(userId);
            userHistory.setPlaceId(placeId);
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String date = sdf.format(System.currentTimeMillis());
            userHistory.setReadDate(date);
            Boolean isAddSuccess = userHistoryService.addUserHistory(userHistory);
            if (isAddSuccess) {
                logger.info("添加成功");
                baseMessage.setMessage("添加成功");
            } else {
                logger.info("添加失败");
                baseMessage.setMessage("添加失败");
            }
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "删除用户浏览记录")
    @ApiOperation(value = "删除用户浏览记录", notes = "删除用户浏览记录 ", response = BaseMessage.class)
    @RequestMapping(value = "/deleteUserHistory", produces = {"application/json"}, method = RequestMethod.POST)
    public ResponseEntity<BaseMessage> deleteUserHistory(
            @ApiParam(value = "用户浏览记录id", required = true) @RequestParam(value = "idList") String idList) {
        BaseMessage baseMessage = new BaseMessage();
        if (!CommonUtil.isNullOrWhiteSpace(idList)) {
            userHistoryService.deleteUserHistoryById(idList);
            logger.info("成功删除id为 {} 的浏览记录", idList);
            baseMessage.setMessage("删除成功");
        } else {
            logger.info("idList为空", idList);
            baseMessage.initStateAndMessage(1001, "idList为空");
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "根据用户openid获取浏览记录")
    @ApiOperation(value = "根据用户openid获取浏览记录", notes = "根据用户openid获取浏览记录 ", response = BaseMessage.class)
    @RequestMapping(value = "/getUserHistoryByUserId", produces = {"application/json"}, method = RequestMethod.GET)
    public ResponseEntity<BaseMessage> getUserHistoryByUserId(
            @ApiParam(value = "用户openid", required = true) @RequestParam(value = "userId") String userId) {
        BaseMessage baseMessage = new BaseMessage();
        List<UserHistoryDTO> userHistoryList = userHistoryService.getUserHistoryListByUserId(userId);
        if (userHistoryList != null && userHistoryList.size() > 0) {
            logger.info("获取openid为 {} 的浏览记录成功", userId);
            baseMessage.setData(userHistoryList);
            baseMessage.setMessage("获取用户浏览记录成功");
        } else {
            logger.info("不存在openid为 {} 的浏览记录", userId);
            baseMessage.setMessageDetail("不存在浏览记录");
            baseMessage.initStateAndMessage(1001, "获取用户浏览记录失败");
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "获取距离，单位为米")
    @ApiOperation(value = "获取距离，单位为米", notes = "获取距离，单位为米 ", response = BaseMessage.class)
    @RequestMapping(value = "/getDistance", produces = {"application/json"}, method = RequestMethod.POST)
    public ResponseEntity<BaseMessage> getDistance(
            @ApiParam(value = "经度1（杭州是120左右）", required = true) @RequestParam double longitude1,
            @ApiParam(value = "纬度1（杭州是30左右）", required = true) @RequestParam double latitude1,
            @ApiParam(value = "经度2", required = true) @RequestParam double longitude2,
            @ApiParam(value = "纬度2", required = true) @RequestParam double latitude2) {
        BaseMessage baseMessage = new BaseMessage();
        Double distance = DistanceUtil.GetShortDistance(longitude1, latitude1, longitude2, latitude2);
        baseMessage.setData(distance);
        return baseMessage.response();
    }
}
