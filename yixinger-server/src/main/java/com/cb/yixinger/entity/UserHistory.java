package com.cb.yixinger.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.OrderBy;
import java.io.Serializable;

@Data
@ApiModel(value = "用户浏览记录表")
public class UserHistory implements Serializable {
    private static final long serialVersionUID = -2948592641233486987L;
    @Id
    @OrderBy("desc")
    private Integer id;
    @ApiModelProperty(value="用户openid")
    private Integer userId;
    @ApiModelProperty(value="地点id")
    private String placeId;
    @ApiModelProperty(value="用户浏览时间")
    private String readDate;
}