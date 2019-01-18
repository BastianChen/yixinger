package com.cb.yixinger.service;

import com.cb.yixinger.entity.PhotoDistinguish;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-01-17 14:50
 **/
public interface PhotoDistinguishService {
    PhotoDistinguish photoDistinguishBytype(String imagePath, String type, String userId, String imageSavePath);
}
