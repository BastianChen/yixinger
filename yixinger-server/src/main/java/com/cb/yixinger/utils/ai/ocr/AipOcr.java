package com.cb.yixinger.utils.ai.ocr;

import com.cb.yixinger.utils.ai.client.BaseClient;
import com.cb.yixinger.utils.ai.error.AipError;
import com.cb.yixinger.utils.ai.http.AipRequest;
import com.cb.yixinger.utils.ai.util.Base64Util;
import com.cb.yixinger.utils.ai.util.Util;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.HashMap;

/**
 * @Description: 文字识别方法
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-01-19 9:34
 **/
public class AipOcr  extends BaseClient {
    public AipOcr(String appId, String apiKey, String secretKey) {
        super(appId, apiKey, secretKey);
    }

    /**
     * 通用文字识别（高精度版）接口
     * 用户向服务请求识别某张图中的所有文字，相对于通用文字识别该产品精度更高，但是识别耗时会稍长。
     *
     * @param image - 二进制图像数据
     * @param options - 可选参数对象，key: value都为string类型
     * options - options列表:
     *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
     *   probability 是否返回识别结果中每一行的置信度
     * @return JSONObject
     */
    public JSONObject basicAccurateGeneral(byte[] image, HashMap<String, String> options) throws JSONException {
        AipRequest request = new AipRequest();
        preOperation(request);

        String base64Content = Base64Util.encode(image);
        request.addBody("image", base64Content);
        if (options != null) {
            request.addBody(options);
        }
        request.setUri(OcrConsts.ACCURATE_BASIC);
        postOperation(request);
        return requestServer(request);
    }

    /**
     * 通用文字识别（高精度版）接口
     * 用户向服务请求识别某张图中的所有文字，相对于通用文字识别该产品精度更高，但是识别耗时会稍长。
     *
     * @param image - 本地图片路径
     * @param options - 可选参数对象，key: value都为string类型
     * options - options列表:
     *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
     *   probability 是否返回识别结果中每一行的置信度
     * @return JSONObject
     */
    public JSONObject basicAccurateGeneral(String image, HashMap<String, String> options) throws JSONException {
        try {
            byte[] data = Util.readFileByBytes(image);
            return basicAccurateGeneral(data, options);
        } catch (IOException e) {
            e.printStackTrace();
            return AipError.IMAGE_READ_ERROR.toJsonResult();
        }
    }
}
