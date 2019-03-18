package com.cb.yixinger.controller;

import com.alibaba.fastjson.JSONArray;
import com.cb.yixinger.config.LoggerManage;
import com.cb.yixinger.entity.BaseMessage;
import com.cb.yixinger.entity.PhotoDistinguish;
import com.cb.yixinger.entity.TextDistinguish;
import com.cb.yixinger.entity.Translator;
import com.cb.yixinger.service.*;
import com.cb.yixinger.utils.CommonUtil;
import com.cb.yixinger.utils.ai.speech.DemoException;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.json.JSONException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

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
    @Autowired
    private SpeechService speechService;
    @Autowired
    private FileUploadService fileUploadService;
    private static final Logger logger = LoggerFactory.getLogger(AIOperateController.class);

    @LoggerManage(logDescription = "图像识别")
    @ApiOperation(value = "图像识别", notes = "图像识别 ", response = BaseMessage.class)
    @RequestMapping(value = "/imageClassify", produces = {"application/json; charset=UTF-8"}, method = RequestMethod.POST)
    public ResponseEntity<BaseMessage> imageClassify(
            @ApiParam(value = "图片", required = true) @RequestParam(value = "imageFile") MultipartFile imageFile,
            @ApiParam(value = "图像识别类型（1.通用图像识别2.植物识别3.动物识别4.菜品识别）", required = true) @RequestParam(value = "type") String type,
            @ApiParam(value = "用户openid", required = true) @RequestParam(value = "userId") String userId) throws IOException {
        BaseMessage baseMessage = new BaseMessage();
        String resourcePath = System.getProperty("user.dir") + "/src/main/resources/static/images/photo/";
        String imageName = fileUploadService.fileUpload(resourcePath, imageFile, baseMessage);
        if (!CommonUtil.isNullOrWhiteSpace(imageName)) {
            logger.info("返回的图片名称为 {}", imageName + "_src.jpg");
            logger.info("----------------图像识别开始----------------");
            PhotoDistinguish photoDistinguish = photoDistinguishService.photoDistinguishBytype(resourcePath + imageName + "_src.jpg", type, userId,
                    "/images/photo/" + imageName + "_src.jpg");
            logger.info("----------------图像识别结束----------------");
            if (photoDistinguish != null) {
                baseMessage.setData(photoDistinguish);
                baseMessage.setMessage("图像识别成功");
            } else {
                baseMessage.initStateAndMessage(1001, "图像识别失败");
            }
        } else {
            logger.info("返回的图片名称为Null");
            baseMessage.initStateAndMessage(1001, "图像识别失败,返回的图片名称为Null");
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "根据用户openid以及type类型获取图像识别所有记录")
    @ApiOperation(value = "根据用户openid以及type类型获取图像识别所有记录", notes = "根据用户openid以及type类型获取图像识别所有记录 ", response = BaseMessage.class)
    @RequestMapping(value = "/getPhotoDistinguishList", produces = {"application/json"}, method = RequestMethod.GET)
    public ResponseEntity<BaseMessage> getPhotoDistinguishList(
            @ApiParam(value = "用户openid", required = true) @RequestParam(value = "userId") String userId,
            @ApiParam(value = "图像识别类型（1.通用图像识别2.植物识别3.动物识别4.菜品识别）") @RequestParam(value = "type", required = false) String type) {
        BaseMessage baseMessage = new BaseMessage();
        List<PhotoDistinguish> photoDistinguishList = photoDistinguishService.getPhotoDistinguishList(userId, type);
        if (photoDistinguishList != null && photoDistinguishList.size() > 0) {
            logger.info("获取图像识别所有记录成功");
            baseMessage.setMessage("获取图像识别所有记录成功");
            baseMessage.setData(photoDistinguishList);
        } else {
            logger.info("暂无图像识别的历史记录");
            baseMessage.initStateAndMessage(1001, "暂无历史记录");
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "根据id删除图像识别记录")
    @ApiOperation(value = "根据id删除图像识别记录", notes = "根据id删除图像识别记录 ", response = BaseMessage.class)
    @RequestMapping(value = "/deletePhotoDistinguishById", produces = {"application/json"}, method = RequestMethod.POST)
    public ResponseEntity<BaseMessage> deletePhotoDistinguishById(
            @ApiParam(value = "记录id", required = true) @RequestParam(value = "idList") String idList) {
        BaseMessage baseMessage = new BaseMessage();
        if (!CommonUtil.isNullOrWhiteSpace(idList)) {
            photoDistinguishService.deletePhotoDistinguishById(idList);
            logger.info("成功删除id为 {} 的图像识别记录", idList);
            baseMessage.setMessage("删除成功");
        } else {
            logger.info("idList为空", idList);
            baseMessage.initStateAndMessage(1001, "idList为空");
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "文字识别")
    @ApiOperation(value = "文字识别", notes = "文字识别 ", response = BaseMessage.class)
    @RequestMapping(value = "/aipOcr", produces = {"application/json; charset=UTF-8"}, method = RequestMethod.POST)
    public ResponseEntity<BaseMessage> aipOcr(
            @ApiParam(value = "图片", required = true) @RequestParam(value = "imageFile") MultipartFile imageFile,
            @ApiParam(value = "用户openid", required = true) @RequestParam(value = "userId") String userId) throws IOException {
        BaseMessage baseMessage = new BaseMessage();
        String resourcePath = System.getProperty("user.dir") + "/src/main/resources/static/images/text/";
        String imageName = fileUploadService.fileUpload(resourcePath, imageFile, baseMessage);
        if (!CommonUtil.isNullOrWhiteSpace(imageName)) {
            logger.info("返回的图片名称为 {}", imageName + "_src.jpg");
            logger.info("----------------文字识别开始----------------");
            TextDistinguish textDistinguish = textDistinguishService.textDistinguish(resourcePath + imageName + "_src.jpg",
                    userId, "/images/text/" + imageName + "_src.jpg");
            logger.info("----------------文字识别结束----------------");
            if (textDistinguish != null) {
                baseMessage.setData(textDistinguish);
                baseMessage.setMessage("文字识别成功");
            } else {
                baseMessage.initStateAndMessage(1001, "文字识别失败");
            }
        } else {
            logger.info("返回的图片名称为Null");
            baseMessage.initStateAndMessage(1001, "文字识别失败,返回的图片名称为Null");
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "根据用户openid获取文字识别所有记录")
    @ApiOperation(value = "根据用户openid获取文字识别所有记录", notes = "根据用户openid获取文字识别所有记录 ", response = BaseMessage.class)
    @RequestMapping(value = "/getTextDistinguishList", produces = {"application/json"}, method = RequestMethod.GET)
    public ResponseEntity<BaseMessage> getTextDistinguishList(
            @ApiParam(value = "用户openid", required = true) @RequestParam(value = "userId") String userId) {
        BaseMessage baseMessage = new BaseMessage();
        List<TextDistinguish> textDistinguishList = textDistinguishService.getTextDistinguishList(userId);
        if (textDistinguishList != null && textDistinguishList.size() > 0) {
            logger.info("获取文字识别所有记录成功");
            baseMessage.setMessage("获取文字识别所有记录成功");
            baseMessage.setData(textDistinguishList);
        } else {
            logger.info("暂无文字识别的历史记录");
            baseMessage.initStateAndMessage(1001, "暂无历史记录");
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "根据id删除文字识别记录")
    @ApiOperation(value = "根据id删除文字识别记录", notes = "根据id删除文字识别记录 ", response = BaseMessage.class)
    @RequestMapping(value = "/deleteTextDistinguishById", produces = {"application/json"}, method = RequestMethod.POST)
    public ResponseEntity<BaseMessage> deleteTextDistinguishById(
            @ApiParam(value = "记录id", required = true) @RequestParam(value = "idList") String idList) {
        BaseMessage baseMessage = new BaseMessage();
        if (!CommonUtil.isNullOrWhiteSpace(idList)) {
            textDistinguishService.deleteTextDistinguishById(idList);
            logger.info("成功删除id为 {} 的文字识别记录", idList);
            baseMessage.setMessage("删除成功");
        } else {
            logger.info("idList为空", idList);
            baseMessage.initStateAndMessage(1001, "idList为空");
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "文字翻译")
    @ApiOperation(value = "文字翻译", notes = "文字翻译 ", response = BaseMessage.class)
    @RequestMapping(value = "/translateText", produces = {"application/json; charset=UTF-8"}, method = RequestMethod.POST)
    public ResponseEntity<BaseMessage> translateText(
            @ApiParam(value = "原文（string类型）", required = true) @RequestParam(value = "originalText") String originalText,
            @ApiParam(value = "用户openid", required = true) @RequestParam(value = "userId") String userId,
            @ApiParam(value = "文本来源表中的id", required = true) @RequestParam(value = "textId") Integer textId,
            @ApiParam(value = "原文语种", required = true, defaultValue = "auto") @RequestParam(value = "from") String from,
            @ApiParam(value = "用户选择的翻译语言", required = true, defaultValue = "zh") @RequestParam(value = "to") String to,
            @ApiParam(value = "来源文本表的类型（1.文字识别表2.图像识别表）", required = true) @RequestParam(value = "type") String type) {
        BaseMessage baseMessage = new BaseMessage();
        JSONArray originalTextArray = JSONArray.parseArray(originalText);
        JSONArray translatedText = translatorService.translateText(originalTextArray, userId, textId, from, to, type);
        if (!translatedText.equals(null)) {
            baseMessage.setData(translatedText);
            baseMessage.setMessage("翻译成功");
        } else {
            baseMessage.initStateAndMessage(1001, "翻译失败");
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "根据用户openid以及type类型获取所有翻译记录")
    @ApiOperation(value = "根据用户openid以及type类型获取所有翻译记录", notes = "根据用户openid以及type类型获取所有翻译记录 ", response = BaseMessage.class)
    @RequestMapping(value = "/getTranslatorListByType", produces = {"application/json"}, method = RequestMethod.GET)
    public ResponseEntity<BaseMessage> getTranslatorListByType(
            @ApiParam(value = "用户openid", required = true) @RequestParam(value = "userId") String userId,
            @ApiParam(value = "type类型（1.文字识别2.图像识别）") @RequestParam(value = "type", required = false) String type) {
        BaseMessage baseMessage = new BaseMessage();
        List<Translator> translatorList = translatorService.getTranslatorListByType(userId, type);
        if (translatorList != null && translatorList.size() > 0) {
            if ("1".equals(type)) {
                logger.info("获取type类型为 {} 的所有翻译记录成功", "文字识别");
                baseMessage.setMessage("获取文字识别的所有翻译记录成功");
            } else if ("2".equals(type)) {
                logger.info("获取type类型为 {} 的所有翻译记录成功", "图像识别");
                baseMessage.setMessage("获取图像识别的所有翻译记录成功");
            } else if (CommonUtil.isNullOrWhiteSpace(type)) {
                logger.info("获取所有翻译记录成功");
                baseMessage.setMessage("获取所有翻译记录成功");
            }
            baseMessage.setData(translatorList);
        } else {
            logger.info("暂无该类型的翻译记录");
            baseMessage.initStateAndMessage(1001, "暂无历史记录");
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "根据id删除翻译记录")
    @ApiOperation(value = "根据id删除翻译记录", notes = "根据id删除翻译记录 ", response = BaseMessage.class)
    @RequestMapping(value = "/deleteTranslatorById", produces = {"application/json"}, method = RequestMethod.POST)
    public ResponseEntity<BaseMessage> deleteTranslatorById(
            @ApiParam(value = "记录id", required = true) @RequestParam(value = "idList") String idList) {
        BaseMessage baseMessage = new BaseMessage();
        if (!CommonUtil.isNullOrWhiteSpace(idList)) {
            translatorService.deleteTranslatorById(idList);
            logger.info("成功删除id为 {} 的翻译记录", idList);
            baseMessage.setMessage("删除成功");
        } else {
            logger.info("idList为空", idList);
            baseMessage.initStateAndMessage(1001, "idList为空");
        }
        return baseMessage.response();
    }

    @LoggerManage(logDescription = "语音合成")
    @ApiOperation(value = "语音合成", notes = "语音合成 ", response = BaseMessage.class)
    @RequestMapping(value = "/speechSynthesis", produces = {"application/json"}, method = RequestMethod.POST)
    public ResponseEntity<BaseMessage> speechSynthesis(
            @ApiParam(value = "文本List", required = true) @RequestParam(value = "text") String text,
            @ApiParam(value = "用户openid", required = true) @RequestParam(value = "userId") String userId) throws JSONException, DemoException, IOException {
        BaseMessage baseMessage = new BaseMessage();
        if (!CommonUtil.isNullOrWhiteSpace(text)) {
            String speechPath = speechService.speechSynthesis(text, userId);
            if (!CommonUtil.isNullOrWhiteSpace(speechPath)) {
                baseMessage.setData(speechPath);
                baseMessage.setMessage("语音合成成功");
            } else {
                baseMessage.initStateAndMessage(1001, "语音合成失败");
            }
        }
        return baseMessage.response();
    }
}
