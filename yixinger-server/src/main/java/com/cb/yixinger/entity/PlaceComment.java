package com.cb.yixinger.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.OrderBy;
import java.io.Serializable;

@Data
@ApiModel(value = "地点评论表")
public class PlaceComment implements Serializable {
    private static final long serialVersionUID = -8233088271683705815L;
    @Id
    @OrderBy("desc")
    private Integer id;
    @ApiModelProperty(value="地点id")
    private Integer placeId;
    @ApiModelProperty(value="评论点赞数")
    private Integer likes;
    @ApiModelProperty(value="评论时间")
    private String date;
    @ApiModelProperty(value="用户openid")
    private Integer userId;
    @ApiModelProperty(value="用户昵称")
    private String userName;
    @ApiModelProperty(value="用户头像url")
    private String userImage;
    @ApiModelProperty(value="对该游玩地点的评分")
    private Double overallRating;
    @ApiModelProperty(value="评论内容")
    private String comment;
    @ApiModelProperty(value="评论图片")
    private String imageList;
}