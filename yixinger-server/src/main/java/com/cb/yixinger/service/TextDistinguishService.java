package com.cb.yixinger.service;

import com.cb.yixinger.entity.PageBean;
import com.cb.yixinger.entity.TextDistinguish;

/**
 * @Description: 文字识别Service
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-01-17 14:52
 **/
public interface TextDistinguishService {
    TextDistinguish textDistinguish(String imagePath, String userId, String cityName, String imageSavePath);

    PageBean<TextDistinguish> getTextDistinguishList(String userId, Integer pageNo, Integer pageSize);

    void deleteTextDistinguishById(String idList);
}
