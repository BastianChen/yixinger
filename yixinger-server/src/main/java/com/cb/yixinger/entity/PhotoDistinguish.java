package com.cb.yixinger.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.OrderBy;
import java.io.Serializable;

@Data
@ApiModel(value = "图像识别记录表")
public class PhotoDistinguish implements Serializable {
    private static final long serialVersionUID = 1124982286024251007L;
    @Id
    @OrderBy("desc")
    private Integer id;
    @ApiModelProperty(value="用户openid")
    private String userId;
    @ApiModelProperty(value="图片保存url")
    private String imageUrl;
    @ApiModelProperty(value="识别时间")
    private String date;
    @ApiModelProperty(value="图像识别类型（1.通用图像识别2.植物识别3.动物识别4.菜品识别）")
    private String type;
    @ApiModelProperty(value="结果")
    private String result;
}