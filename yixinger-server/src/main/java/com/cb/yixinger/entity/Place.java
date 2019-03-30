package com.cb.yixinger.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.OrderBy;
import java.io.Serializable;

@Data
@ApiModel(value = "地点表")
public class Place implements Serializable {
    private static final long serialVersionUID = -2347664989744015390L;
    @Id
    @OrderBy("desc")
    @ApiModelProperty(value = "地点id")
    private Integer id;
    @ApiModelProperty(value = "地点名称")
    private String name;
    @ApiModelProperty(value = "地点地址")
    private String address;
    @ApiModelProperty(value = "地点电话")
    private String phone;
    @ApiModelProperty(value = "地点uid")
    private String uid;
    @ApiModelProperty(value = "景点级别（如5A） 餐馆类型（如中餐馆）")
    private String showtag;
    @ApiModelProperty(value = "列表图片")
    private String image;
    @ApiModelProperty(value = "营业时间")
    private String shopHours;
    @ApiModelProperty(value = "评论数量")
    private Integer commentNumber;
    @ApiModelProperty(value = "维度")
    private Double latitude;
    @ApiModelProperty(value = "经度")
    private Double longitude;
    @ApiModelProperty(value = "餐馆平均价格")
    private String price;
    @ApiModelProperty(value = "评分")
    private Double overallRating;
    @ApiModelProperty(value = "标签")
    private String tags1;
    @ApiModelProperty(value = "文字推荐菜")
    private String wordList;
    @ApiModelProperty(value = "有图推荐菜")
    private String imgList;
    @ApiModelProperty(value = "印象标签")
    private String content;
    @ApiModelProperty(value = "部分评论")
    private String commentList;
    @ApiModelProperty(value = "列表图片(相册)")
    private String photoList;
    @ApiModelProperty(value = "介绍")
    private String introduce;
    @ApiModelProperty(value = "餐馆推荐菜数")
    private Integer count;
    @ApiModelProperty(value = "建议游玩时间（景点）")
    private String sugTime;
    @ApiModelProperty(value = "最佳游玩季节（景点）")
    private String bestTime;
    @ApiModelProperty(value = "天气（景点）")
    private String weather;
    @ApiModelProperty(value = "游玩地点类型（1：景点；2：餐馆）")
    private Integer type;

//    @RequestMapping(value = "/getShortDistance", method = RequestMethod.POST, produces = {"application/json"})
//    @ApiOperation(value = "获取距离，单位是米", httpMethod = "POST", response = BaseMessage.class)
//    public BaseMessage getShortDistance(
//            @ApiParam(value = "经度1（杭州是120左右）", required = true) @RequestParam double longitude1,
//            @ApiParam(value = "纬度1（杭州是30左右）", required = true) @RequestParam double latitude1,
//            @ApiParam(value = "经度2", required = true) @RequestParam double longitude2,
//            @ApiParam(value = "纬度2", required = true) @RequestParam double latitude2) {
//        return BaseMessage.success(GaodeMapUtil.GetShortDistance(longitude1, latitude1, longitude2, latitude2));
//    }
//
//    public class GaodeMapUtil {
//        static double DEF_PI = 3.14159265359; // PI
//        static double DEF_2PI = 6.28318530712; // 2*PI
//        static double DEF_PI180 = 0.01745329252; // PI/180.0
//        static double DEF_R = 6370693.5; // radius of earth
//        //适用于近距离
//
//        /**
//         * @param @param  lon1 //纬度
//         * @param @param  lat1 //经度
//         * @param @param  lon2
//         * @param @param  lat2
//         * @param @return 设定文件
//         * @return double    返回类型
//         * @throws
//         * @Title: GetShortDistance
//         * @Description: TODO(这里用一句话描述这个方法的作用)
//         */
//        public static double GetShortDistance(double lon1, double lat1, double lon2, double lat2) {
//            if (lon1 < 0.1 || lat1 < 0.1 || lon2 < 0.1 || lat2 < 0.1) {
//                return 0;
//            }
//            lon1 = (Math.PI / 180) * lon1;
//            lon2 = (Math.PI / 180) * lon2;
//            lat1 = (Math.PI / 180) * lat1;
//            lat2 = (Math.PI / 180) * lat2;
//
//            // 地球半径
//            double R = 6371;
//
//            // 两点间距离 km，如果想要米的话，结果*1000就可以了
//            double d = Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1)) * R;
//
//            return d * 1000;
//        }
//
//        public static void main(String[] args) {
//            //120.209622
//            //30.293679
//
//            //卓健科技经纬度
//            double mLon1 = 120.20296; // point1经度
//            double mLat1 = 30.288248; // point1纬度
//
//            //杭州城站
//            double mLon2 = 120.181851;// point2经度
//            double mLat2 = 30.243535;// point2纬度
//
//            long startTime = System.currentTimeMillis();   //获取开始时间
//            double distance = GaodeMapUtil.GetShortDistance(mLon1, mLat1, mLon2, mLat2);
//            long endTime = System.currentTimeMillis(); //获取结束时间
//            System.out.println("程序运行时间： " + (endTime - startTime) + "ms");
//            System.out.println(distance);
//
//            DecimalFormat df = new DecimalFormat("0.00");
//
//            String dis = df.format(distance);
//            System.out.println(dis);
//        }
//
//    }
}