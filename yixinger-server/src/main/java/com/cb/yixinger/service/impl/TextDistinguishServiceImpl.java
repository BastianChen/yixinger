package com.cb.yixinger.service.impl;

import com.cb.yixinger.dao.TextDistinguishMapper;
import com.cb.yixinger.entity.TextDistinguish;
import com.cb.yixinger.service.TextDistinguishService;
import com.cb.yixinger.utils.Constants;
import com.cb.yixinger.utils.ai.ocr.AipOcr;
import org.json.JSONException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.json.JSONObject;

import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-01-17 14:52
 **/
@Service("TextDistinguishService")
public class TextDistinguishServiceImpl implements TextDistinguishService {
    @Autowired
    private TextDistinguishMapper textDistinguishMapper;
    private static final Logger logger = LoggerFactory.getLogger(TextDistinguishServiceImpl.class);

    /**
     * @Description: 文字识别
     * 通用文字识别JSON串格式：{"words_result": [{"probability": {"average": ,"min": ,"variance":},"words": "NhD51%12:57"}],"words_result_num": 16,"direction": 0,"log_id": 5170557933401924723}
     * @Param: [imagePath, userId, imageSavePath]
     * @return: com.cb.yixinger.entity.TextDistinguish
     * @Author: Chen Ben
     * @Date: 2019/1/19
     */
    @Override
    public TextDistinguish textDistinguish(String imagePath, String userId, String imageSavePath) {
        AipOcr aipOcr = new AipOcr(Constants.AI_APP_ID, Constants.AI_API_KEY, Constants.AI_SECRET_KEY);
        TextDistinguish textDistinguish = new TextDistinguish();
        HashMap<String, String> options = new HashMap<>();
        options.put("language_type", "CHN_ENG");
        options.put("detect_direction", "true");
        options.put("detect_language", "true");
        options.put("probability", "true");
        try {
            JSONObject jsonObject = aipOcr.basicAccurateGeneral(imagePath, options);
            textDistinguish.setUserId(userId);
            textDistinguish.setImageUrl(imageSavePath);
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String date = sdf.format(System.currentTimeMillis());
            textDistinguish.setDate(date);
            textDistinguish.setWords(jsonObject.toString());
        } catch (JSONException e) {
            e.printStackTrace();
        }
        textDistinguishMapper.insertSelective(textDistinguish);
        logger.info("新增文字识别记录成功");
        return textDistinguish;
    }

    @Override
    public List<TextDistinguish> getTextDistinguishList() {
        return textDistinguishMapper.selectAll();
    }

    @Override
    public void deleteTextDistinguishById(String idList) {
        List<String> integerList = Arrays.asList(idList.split(";"));
        for (String id : integerList) {
            textDistinguishMapper.deleteByPrimaryKey(Integer.valueOf(id));
        }
    }
}
