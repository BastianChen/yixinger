package com.cb.yixinger.service.impl;

import com.cb.yixinger.entity.User;
import com.cb.yixinger.service.TranslatorService;
import com.cb.yixinger.utils.Constants;
import com.cb.yixinger.utils.TransApi;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.stereotype.Service;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-30 16:54
 **/
@Service("TranslatorService")
public class TranslatorServiceImpl implements TranslatorService {
    @Override
    public User translateUserInfo(User user,String language) {
        TransApi api = new TransApi(Constants.APP_ID, Constants.SECURITY_KEY);
        JSONObject jsonObject = JSONObject.fromObject(api.getTransResult(user.getCity(), "auto", language));
        JSONArray jsonArray = JSONArray.fromObject(jsonObject.getString("trans_result"));
        user.setCity(jsonArray.getJSONObject(0).getString("dst"));
        jsonObject = JSONObject.fromObject(api.getTransResult(user.getProvince(), "auto", language));
        jsonArray = JSONArray.fromObject(jsonObject.getString("trans_result"));
        user.setProvince(jsonArray.getJSONObject(0).getString("dst"));
        jsonObject = JSONObject.fromObject(api.getTransResult(user.getCountry(), "auto", language));
        jsonArray = JSONArray.fromObject(jsonObject.getString("trans_result"));
        user.setCountry(jsonArray.getJSONObject(0).getString("dst"));
        return user;
    }
}
