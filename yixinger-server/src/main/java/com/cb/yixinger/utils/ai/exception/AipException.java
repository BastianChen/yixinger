package com.cb.yixinger.utils.ai.exception;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-01-17 15:47
 **/
public class AipException extends Exception {

    private String errorMsg;
    private int errorCode;

    public AipException(int code, String msg) {
        errorCode = code;
        errorMsg = msg;
    }

    public AipException(int code, Throwable e) {
        errorCode = code;
        errorMsg = e.getMessage();
    }

    public String getErrorMsg() {
        return errorMsg;
    }

    public void setErrorMsg(String errorMsg) {
        this.errorMsg = errorMsg;
    }

    public int getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(int errorCode) {
        this.errorCode = errorCode;
    }
}

