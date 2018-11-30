package com.cb.yixinger.entity;

import lombok.Data;

import javax.persistence.Id;
import javax.persistence.OrderBy;
import java.io.Serializable;

@Data
public class PlacePhoto implements Serializable {
    @Id
    @OrderBy("desc")
    private Integer id;

    private Integer placeId;

    private String imageUrl;

    private String imageSource;

    private Integer readTimes;

    private String uploadDate;

    private Integer userId;

    private String userName;

    private static final long serialVersionUID = 1L;
}