package com.cb.yixinger.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.OrderBy;
import java.io.Serializable;

@Data
@ApiModel(value = "用户表")
public class User implements Serializable {
    private static final long serialVersionUID = 4673297262329304310L;
    @Id
    @ApiModelProperty(value="用户微信openid")
    private String openid;
    @ApiModelProperty(value="用户昵称")
    private String nickName;
    @ApiModelProperty(value="用户头像url")
    private String avatarUrl;
    @ApiModelProperty(value="用户所属城市")
    private String city;
    @ApiModelProperty(value="用户所属省份")
    private String province;
    @ApiModelProperty(value="用户国籍")
    private String country;
    @ApiModelProperty(value="用户性别")
    private String gender;
    @ApiModelProperty(value="用户所选语言")
    private String language;
    @ApiModelProperty(value="创建时间")
    private String createDate;
    @ApiModelProperty(value="用户数据更新时间")
    private String updateDate;
    @ApiModelProperty(value="用户所在国家")
    private String location;
}