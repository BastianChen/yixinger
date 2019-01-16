package com.cb.yixinger.entity;

import com.cb.yixinger.utils.CommonUtil;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.io.PrintWriter;
import java.io.Serializable;
import java.io.StringWriter;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-30 13:18
 **/
@Data
@ApiModel("返回message")
public class BaseMessage implements Serializable {
    private static final long serialVersionUID = -8347793328187379207L;
    @ApiModelProperty("0:正常 其他值 都是异常情况")
    private Integer state;

    @ApiModelProperty("返回消息")
    private String message;

    @ApiModelProperty("返回的数据")
    private Object data;

    @ApiModelProperty("返回的其他数据一般不用")
    private Object extra;

    @ApiModelProperty("详细错误消息")
    private Object messageDetail;

    public BaseMessage() {
        this.state = 0;
        this.message = "成功";
    }

    public BaseMessage(Integer state, String message) {
        this.state = state;
        this.message = message;
    }


    //controller层使用
    public ResponseEntity<BaseMessage> response() {
        return new ResponseEntity<>(this, HttpStatus.OK);
    }

    public ResponseEntity<BaseMessage> response(HttpStatus status) {
        return new ResponseEntity<>(this, status);
    }

    public BaseMessage initStateAndMessage(Integer state, String message) {
        this.setState(state);
        this.setMessage(message);
        return this;
    }

    //初始化错误消息
    public BaseMessage initErrorMessage(Exception ex) {
        this.setState(9999);
        String message = ex.getMessage() == null ? "" : ex.getMessage();
        String errMsg = "未知异常：" + message;
        if (errMsg != null && errMsg.length() > 100) {
            errMsg = errMsg.substring(0, 100);
        }
        this.setMessage(errMsg);
        try {
            StringWriter sw = new StringWriter();
            PrintWriter pw = new PrintWriter(sw);
            ex.printStackTrace(pw);
            String msg = sw.toString();

            JSONObject jsonObject = new JSONObject();
            if (CommonUtil.isNotEmpty(msg)) {
                String[] list;
                if (msg.contains("\\r\\n")) {
                    list = msg.split("\\r\\n");
                } else {
                    list = msg.split("\\n");
                }
                for (int i = 0; i < list.length; i++) {
                    if (i > 35) {
                        jsonObject.put(i + "", " ... 35 more");
                        break;
                    }

                    String str = list[i];
                    if (CommonUtil.isNotEmpty(str)) {
                        jsonObject.put(i + "", str.replace("\t", " "));
                    }
                }
            }
            this.setMessageDetail(jsonObject);
        } catch (Exception e) {
            this.setMessageDetail("设置详细信息异常");
        }
        return this;
    }

    // 不需要new 直接生成可返回的值 response
    public static ResponseEntity<BaseMessage> initDataAndRetResponse(Object data) {
        BaseMessage baseMessage = new BaseMessage();
        baseMessage.setData(data);
        return new ResponseEntity<>(baseMessage, HttpStatus.OK);
    }
}
