package com.cb.yixinger.dao;

import com.cb.yixinger.entity.TranslatorWithBLOBs;

public interface TranslatorMapper {
    int insert(TranslatorWithBLOBs record);

    int insertSelective(TranslatorWithBLOBs record);
}