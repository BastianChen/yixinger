package com.cb.yixinger.entity;

import lombok.Data;

import javax.persistence.Id;
import javax.persistence.OrderBy;
import java.io.Serializable;

@Data
public class UserHistory implements Serializable {
    @Id
    @OrderBy("desc")
    private Integer id;

    private Integer userId;

    private String placeId;

    private String readDate;

    private static final long serialVersionUID = 1L;
}