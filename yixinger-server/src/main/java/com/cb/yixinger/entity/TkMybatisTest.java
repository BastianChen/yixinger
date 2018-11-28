package com.cb.yixinger.entity;

import lombok.Data;

import javax.persistence.Id;
import javax.persistence.OrderBy;
import java.io.Serializable;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-21 14:59
 **/
@Data
public class TkMybatisTest implements Serializable {
    @Id
    @OrderBy("desc")
    private Integer id;
    private String name;
    private String realName;
    private Integer age;
    private static final long serialVersionUID = -3946734305303957850L;
}
