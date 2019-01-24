package com.cb.yixinger.service;

import com.cb.yixinger.entity.Likes;

import java.util.List;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-01-17 13:23
 **/
public interface LikesService {
    List<Likes> getLikes(String userId, Integer placeCommentId);

    void deleteLikes(String idList);
}
