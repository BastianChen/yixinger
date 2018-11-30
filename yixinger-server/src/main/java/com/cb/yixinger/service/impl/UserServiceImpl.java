package com.cb.yixinger.service.impl;

import com.cb.yixinger.dao.UserDao;
import com.cb.yixinger.entity.User;
import com.cb.yixinger.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-30 11:35
 **/
@Service("UserService")
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;
    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    @Override
    public void addUser(User user) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date = sdf.format(System.currentTimeMillis());
        user.setCreateDate(date);
        userDao.addUser(user);
    }

    @Override
    public User getUser(String id) {
        return userDao.getUser(id);
    }

    @Override
    public void updateUser(User user) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date = sdf.format(System.currentTimeMillis());
        user.setUpdateDate(date);
        userDao.updateUser(user);
    }
}
