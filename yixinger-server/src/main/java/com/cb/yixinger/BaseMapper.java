package com.cb.yixinger;

import tk.mybatis.mapper.common.Mapper;
import tk.mybatis.mapper.common.MySqlMapper;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-21 14:49
 **/
public interface BaseMapper<T> extends Mapper<T>,MySqlMapper<T> {

}
