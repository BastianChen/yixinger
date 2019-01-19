package com.cb.yixinger.controller;

import com.cb.yixinger.config.LoggerManage;
import com.cb.yixinger.entity.BaseMessage;
import com.cb.yixinger.entity.PhotoDistinguish;
import com.cb.yixinger.entity.TextDistinguish;
import com.cb.yixinger.service.PhotoDistinguishService;
import com.cb.yixinger.service.TextDistinguishService;
import com.cb.yixinger.service.TranslatorService;
import com.cb.yixinger.utils.CommonUtil;
import com.cb.yixinger.utils.FileUploadUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-01-17 15:05
 **/
@Controller
@RequestMapping("/AIOperate")
@Api(description = "AI操作")
public class AIOperateController {
    @Autowired
    private TranslatorService translatorService;
    @Autowired
    private PhotoDistinguishService photoDistinguishService;
    @Autowired
    private TextDistinguishService textDistinguishService;
    private static final Logger logger = LoggerFactory.getLogger(AIOperateController.class);

    @LoggerManage(logDescription = "图像识别")
    @ApiOperation(value = "图像识别", notes = "图像识别 ", response = BaseMessage.class)
    @RequestMapping(value = "/imageClassify", produces = {"application/json; charset=UTF-8"}, method = RequestMethod.POST)
    public ResponseEntity<BaseMessage> imageClassify(
            @ApiParam(value = "imgFile", required = true) @RequestParam(value = "imgFile") MultipartFile imageFile,
            @ApiParam(value = "图像识别类型（1.通用图像识别2.植物识别3.动物识别4.菜品识别）", required = true) @RequestParam(value = "type") String type,
            @ApiParam(value = "用户openid", required = true) @RequestParam(value = "userId") String userId) throws IOException {
        BaseMessage baseMessage = new BaseMessage();
        String resourcePath = System.getProperty("user.dir") + "/yixinger-server/src/main/resources/static/images/photo/";
        if (imageFile != null) {
            logger.info("获取到图像并校验文件类型是否是被允许的");
            if (FileUploadUtil.allowUpload(imageFile.getContentType())) {
                logger.info("该文件类型是被允许的");
                String fileName = FileUploadUtil.rename(imageFile.getOriginalFilename());
                int end = fileName.lastIndexOf(".");
                String saveName = fileName.substring(0, end);
                File dir = new File(resourcePath);
                if (!dir.exists()) {
                    dir.mkdirs();
                }
                logger.info("---文件保存目录--" + dir);
                File file = new File(dir, saveName + "_src.jpg");
                imageFile.transferTo(file);
                logger.info("----------------图像识别开始----------------");
                PhotoDistinguish photoDistinguish = photoDistinguishService.photoDistinguishBytype(
                        resourcePath + saveName + "_src.jpg", type, userId,
                        "/images/photo/" + saveName + "_src.jpg");
                logger.info("----------------图像识别结束----------------");
                baseMessage.setData(photoDistinguish);
                baseMessage.setMessage("图像识别成功");
            }
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "获取图像识别所有记录")
    @ApiOperation(value = "获取图像识别所有记录", notes = "获取图像识别所有记录 ", response = BaseMessage.class)
    @RequestMapping(value = "/getPhotoDistinguishList", produces = {"application/json"}, method = RequestMethod.GET)
    public ResponseEntity<BaseMessage> getPhotoDistinguishList() {
        BaseMessage baseMessage = new BaseMessage();
        List<PhotoDistinguish> photoDistinguishList = photoDistinguishService.getPhotoDistinguishList();
        if (photoDistinguishList != null && photoDistinguishList.size() > 0) {
            logger.info("获取图像识别所有记录成功");
            baseMessage.setMessage("获取图像识别所有记录成功");
            baseMessage.setData(photoDistinguishList);
        } else {
            logger.info("暂无图像识别的历史记录");
            baseMessage.setMessage("暂无历史记录");
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "根据id删除图像识别记录")
    @ApiOperation(value = "根据id删除图像识别记录", notes = "根据id删除图像识别记录 ", response = BaseMessage.class)
    @RequestMapping(value = "/deletePhotoDistinguishById", produces = {"application/json"}, method = RequestMethod.POST)
    public ResponseEntity<BaseMessage> deletePhotoDistinguishById(
            @ApiParam(value = "记录id", required = true) @RequestParam(value = "id") String idList) {
        BaseMessage baseMessage = new BaseMessage();
        if (!CommonUtil.isNullOrWhiteSpace(idList)) {
            photoDistinguishService.deletePhotoDistinguishById(idList);
            logger.info("成功删除id为 {} 的图像识别记录", idList);
            baseMessage.setMessage("删除成功");
        } else {
            logger.info("idList为空", idList);
            baseMessage.setMessage("idList为空");
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "文字识别")
    @ApiOperation(value = "文字识别", notes = "文字识别 ", response = BaseMessage.class)
    @RequestMapping(value = "/aipOcr", produces = {"application/json; charset=UTF-8"}, method = RequestMethod.POST)
    public ResponseEntity<BaseMessage> aipOcr(
            @ApiParam(value = "imgFile", required = true) @RequestParam(value = "imgFile") MultipartFile imageFile,
            @ApiParam(value = "用户openid", required = true) @RequestParam(value = "userId") String userId) throws IOException {
        BaseMessage baseMessage = new BaseMessage();
        String resourcePath = System.getProperty("user.dir") + "/yixinger-server/src/main/resources/static/images/text/";
        if (imageFile != null) {
            logger.info("获取到图像并校验文件类型是否是被允许的");
            if (FileUploadUtil.allowUpload(imageFile.getContentType())) {
                logger.info("该文件类型是被允许的");
                String fileName = FileUploadUtil.rename(imageFile.getOriginalFilename());
                int end = fileName.lastIndexOf(".");
                String saveName = fileName.substring(0, end);
                File dir = new File(resourcePath);
                if (!dir.exists()) {
                    dir.mkdirs();
                }
                logger.info("---文件保存目录--" + dir);
                File file = new File(dir, saveName + "_src.jpg");
                imageFile.transferTo(file);
                logger.info("----------------文字识别开始----------------");
                TextDistinguish textDistinguish = textDistinguishService.textDistinguish(resourcePath + saveName + "_src.jpg",
                        userId, "/images/text/" + saveName + "_src.jpg");
                logger.info("----------------文字识别结束----------------");
                baseMessage.setData(textDistinguish);
                baseMessage.setMessage("文字识别成功");
            }
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "获取文字识别所有记录")
    @ApiOperation(value = "获取文字识别所有记录", notes = "获取文字识别所有记录 ", response = BaseMessage.class)
    @RequestMapping(value = "/getTextDistinguishList", produces = {"application/json"}, method = RequestMethod.GET)
    public ResponseEntity<BaseMessage> getTextDistinguishList() {
        BaseMessage baseMessage = new BaseMessage();
        List<TextDistinguish> textDistinguishList = textDistinguishService.getTextDistinguishList();
        if (textDistinguishList != null && textDistinguishList.size() > 0) {
            logger.info("获取文字识别所有记录成功");
            baseMessage.setMessage("获取文字识别所有记录成功");
            baseMessage.setData(textDistinguishList);
        } else {
            logger.info("暂无文字识别的历史记录");
            baseMessage.setMessage("暂无历史记录");
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "根据id删除文字识别记录")
    @ApiOperation(value = "根据id删除文字识别记录", notes = "根据id删除文字识别记录 ", response = BaseMessage.class)
    @RequestMapping(value = "/deleteTextDistinguishById", produces = {"application/json"}, method = RequestMethod.POST)
    public ResponseEntity<BaseMessage> deleteTextDistinguishById(
            @ApiParam(value = "记录id", required = true) @RequestParam(value = "id") String idList) {
        BaseMessage baseMessage = new BaseMessage();
        if (!CommonUtil.isNullOrWhiteSpace(idList)) {
            textDistinguishService.deleteTextDistinguishById(idList);
            logger.info("成功删除id为 {} 的文字识别记录", idList);
            baseMessage.setMessage("删除成功");
        } else {
            logger.info("idList为空", idList);
            baseMessage.setMessage("idList为空");
        }
        return baseMessage.response();
    }
}
