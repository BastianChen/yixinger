package com.cb.yixinger.dao;

import com.cb.yixinger.entity.User;

public interface UserMapper {
    int insert(User record);

    int insertSelective(User record);
}