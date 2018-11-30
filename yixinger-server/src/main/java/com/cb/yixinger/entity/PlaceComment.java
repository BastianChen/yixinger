package com.cb.yixinger.entity;

import lombok.Data;

import javax.persistence.Id;
import javax.persistence.OrderBy;
import java.io.Serializable;

@Data
public class PlaceComment implements Serializable {
    @Id
    @OrderBy("desc")
    private Integer id;

    private Integer placeId;

    private Integer likes;

    private String date;

    private Integer userId;

    private String userName;

    private String userImage;

    private Double overallRating;

    private String comment;

    private String imageList;

    private static final long serialVersionUID = 1L;
}