package com.cb.yixinger.dao;

import com.cb.yixinger.entity.UserHistory;

public interface UserHistoryMapper {
    int insert(UserHistory record);

    int insertSelective(UserHistory record);
}