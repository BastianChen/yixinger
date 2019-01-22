package com.cb.yixinger.dto;

import com.cb.yixinger.entity.Place;
import com.cb.yixinger.entity.PlaceComment;
import com.cb.yixinger.entity.PlacePhoto;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.List;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-01-16 15:14
 **/
@Data
public class PlaceDTO {
    @ApiModelProperty(value = "地点对象")
    private Place place;
    @ApiModelProperty(value = "地点评论列表")
    private List<PlaceComment> placeCommentList;
    @ApiModelProperty(value = "地点图片列表")
    private List<PlacePhoto> placePhotoList;
}
