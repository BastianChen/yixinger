package com.cb.yixinger.dao;

import com.cb.yixinger.entity.Translator;
import com.cb.yixinger.utils.CommonUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import tk.mybatis.mapper.entity.Example;

import java.util.List;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-30 9:54
 **/
@Component
public class TranslatorDao {
    @Autowired
    private TranslatorMapper translatorMapper;

    public List<Translator> getTranslatorListByType(String userId, String type) {
        Example example = new Example(Translator.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("userId", userId);
        if (!CommonUtil.isNullOrWhiteSpace(type)) {
            criteria.andEqualTo("type", type);
        }
        List<Translator> translatorList = translatorMapper.selectByExample(example);
        return translatorList;
    }

    public Translator getTranslator(String userId, Integer textId, String from, String to, String type) {
        Example example = new Example(Translator.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("userId", userId);
        criteria.andEqualTo("textId", textId);
        criteria.andEqualTo("from", from);
        criteria.andEqualTo("to", to);
        criteria.andEqualTo("type", type);
        Translator translator = translatorMapper.selectOneByExample(example);
        return translator;
    }
}
