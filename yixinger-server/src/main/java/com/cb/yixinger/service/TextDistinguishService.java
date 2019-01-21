package com.cb.yixinger.service;

import com.cb.yixinger.entity.TextDistinguish;

import java.util.List;

/**
 * @Description: 文字识别Service
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-01-17 14:52
 **/
public interface TextDistinguishService {
    TextDistinguish textDistinguish(String imagePath, String userId, String imageSavePath);

    List<TextDistinguish> getTextDistinguishList();

    void deleteTextDistinguishById(String idList);
}
