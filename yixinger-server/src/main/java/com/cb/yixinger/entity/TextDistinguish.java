package com.cb.yixinger.entity;

import lombok.Data;

import javax.persistence.Id;
import javax.persistence.OrderBy;
import java.io.Serializable;

@Data
public class TextDistinguish implements Serializable {
    @Id
    @OrderBy("desc")
    private Integer id;

    private String date;

    private Integer userId;

    private String imageUrl;

    private String words;

    private static final long serialVersionUID = 1L;
}