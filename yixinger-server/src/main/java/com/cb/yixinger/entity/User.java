package com.cb.yixinger.entity;

import lombok.Data;

import javax.persistence.Id;
import javax.persistence.OrderBy;
import java.io.Serializable;

@Data
public class User implements Serializable {
    @Id
    @OrderBy("desc")
    private String openid;

    private String nickName;

    private String avatarUrl;

    private String city;

    private String province;

    private String country;

    private String gender;

    private String language;

    private String createDate;

    private String updateDate;

    private String location;

    private static final long serialVersionUID = 1L;
}