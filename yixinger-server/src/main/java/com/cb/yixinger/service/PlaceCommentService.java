package com.cb.yixinger.service;

import com.cb.yixinger.entity.Likes;
import com.cb.yixinger.entity.PageBean;
import com.cb.yixinger.entity.PlaceComment;

import java.util.List;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-01-16 13:37
 **/
public interface PlaceCommentService {
    PageBean<PlaceComment> getPlaceCommentByUid(String uid, Integer pageNo, Integer pageSize);

    boolean addPlaceComment(PlaceComment placeComment);

    void addPlaceCommentByReptile(String commentList, String placeId);

    List<PlaceComment> getPlaceComment(String uid);

    PlaceComment getPlaceCommentByPlaceCommentId(Integer placeCommentId);

    PlaceComment updateLikes(Likes likes, PlaceComment placeComment, Boolean isLikes, String userId);
}
