package com.cb.yixinger.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.OrderBy;
import java.io.Serializable;

@Data
@ApiModel(value = "文字识别记录表")
public class TextDistinguish implements Serializable {
    private static final long serialVersionUID = -4755917711010543261L;
    @Id
    @OrderBy("desc")
    private Integer id;
    @ApiModelProperty(value="识别时间")
    private String date;
    @ApiModelProperty(value="用户openid")
    private String userId;
    @ApiModelProperty(value="图片保存路径")
    private String imageUrl;
    @ApiModelProperty(value="文字识别结果")
    private String words;
    @ApiModelProperty(value="进行AI操作的地点用于操作记录展示")
    private String cityName;
}