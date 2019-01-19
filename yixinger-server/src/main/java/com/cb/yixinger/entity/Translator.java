package com.cb.yixinger.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.OrderBy;
import java.io.Serializable;

@Data
@ApiModel(value = "文字翻译表")
public class Translator implements Serializable {
    private static final long serialVersionUID = 7186921460180607291L;
    @Id
    @OrderBy("desc")
    private Integer id;
    @ApiModelProperty(value = "用户openid")
    private String userId;
    @ApiModelProperty(value = "文字或图像识别表中的id")
    private Integer textId;
    @ApiModelProperty(value = "原文语种")
    private String originalLanguage;
    @ApiModelProperty(value = "译文语种")
    private String translatedLanguage;
    @ApiModelProperty(value = "翻译时间")
    private String date;
    @ApiModelProperty(value = "来源文本表的类型（1.文字识别表2.图像识别表）")
    private String type;
    @ApiModelProperty(value = "原文")
    private String originalText;
    @ApiModelProperty(value = "译文")
    private String translatedText;
}