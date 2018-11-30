package com.cb.yixinger.service;

import com.cb.yixinger.entity.User;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-30 16:53
 **/
public interface TranslatorService {
    User translateUserInfo(User user,String language);
}
