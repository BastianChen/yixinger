package com.cb.yixinger.entity;

import lombok.Data;

import javax.persistence.Id;
import javax.persistence.OrderBy;
import java.io.Serializable;

@Data
public class PhotoDistinguish implements Serializable {
    @Id
    @OrderBy("desc")
    private Integer id;

    private Integer userId;

    private String imageUrl;

    private String date;

    private String type;

    private String result;

    private static final long serialVersionUID = 1L;
}