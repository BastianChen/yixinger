package com.cb.yixinger.service.impl;

import com.cb.yixinger.dao.PhotoDistinguishMapper;
import com.cb.yixinger.entity.PhotoDistinguish;
import com.cb.yixinger.service.PhotoDistinguishService;
import com.cb.yixinger.utils.Constants;
import com.cb.yixinger.utils.ai.imageclassify.AipImageClassify;
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
 * @create: 2019-01-17 14:51
 **/
@Service("PhotoDistinguishService")
public class PhotoDistinguishSerciceImpl implements PhotoDistinguishService {
    @Autowired
    private PhotoDistinguishMapper photoDistinguishMapper;
    private static final Logger logger = LoggerFactory.getLogger(PhotoDistinguishSerciceImpl.class);

    /**
     * @Description: 图像识别service type(1.通用图像识别2.植物识别3.动物识别4.菜品识别)
     * 通用图像识别JSON串格式：{"result": [{"score": ,"root": "","keyword": "","baike_info": {"baike_url": "","image_url": "","description": ""}}],"log_id": ,"result_num": 5}
     * 植物识别JSON串格式：{"result": [{"score": "","name": "","baike_info": {"baike_url": "","image_url": "","description": ""}}],"log_id":}
     * 动物识别JSON串格式：{"result": [{"score": "","name": "","baike_info": {"baike_url": "","image_url": "","description": ""}}],"log_id":} 热量单位为KJ/100g
     * 菜品识别JSON串格式：{"result": [{"probability": "","has_calorie": true,"calorie": "","name": "","baike_info": {"baike_url": "","image_url": "","description": ""}}],"log_id": ,"result_num": 5}
     * @Param: [imagePath, type, userId]
     * @return: com.cb.yixinger.entity.PhotoDistinguish
     * @Author: Chen Ben
     * @Date: 2019/1/18
     */
    @Override
    public PhotoDistinguish photoDistinguishBytype(String imagePath, String type, String userId, String imageSavePath) {
        AipImageClassify aipImageClassify = new AipImageClassify(Constants.AI_APP_ID, Constants.AI_API_KEY, Constants.AI_SECRET_KEY);
        HashMap<String, String> options = new HashMap<>(16);
        options.put("baike_num", "5");
        PhotoDistinguish photoDistinguish = new PhotoDistinguish();
        JSONObject jsonObject = new JSONObject();
        try {
            switch (type) {
                case "1":
                    logger.info("----------------本次图像识别为通用图像识别----------------");
                    jsonObject = aipImageClassify.advancedGeneral(imagePath, options);
                    break;
                case "2":
                    logger.info("----------------本次图像识别为植物识别----------------");
                    jsonObject = aipImageClassify.plantDetect(imagePath, options);
                    break;
                case "3":
                    logger.info("----------------本次图像识别为动物识别----------------");
                    jsonObject = aipImageClassify.animalDetect(imagePath, options);
                    break;
                case "4":
                    logger.info("----------------本次图像识别为菜品识别----------------");
                    jsonObject = aipImageClassify.dishDetect(imagePath, options);
                    break;
                default:
                    break;
            }
            photoDistinguish.setUserId(userId);
            photoDistinguish.setImageUrl(imageSavePath);
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String date = sdf.format(System.currentTimeMillis());
            photoDistinguish.setDate(date);
            photoDistinguish.setType(type);
            photoDistinguish.setResult(jsonObject.toString());
        } catch (JSONException e) {
            e.printStackTrace();
        }
        photoDistinguishMapper.insertSelective(photoDistinguish);
        logger.info("新增图像识别记录成功");
        return photoDistinguish;
    }

    @Override
    public List<PhotoDistinguish> getPhotoDistinguishList() {
        return photoDistinguishMapper.selectAll();
    }

    @Override
    public void deletePhotoDistinguishById(String idList) {
        List<String> integerList = Arrays.asList(idList.split(";"));
        for (String id : integerList) {
            photoDistinguishMapper.deleteByPrimaryKey(Integer.valueOf(id));
        }
    }
}
