package com.cb.yixinger.utils;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-03-31 14:26
 **/
public class DistanceUtil {
    /**
     * @param @param  lon1 //纬度
     * @param @param  lat1 //经度
     * @param @param  lon2
     * @param @param  lat2
     * @param @return 设定文件
     * @return double    返回类型
     * @throws
     * @Title: GetShortDistance
     * @Description: 计算所在地与目标地点的距离
     */
    public static double GetShortDistance(double lon1, double lat1, double lon2, double lat2) {
        if (lon1 < 0.1 || lat1 < 0.1 || lon2 < 0.1 || lat2 < 0.1) {
            return 0;
        }
        lon1 = (Math.PI / 180) * lon1;
        lon2 = (Math.PI / 180) * lon2;
        lat1 = (Math.PI / 180) * lat1;
        lat2 = (Math.PI / 180) * lat2;

        // 地球半径
        double R = 6371;

        // 两点间距离 km，如果想要米的话，结果*1000就可以了
        double d = Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1)) * R;

        return d * 1000;
    }
}
