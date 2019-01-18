package com.cb.yixinger.controller;

import com.cb.yixinger.config.LoggerManage;
import com.cb.yixinger.entity.BaseMessage;
import com.cb.yixinger.entity.PhotoDistinguish;
import com.cb.yixinger.service.PhotoDistinguishService;
import com.cb.yixinger.service.TextDistinguishService;
import com.cb.yixinger.service.TranslatorService;
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
            @ApiParam(value = "用户openid", required = true) @RequestParam(value = "用户openid") String userId) throws IOException {
        BaseMessage baseMessage = new BaseMessage();
        String resourcePath = System.getProperty("user.dir") + "/yixinger-server/src/main/resources/static/images/";
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
                        "/yixinger-server/src/main/resources/static/images/" + saveName + "_src.jpg");
                logger.info("----------------图像识别结束----------------");
                baseMessage.setData(photoDistinguish);
                baseMessage.setMessage("识别成功");
            }
        }
        return baseMessage.response();
    }
}
