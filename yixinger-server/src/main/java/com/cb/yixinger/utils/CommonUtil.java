package com.cb.yixinger.utils;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-30 13:25
 **/
public class CommonUtil {
    /**
     * 判断字符串为非空
     */
    public static boolean isNotEmpty(String s) {
        return !isEmpty(s);
    }

    /**
     * 判断字符串为空
     *
     * @param s
     * @return
     */
    public static boolean isEmpty(String s) {
        return s == null || "".equals(s);
    }
}
