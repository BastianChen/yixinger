package com.cb.yixinger.service;

import com.cb.yixinger.entity.PageBean;
import com.cb.yixinger.entity.PhotoDistinguish;

/**
 * @Description: 图像识别Service
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-01-17 14:50
 **/
public interface PhotoDistinguishService {
    PhotoDistinguish photoDistinguishBytype(String imagePath, String type, String userId, String cityName, String imageSavePath);

    PageBean<PhotoDistinguish> getPhotoDistinguishList(String userId, String type, Integer pageNo, Integer pageSize);

    void deletePhotoDistinguishById(String idList);
}
