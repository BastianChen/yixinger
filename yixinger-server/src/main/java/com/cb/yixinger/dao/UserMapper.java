package com.cb.yixinger.dao;

import com.cb.yixinger.config.BaseMapper;
import com.cb.yixinger.entity.User;
import org.springframework.stereotype.Repository;

@Repository("UserMapper")
public interface UserMapper extends BaseMapper<User> {
}