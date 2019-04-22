package com.cb.yixinger.dao;

import com.cb.yixinger.config.SqlMapper;
import com.cb.yixinger.dto.UserHistoryDTO;
import com.cb.yixinger.entity.UserHistory;
import com.cb.yixinger.utils.CommonUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import tk.mybatis.mapper.entity.Example;

import java.util.Dictionary;
import java.util.Hashtable;
import java.util.List;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-30 9:55
 **/
@Component
public class UserHistoryDao {
    @Autowired
    private UserHistoryMapper userHistoryMapper;
    @Autowired
    private SqlMapper sqlMapper;

    public List<UserHistoryDTO> getUserHistoryByUserId(String userId) {
        String sql = "SELECT history.id,history.user_id AS userId, history.place_id AS placeId, history.read_date AS readDate," +
                "place.name AS placeName,place.address,place.showtag,place.overall_rating AS overallRating,place.price," +
                "place.image,place.type FROM place LEFT JOIN user_history history ON history.place_id = place.uid ";
        Dictionary<String, Object> dictionary = new Hashtable<>();
        if (!CommonUtil.isNullOrWhiteSpace(userId)) {
            sql += " WHERE history.user_id = #{userId} order by readDate desc";
            dictionary.put("userId", userId);
        }
        List<UserHistoryDTO> userHistoryDTOList = sqlMapper.selectList(sql, dictionary, UserHistoryDTO.class);
        return userHistoryDTOList;
    }

    public Integer getCountByUid(String userId) {
        Example example = new Example(UserHistory.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("userId", userId);
        Integer count = userHistoryMapper.selectCountByExample(example);
        return count;
    }
}
