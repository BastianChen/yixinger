package com.cb.yixinger.utils;

import java.text.SimpleDateFormat;
import java.util.Date;

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

    /**
     * isNullOrWhiteSpace
     *
     * @param
     * @return
     */
    public static boolean isNullOrWhiteSpace(String value) {
        return value == null || value.equals("null") || (value.length() >= 0 && value.trim().length() <= 0);
    }

    /**
     * 格式化字符串 支持常用的格式
     *
     * @param pattern 需要格式化的字符串
     * @param params  格式化参数
     * @return 返回字符串   如 format("hell {0}。", "张三") => "hello 张三。"
     */
    public static String format(String pattern, Object... params) {
        pattern = pattern == null ? "" : pattern;
        if (null == params || params.length == 0) {
            return pattern;
        }
        for (int i = 0; i < params.length; ++i) {
            Object object = params[i];
            String parm = "";
            if (object == null) {
                parm = "";
            } else if (object instanceof Date) {
                parm = formatLongDate(object);
            } else {
                try {
                    parm = String.valueOf(object);
                } catch (Exception ex) {
                }
            }
            if (parm == null || "null".equals(parm)) {
                parm = "";
            }
            pattern = pattern.replace(String.format("{%d}", i), parm);
        }
        return pattern;
    }

    /**
     * 格式化 日期 长日期
     *
     * @param date
     * @return
     */
    public static String formatLongDate(Object date) {
        if (date == null) return "";
        return formatDate(date, "yyyy-MM-dd HH:mm:ss");
    }

    //自定义格式
    public static String formatDate(Object date, String pattern) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        if (isNotEmpty(pattern)) {
            dateFormat = new SimpleDateFormat(pattern);
        }

        if (date instanceof Long) {
            Long ldate = (Long) date;
            return dateFormat.format(new Date(ldate));
        } else if (date instanceof Date) {
            return dateFormat.format((Date) date);
        }
        return "";
    }
}
