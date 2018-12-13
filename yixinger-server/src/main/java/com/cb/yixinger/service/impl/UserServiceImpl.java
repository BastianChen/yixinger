package com.cb.yixinger.service.impl;

import com.cb.yixinger.dao.UserDao;
import com.cb.yixinger.entity.User;
import com.cb.yixinger.service.UserService;
import com.cb.yixinger.utils.Constants;
import com.cb.yixinger.utils.HttpRequestor;
import net.sf.json.JSONObject;
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

    @Override
    public String getOpenId(String code) {
        String appid = Constants.APPID;
        String secret = Constants.SECRET;
        String requestUrl = "https://api.weixin.qq.com/sns/jscode2session?appid=" + appid + "&secret=" + secret + "&js_code="+code+"&grant_type=authorization_code";
        //获取openid
        String oppid = null;
        try {
            oppid = new HttpRequestor().doGet(requestUrl);
        } catch (Exception e) {
            e.printStackTrace();
        }
        JSONObject oppidObj = JSONObject.fromObject(oppid);
        String openid = (String) oppidObj.get("openid");
        return openid;
    }
}
