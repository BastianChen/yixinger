package com.cb.yixinger.dao;

import com.cb.yixinger.config.BaseMapper;
import com.cb.yixinger.entity.UserHistory;
import org.springframework.stereotype.Repository;

@Repository("UserHistoryMapper")
public interface UserHistoryMapper extends BaseMapper<UserHistory> {
}