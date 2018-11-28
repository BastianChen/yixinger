package com.cb.yixinger.config;

import java.lang.annotation.*;

/**
 * @Description: 自定义日志切面注解
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-10-17 14:14
 **/
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface LoggerManage {
    public String logDescription();
}
