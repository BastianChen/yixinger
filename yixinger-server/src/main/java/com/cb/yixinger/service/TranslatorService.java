package com.cb.yixinger.service;

import com.cb.yixinger.entity.Translator;
import com.cb.yixinger.entity.User;
import com.alibaba.fastjson.JSONArray;

import java.util.List;

/**
 * @Description: 百度翻译Service
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-30 16:53
 **/
public interface TranslatorService {
    User translateUserInfo(User user, String language);

    JSONArray translateText(JSONArray originalText, String userId, Integer textId, String from, String to, String type);

    List<Translator> getTranslatorListByType(String userId, String type);

    void deleteTranslatorById(String idList);

    Translator getTranslator(String userId, Integer textId, String from, String to, String type);
}
