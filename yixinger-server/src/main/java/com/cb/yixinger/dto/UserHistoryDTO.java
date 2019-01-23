package com.cb.yixinger.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-01-23 13:37
 **/
@Data
public class UserHistoryDTO {
    @ApiModelProperty(value = "user_history表id")
    private Integer id;
    @ApiModelProperty(value = "用户openid")
    private String userId;
    @ApiModelProperty(value = "游玩地点uid")
    private String placeId;
    @ApiModelProperty(value = "用户浏览时间")
    private String readDate;
    @ApiModelProperty(value = "游玩地点名称")
    private String placeName;
    @ApiModelProperty(value = "地址")
    private String address;
    @ApiModelProperty(value = "景点级别（如5A） 餐馆类型（如中餐馆）")
    private String showtag;
    @ApiModelProperty(value = "评分")
    private Double overallRating;
    @ApiModelProperty(value = "餐馆平均价格")
    private String price;
    @ApiModelProperty(value = "图片url")
    private String image;
}
