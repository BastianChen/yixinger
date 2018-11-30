package com.cb.yixinger.entity;

import lombok.Data;

import javax.persistence.Id;
import javax.persistence.OrderBy;
import java.io.Serializable;

@Data
public class Place implements Serializable {
    @Id
    @OrderBy("desc")
    private Integer id;

    private String name;

    private String address;

    private String phone;

    private String uid;

    private String showtag;

    private String image;

    private String shopHours;

    private Integer commentNumber;

    private Double latitude;

    private Double longitude;

    private Double price;

    private Double overallRating;

    private String tags1;

    private String wordList;

    private String imgList;

    private String content;

    private String commentList;

    private String photoList;

    private String introduce;

    private static final long serialVersionUID = 1L;
}