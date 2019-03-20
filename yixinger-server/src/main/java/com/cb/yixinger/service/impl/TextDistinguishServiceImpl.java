package com.cb.yixinger.service.impl;

import com.cb.yixinger.dao.TextDistinguishMapper;
import com.cb.yixinger.entity.TextDistinguish;
import com.cb.yixinger.service.TextDistinguishService;
import com.cb.yixinger.config.Constants;
import com.cb.yixinger.utils.CommonUtil;
import com.cb.yixinger.utils.ai.ocr.AipOcr;
import org.json.JSONException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.json.JSONObject;
import org.springframework.transaction.annotation.Transactional;
import tk.mybatis.mapper.entity.Example;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

/**
 * @Description: 文字识别ServiceImpl
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
    public TextDistinguish textDistinguish(String imagePath, String userId, String cityName, String imageSavePath) {
        AipOcr aipOcr = new AipOcr(Constants.AI_APP_ID, Constants.AI_API_KEY, Constants.AI_SECRET_KEY);
        TextDistinguish textDistinguish = new TextDistinguish();
        HashMap<String, String> options = new HashMap<>();
        options.put("language_type", "CHN_ENG");
        options.put("detect_direction", "true");
        options.put("detect_language", "true");
        options.put("probability", "true");
        File dir = new File(imagePath);
        if (!dir.exists()) {
            logger.error("服务器中不存在该图片");
            return null;
        }
        try {
            JSONObject jsonObject = aipOcr.basicAccurateGeneral(imagePath, options);
            textDistinguish.setUserId(userId);
            textDistinguish.setCityName(cityName);
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
        textDistinguish = textDistinguishMapper.selectOne(textDistinguish);
        return textDistinguish;
    }

    @Override
    public List<TextDistinguish> getTextDistinguishList(String userId) {
        Example example = new Example(TextDistinguish.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("userId", userId);
        List<TextDistinguish> textDistinguishList = textDistinguishMapper.selectByExample(example);
        return textDistinguishList;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void deleteTextDistinguishById(String idList) {
        String resourcePath = System.getProperty("user.dir") + "/yixinger-server/src/main/resources/static/";
        List<String> integerList = Arrays.asList(idList.split(";"));
        for (String id : integerList) {
            TextDistinguish textDistinguish = textDistinguishMapper.selectByPrimaryKey(Integer.valueOf(id));
            if (textDistinguish != null) {
                File file = new File(resourcePath + textDistinguish.getImageUrl());
                if (file.exists()) {
                    logger.info("文字识别记录——删除项目中的图片文件，文件路径为 {}", resourcePath + textDistinguish.getImageUrl());
                    file.delete();
                    logger.info("文字识别记录——删除图片文件成功");
                }
                logger.info("文字识别记录——删除数据库中id为 {} 的数据", id);
                textDistinguishMapper.deleteByPrimaryKey(Integer.valueOf(id));
            } else {
                logger.info("文字识别记录——数据库中并没有id为 {} 的数据", id);
            }
        }
    }
}
