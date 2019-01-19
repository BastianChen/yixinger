package com.cb.yixinger.dao;

import com.cb.yixinger.entity.Translator;
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

    public List<Translator> getTranslatorListByType(String type) {
        Example example = new Example(Translator.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("type", type);
        List<Translator> translatorList = translatorMapper.selectByExample(example);
        if (translatorList != null && translatorList.size() > 0) {
            return translatorList;
        } else {
            return null;
        }
    }
}
