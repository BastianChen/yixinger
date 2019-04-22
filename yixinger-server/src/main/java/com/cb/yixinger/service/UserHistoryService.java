package com.cb.yixinger.service;

import com.cb.yixinger.dto.UserHistoryDTO;
import com.cb.yixinger.entity.PageBean;
import com.cb.yixinger.entity.UserHistory;

/**
 * @Description: 用户浏览记录Service
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-01-23 11:23
 **/
public interface UserHistoryService {
    Boolean addUserHistory(UserHistory userHistory);

    void deleteUserHistoryById(String idList);

    UserHistory getUserHistory(String userId, String placeId);

    Boolean updateUserHistory(UserHistory userHistory);

    PageBean<UserHistoryDTO> getUserHistoryListByUserId(String userId, Integer pageNo, Integer pageSize);

}
