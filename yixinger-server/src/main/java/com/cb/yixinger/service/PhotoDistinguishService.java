package com.cb.yixinger.service;

import com.cb.yixinger.entity.PhotoDistinguish;

import java.util.List;

/**
 * @Description: 图像识别Service
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-01-17 14:50
 **/
public interface PhotoDistinguishService {
    PhotoDistinguish photoDistinguishBytype(String imagePath, String type, String userId, String imageSavePath);

    List<PhotoDistinguish> getPhotoDistinguishList(String userId, String type);

    void deletePhotoDistinguishById(String idList);
}
