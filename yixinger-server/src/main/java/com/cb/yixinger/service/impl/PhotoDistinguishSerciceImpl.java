package com.cb.yixinger.service.impl;

import com.cb.yixinger.dao.PhotoDistinguishMapper;
import com.cb.yixinger.entity.PhotoDistinguish;
import com.cb.yixinger.service.PhotoDistinguishService;
import com.cb.yixinger.config.Constants;
import com.cb.yixinger.utils.CommonUtil;
import com.cb.yixinger.utils.ai.imageclassify.AipImageClassify;
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
 * @Description: 图像识别ServiceImpl
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
        File dir = new File(imagePath);
        if (!dir.exists()) {
            logger.error("服务器中不存在该图片");
            return null;
        }
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
        Boolean isSuccess = photoDistinguishMapper.insertSelective(photoDistinguish) > 0;
        if (isSuccess) {
            logger.info("新增图像识别记录成功");
        } else {
            logger.error("新增图像识别记录失败");
        }
        return photoDistinguish;
    }

    @Override
    public List<PhotoDistinguish> getPhotoDistinguishList(String userId, String type) {
        Example example = new Example(PhotoDistinguish.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("userId", userId);
        if (!CommonUtil.isNullOrWhiteSpace(type)) {
            criteria.andEqualTo("type", type);
        }
        List<PhotoDistinguish> photoDistinguishList = photoDistinguishMapper.selectByExample(example);
        return photoDistinguishList;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void deletePhotoDistinguishById(String idList) {
        String resourcePath = System.getProperty("user.dir") + "/yixinger-server/src/main/resources/static/";
        List<String> integerList = Arrays.asList(idList.split(";"));
        for (String id : integerList) {
            PhotoDistinguish photoDistinguish = photoDistinguishMapper.selectByPrimaryKey(Integer.valueOf(id));
            if (photoDistinguish != null) {
                File file = new File(resourcePath + photoDistinguish.getImageUrl());
                if (file.exists()) {
                    logger.info("图像识别记录——删除项目中的图片文件，文件路径为 {}", resourcePath + photoDistinguish.getImageUrl());
                    file.delete();
                    logger.info("图像识别记录——删除图片文件成功");
                }
                logger.info("图像识别记录——删除数据库中id为 {} 的数据", id);
                photoDistinguishMapper.deleteByPrimaryKey(Integer.valueOf(id));
            } else {
                logger.info("图像识别记录——数据库中并没有id为 {} 的数据", id);
            }
        }
    }
}
