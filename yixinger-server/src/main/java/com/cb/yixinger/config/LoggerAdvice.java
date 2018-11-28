package com.cb.yixinger.config;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-28 13:15
 **/
@Aspect
@Component
public class LoggerAdvice {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    //@Before("within(com.cb.web.zuitoutiao..*) && @annotation(loggerManage)")
    @Before(value = "execution(* com.cb.yixinger.controller.*.*(..)) && @annotation(loggerManage)")
    public void addBeforeLogger(JoinPoint joinPoint, LoggerManage loggerManage) {
        LocalDateTime now = LocalDateTime.now();
        logger.info(now.toString() + "执行[" + loggerManage.logDescription() + "]开始");
        logger.info(joinPoint.getSignature().toString());
        logger.info(parseParames(joinPoint.getArgs()));
    }

    @AfterReturning("within(com.cb.yixinger..*) && @annotation(loggerManage)")
    public void addAfterReturningLogger(JoinPoint joinPoint, LoggerManage loggerManage) {
        LocalDateTime now = LocalDateTime.now();
        logger.info(now.toString() + "执行 [" + loggerManage.logDescription() + "] 结束");
    }

    @AfterThrowing(pointcut = "within(com.cb.yixinger..*) && @annotation(loggerManage)", throwing = "ex")
    public void addAfterThrowingLogger(JoinPoint joinPoint, LoggerManage loggerManage, Exception ex) {
        LocalDateTime now = LocalDateTime.now();
        logger.error(now.toString() + "执行 [" + loggerManage.logDescription() + "] 异常", ex);
    }

    private String parseParames(Object[] parames) {
        if (null == parames || parames.length <= 0) {
            return "";
        }
        StringBuffer param = new StringBuffer("传入参数 # 个:[ ");
        int i = 0, j = 0;
        for (Object obj : parames) {
            j++;
            if (obj != null) {
                i++;
                if (j != parames.length) {
                    param.append(obj.toString()).append(" ,");
                } else {
                    param.append(obj.toString());
                }
            }
        }
        return param.append(" ]").toString().replace("#", String.valueOf(i));
    }
}

