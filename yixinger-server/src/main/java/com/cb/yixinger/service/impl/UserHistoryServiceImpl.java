package com.cb.yixinger.service.impl;

import com.cb.yixinger.dao.UserHistoryDao;
import com.cb.yixinger.dao.UserHistoryMapper;
import com.cb.yixinger.dto.UserHistoryDTO;
import com.cb.yixinger.entity.PlacePhoto;
import com.cb.yixinger.entity.TkMybatisTest;
import com.cb.yixinger.entity.UserHistory;
import com.cb.yixinger.service.UserHistoryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tk.mybatis.mapper.entity.Example;

import java.util.Arrays;
import java.util.List;

/**
 * @Description: 用户浏览记录ServiceImpl
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-01-23 11:24
 **/
@Service("UserHistoryService")
public class UserHistoryServiceImpl implements UserHistoryService {
    @Autowired
    private UserHistoryMapper userHistoryMapper;
    @Autowired
    private UserHistoryDao userHistoryDao;
    private static final Logger logger = LoggerFactory.getLogger(UserHistoryServiceImpl.class);

    @Override
    public Boolean addUserHistory(UserHistory userHistory) {
        return userHistoryMapper.insertSelective(userHistory) > 0;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void deleteUserHistoryById(String idList) {
        List<String> integerList = Arrays.asList(idList.split(";"));
        for (String id : integerList) {
            logger.info("用户浏览记录删除——删除数据库中id为 {} 的数据", id);
            userHistoryMapper.deleteByPrimaryKey(Integer.valueOf(id));
        }
    }

    /**
     * @Description: 根据用户openid和地点uid获取用户浏览记录
     * @Param: [userId, placeId]
     * @return: com.cb.yixinger.entity.UserHistory
     * @Author: Chen Ben
     * @Date: 2019/1/23
     */
    @Override
    public UserHistory getUserHistory(String userId, String placeId) {
        Example example = new Example(UserHistory.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("userId", userId);
        criteria.andEqualTo("placeId", placeId);
        List<UserHistory> userHistoryList = userHistoryMapper.selectByExample(example);
        if (userHistoryList != null && userHistoryList.size() > 0) {
            return userHistoryList.get(0);
        } else {
            return null;
        }
    }

    @Override
    public Boolean updateUserHistory(UserHistory userHistory) {
        return userHistoryMapper.updateByPrimaryKeySelective(userHistory) > 0;
    }

    @Override
    public List<UserHistoryDTO> getUserHistoryListByUserId(String userId) {
        return userHistoryDao.getUserHistoryByUserId(userId);
    }
}
