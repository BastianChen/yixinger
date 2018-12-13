package com.cb.yixinger.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.OrderBy;
import java.io.Serializable;

@Data
@ApiModel(value = "地点表")
public class Place implements Serializable{
    private static final long serialVersionUID = -2347664989744015390L;
    @Id
    @OrderBy("desc")
    @ApiModelProperty(value="地点id")
    private Integer id;
    @ApiModelProperty(value="地点名称")
    private String name;
    @ApiModelProperty(value="地点地址")
    private String address;
    @ApiModelProperty(value="地点电话")
    private String phone;
    @ApiModelProperty(value="地点uid")
    private String uid;
    @ApiModelProperty(value="景点级别（如5A） 餐馆类型（如中餐馆）")
    private String showtag;
    @ApiModelProperty(value="列表图片")
    private String image;
    @ApiModelProperty(value="营业时间")
    private String shopHours;
    @ApiModelProperty(value="评论数量")
    private Integer commentNumber;
    @ApiModelProperty(value="维度")
    private Double latitude;
    @ApiModelProperty(value="经度")
    private Double longitude;
    @ApiModelProperty(value="餐馆平均价格")
    private String price;
    @ApiModelProperty(value="评分")
    private String overallRating;
    @ApiModelProperty(value="标签")
    private String tags1;
    @ApiModelProperty(value="文字推荐菜")
    private String wordList;
    @ApiModelProperty(value="有图推荐菜")
    private String imgList;
    @ApiModelProperty(value="印象标签")
    private String content;
    @ApiModelProperty(value="部分评论")
    private String commentList;
    @ApiModelProperty(value="列表图片(相册)")
    private String photoList;
    @ApiModelProperty(value="介绍")
    private String introduce;
    @ApiModelProperty(value="餐馆推荐菜数")
    private Integer count;
    @ApiModelProperty(value="建议游玩时间（景点）")
    private String sugTime;
    @ApiModelProperty(value="最佳游玩季节（景点）")
    private String bestTime;
    @ApiModelProperty(value="天气（景点）")
    private String weather;
}