package com.cb.yixinger.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.OrderBy;
import java.io.Serializable;

@Data
@ApiModel(value = "图像识别记录表")
public class PlacePhoto implements Serializable {
    private static final long serialVersionUID = 6569159022343238077L;
    @Id
    @OrderBy("desc")
    private Integer id;
    @ApiModelProperty(value="地点id")
    private String  placeId;
    @ApiModelProperty(value="图片url")
    private String imageUrl;
    @ApiModelProperty(value="图片来源")
    private String imageSource;
    @ApiModelProperty(value="浏览次数")
    private Integer readTimes;
    @ApiModelProperty(value="上传时间")
    private String uploadDate;
    @ApiModelProperty(value="用户openid")
    private String userId;
    @ApiModelProperty(value="用户昵称")
    private String userName;
    @ApiModelProperty(value="图片类型（1.爬虫数据2.用户评论）")
    private Integer photoType;
}