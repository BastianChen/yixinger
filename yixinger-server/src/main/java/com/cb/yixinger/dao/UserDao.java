package com.cb.yixinger.dao;

import com.cb.yixinger.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @Description: User表DAO 层操作代码
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-30 9:55
 **/
@Component
public class UserDao {
    @Autowired
    private UserMapper userMapper;

    public void addUser(User user){
        userMapper.insertSelective(user);
    }

    public User getUser(String id){
        return userMapper.selectByPrimaryKey(id);
    }

    public void updateUser(User user){
        userMapper.updateByPrimaryKeySelective(user);
    }
}
