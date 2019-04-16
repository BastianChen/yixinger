package com.cb.yixinger.service.impl;

import com.cb.yixinger.dao.TranslatorDao;
import com.cb.yixinger.dao.TranslatorMapper;
import com.cb.yixinger.entity.Translator;
import com.cb.yixinger.entity.User;
import com.cb.yixinger.service.TranslatorService;
import com.cb.yixinger.config.Constants;
import com.cb.yixinger.utils.CommonUtil;
import com.cb.yixinger.utils.TransApi;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.List;

/**
 * @Description: 百度翻译ServiceImpl
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-30 16:54
 **/
@Service("TranslatorService")
public class TranslatorServiceImpl implements TranslatorService {
    @Autowired
    private TranslatorMapper translatorMapper;
    @Autowired
    private TranslatorDao translatorDao;
    private static final Logger logger = LoggerFactory.getLogger(TranslatorServiceImpl.class);

    @Override
    public User translateUserInfo(User user, String language) {
        TransApi api = new TransApi(Constants.APP_ID, Constants.SECURITY_KEY);
        JSONObject jsonObject;
        JSONArray jsonArray;
        if (CommonUtil.isNotEmpty(user.getCity())) {
            jsonObject = JSONObject.fromObject(api.getTransResult(user.getCity(), "auto", language));
            jsonArray = JSONArray.fromObject(jsonObject.getString("trans_result"));
            user.setCity(jsonArray.getJSONObject(0).getString("dst"));
        } else {
            user.setCity(null);
        }
        if (CommonUtil.isNotEmpty(user.getProvince())) {
            jsonObject = JSONObject.fromObject(api.getTransResult(user.getProvince(), "auto", language));
            jsonArray = JSONArray.fromObject(jsonObject.getString("trans_result"));
            user.setProvince(jsonArray.getJSONObject(0).getString("dst"));
        } else {
            user.setProvince(null);
        }
        if (CommonUtil.isNotEmpty(user.getCountry())) {
            jsonObject = JSONObject.fromObject(api.getTransResult(user.getCountry(), "auto", language));
            jsonArray = JSONArray.fromObject(jsonObject.getString("trans_result"));
            user.setCountry(jsonArray.getJSONObject(0).getString("dst"));
        } else {
            user.setCountry(null);
        }
        if ("1".equals(user.getGender())) {
            user.setGender("男");
        } else if ("2".equals(user.getGender())) {
            user.setGender("女");
        } else if ("0".equals(user.getGender())) {
            user.setGender("暂无");
        }
        return user;
    }

    /**
     * @Description: 对图像识别以及文字识别的文字进行翻译
     * JSON串格式：[{word:""},{word:""}]
     * @Param: [originalText, language]
     * @return: net.sf.json.JSONArray
     * @Author: Chen Ben
     * @Date: 2019/1/19
     */
    @Override
    public com.alibaba.fastjson.JSONArray translateText(com.alibaba.fastjson.JSONArray originalText, String userId, Integer textId, String from, String to, String type) {
        TransApi api = new TransApi(Constants.APP_ID, Constants.SECURITY_KEY);
        Translator translator = new Translator();
        com.alibaba.fastjson.JSONObject jsonObject;
        JSONObject resultObject;
        com.alibaba.fastjson.JSONArray translatedText = new com.alibaba.fastjson.JSONArray();
        JSONArray resultArray;
        logger.info("----------------开始翻译----------------");
        for (int i = 0; i < originalText.size(); i++) {
            jsonObject = (com.alibaba.fastjson.JSONObject) originalText.get(i);
            logger.info("原文为：{}", jsonObject.getString("word"));
            resultObject = JSONObject.fromObject(api.getTransResult(jsonObject.getString("word"), from, to));
            resultArray = JSONArray.fromObject(resultObject.getString("trans_result"));
            jsonObject.put("word", resultArray.getJSONObject(0).getString("dst"));
            logger.info("译文为：{}", jsonObject.getString("word"));
            translatedText.add(jsonObject);
        }
        logger.info("----------------翻译结束----------------");
//        translator.setUserId(userId);
//        translator.setTextId(textId);
//        translator.setOriginalLanguage(from);
//        translator.setTranslatedLanguage(to);
//        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//        String date = sdf.format(System.currentTimeMillis());
//        translator.setDate(date);
//        translator.setType(type);
//        translator.setOriginalText(originalText.toString());
//        translator.setTranslatedText(translatedText.toString());
//        Boolean isSuccess = translatorMapper.insertSelective(translator) > 0;
//        if (isSuccess) {
//            logger.info("添加翻译记录成功");
//        } else {
//            logger.error("添加翻译记录失败");
//        }
        return translatedText;
    }

    @Override
    public List<Translator> getTranslatorListByType(String userId, String type) {
        return translatorDao.getTranslatorListByType(userId, type);
    }

    @Override
    public void deleteTranslatorById(String idList) {
        List<String> integerList = Arrays.asList(idList.split(";"));
        for (String id : integerList) {
            translatorMapper.deleteByPrimaryKey(Integer.valueOf(id));
        }
    }

    @Override
    public Translator getTranslator(String userId, Integer textId, String from, String to, String type) {
        return translatorDao.getTranslator(userId, textId, from, to, type);
    }
}
