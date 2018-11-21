package com.cb.yixinger.entity;

import lombok.Data;

import javax.persistence.Id;
import javax.persistence.OrderBy;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-21 14:59
 **/
@Data
public class TkMybatisTest {
    @Id
    @OrderBy("desc")
    private Integer id;
    private String name;
    private String realName;
    private Integer age;
}
