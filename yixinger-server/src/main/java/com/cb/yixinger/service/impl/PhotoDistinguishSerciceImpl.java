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
import java.util.HashMap;

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

    @Override
    public PhotoDistinguish photoDistinguishBytype(String imagePath, String type, String userId) {
        AipImageClassify aipImageClassify = new AipImageClassify(Constants.AI_APP_ID, Constants.AI_API_KEY, Constants.AI_SECRET_KEY);
        HashMap<String, String> options1 = new HashMap<String, String>();
        options1.put("baike_num", "5");
        PhotoDistinguish photoDistinguish = new PhotoDistinguish();
        try {
            JSONObject jsonObject = aipImageClassify.advancedGeneral(imagePath, options1);
            photoDistinguish.setUserId(userId);
            photoDistinguish.setImageUrl(imagePath);
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String date = sdf.format(System.currentTimeMillis());
            photoDistinguish.setDate(date);
            photoDistinguish.setType(type);
            photoDistinguish.setResult(jsonObject.toString());
        } catch (JSONException e) {
            e.printStackTrace();
        }
        photoDistinguishMapper.insertSelective(photoDistinguish);
        return photoDistinguish;
    }
}
