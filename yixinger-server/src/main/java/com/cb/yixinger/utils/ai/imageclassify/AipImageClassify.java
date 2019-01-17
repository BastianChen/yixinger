package com.cb.yixinger.utils.ai.imageclassify;

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
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-01-17 16:04
 **/
public class AipImageClassify extends BaseClient {
    public AipImageClassify(String appId, String apiKey, String secretKey) {
        super(appId, apiKey, secretKey);
    }

    /**
     * 通用物体识别接口
     * 该请求用于通用物体及场景识别，即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片中的多个物体及场景标签。
     *
     * @param image - 二进制图像数据
     * @param options - 可选参数对象，key: value都为string类型
     * options - options列表:
     *   baike_num 返回百科信息的结果数，默认不返回
     * @return JSONObject
     */
    public JSONObject advancedGeneral(byte[] image, HashMap<String, String> options) throws JSONException {
        AipRequest request = new AipRequest();
        preOperation(request);

        String base64Content = Base64Util.encode(image);
        request.addBody("image", base64Content);
        if (options != null) {
            request.addBody(options);
        }
        request.setUri(ImageClassifyConsts.ADVANCED_GENERAL);
        postOperation(request);
        return requestServer(request);
    }

    public JSONObject landmark(String image) throws JSONException {
        AipRequest request = new AipRequest();
        preOperation(request);
        try {
            byte[] data = Util.readFileByBytes(image);
            String base64Content = Base64Util.encode(data);
            request.addBody("image", base64Content);
        } catch (IOException e) {
            e.printStackTrace();
        }

        request.setUri("https://aip.baidubce.com/rest/2.0/image-classify/v1/landmark");
        postOperation(request);
        return requestServer(request);
    }

    /**
     * 通用物体识别接口
     * 该请求用于通用物体及场景识别，即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片中的多个物体及场景标签。
     *
     * @param image - 本地图片路径
     * @param options - 可选参数对象，key: value都为string类型
     * options - options列表:
     *   baike_num 返回百科信息的结果数，默认不返回
     * @return JSONObject
     */
    public JSONObject advancedGeneral(String image, HashMap<String, String> options) throws JSONException {
        try {
            byte[] data = Util.readFileByBytes(image);
            return advancedGeneral(data, options);
        } catch (IOException e) {
            e.printStackTrace();
            return AipError.IMAGE_READ_ERROR.toJsonResult();
        }
    }

    /**
     * 菜品识别接口
     * 该请求用于菜品识别。即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片的菜品名称、卡路里信息、置信度。
     *
     * @param image - 二进制图像数据
     * @param options - 可选参数对象，key: value都为string类型
     * options - options列表:
     *   top_num 返回预测得分top结果数，默认为5
     *   filter_threshold 默认0.95，可以通过该参数调节识别效果，降低非菜识别率.
     *   baike_num 返回百科信息的结果数，默认不返回
     * @return JSONObject
     */
    public JSONObject dishDetect(byte[] image, HashMap<String, String> options) throws JSONException {
        AipRequest request = new AipRequest();
        preOperation(request);

        String base64Content = Base64Util.encode(image);
        request.addBody("image", base64Content);
        if (options != null) {
            request.addBody(options);
        }
        request.setUri(ImageClassifyConsts.DISH_DETECT);
        postOperation(request);
        return requestServer(request);
    }

    /**
     * 菜品识别接口
     * 该请求用于菜品识别。即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片的菜品名称、卡路里信息、置信度。
     *
     * @param image - 本地图片路径
     * @param options - 可选参数对象，key: value都为string类型
     * options - options列表:
     *   top_num 返回预测得分top结果数，默认为5
     *   filter_threshold 默认0.95，可以通过该参数调节识别效果，降低非菜识别率.
     *   baike_num 返回百科信息的结果数，默认不返回
     * @return JSONObject
     */
    public JSONObject dishDetect(String image, HashMap<String, String> options) throws JSONException {
        try {
            byte[] data = Util.readFileByBytes(image);
            return dishDetect(data, options);
        } catch (IOException e) {
            e.printStackTrace();
            return AipError.IMAGE_READ_ERROR.toJsonResult();
        }
    }

    /**
     * 动物识别接口
     * 该请求用于识别一张图片。即对于输入的一张图片（可正常解码，且长宽比适宜），输出动物识别结果
     *
     * @param image - 二进制图像数据
     * @param options - 可选参数对象，key: value都为string类型
     * options - options列表:
     *   top_num 返回预测得分top结果数，默认为6
     *   baike_num 返回百科信息的结果数，默认不返回
     * @return JSONObject
     */
    public JSONObject animalDetect(byte[] image, HashMap<String, String> options) throws JSONException {
        AipRequest request = new AipRequest();
        preOperation(request);

        String base64Content = Base64Util.encode(image);
        request.addBody("image", base64Content);
        if (options != null) {
            request.addBody(options);
        }
        request.setUri(ImageClassifyConsts.ANIMAL_DETECT);
        postOperation(request);
        return requestServer(request);
    }

    /**
     * 动物识别接口
     * 该请求用于识别一张图片。即对于输入的一张图片（可正常解码，且长宽比适宜），输出动物识别结果
     *
     * @param image - 本地图片路径
     * @param options - 可选参数对象，key: value都为string类型
     * options - options列表:
     *   top_num 返回预测得分top结果数，默认为6
     *   baike_num 返回百科信息的结果数，默认不返回
     * @return JSONObject
     */
    public JSONObject animalDetect(String image, HashMap<String, String> options) throws JSONException {
        try {
            byte[] data = Util.readFileByBytes(image);
            return animalDetect(data, options);
        } catch (IOException e) {
            e.printStackTrace();
            return AipError.IMAGE_READ_ERROR.toJsonResult();
        }
    }

    /**
     * 植物识别接口
     * 该请求用于识别一张图片。即对于输入的一张图片（可正常解码，且长宽比适宜），输出植物识别结果。
     *
     * @param image - 二进制图像数据
     * @param options - 可选参数对象，key: value都为string类型
     * options - options列表:
     *   baike_num 返回百科信息的结果数，默认不返回
     * @return JSONObject
     */
    public JSONObject plantDetect(byte[] image, HashMap<String, String> options) throws JSONException {
        AipRequest request = new AipRequest();
        preOperation(request);

        String base64Content = Base64Util.encode(image);
        request.addBody("image", base64Content);
        if (options != null) {
            request.addBody(options);
        }
        request.setUri(ImageClassifyConsts.PLANT_DETECT);
        postOperation(request);
        return requestServer(request);
    }

    /**
     * 植物识别接口
     * 该请求用于识别一张图片。即对于输入的一张图片（可正常解码，且长宽比适宜），输出植物识别结果。
     *
     * @param image - 本地图片路径
     * @param options - 可选参数对象，key: value都为string类型
     * options - options列表:
     *   baike_num 返回百科信息的结果数，默认不返回
     * @return JSONObject
     */
    public JSONObject plantDetect(String image, HashMap<String, String> options) throws JSONException {
        try {
            byte[] data = Util.readFileByBytes(image);
            return plantDetect(data, options);
        } catch (IOException e) {
            e.printStackTrace();
            return AipError.IMAGE_READ_ERROR.toJsonResult();
        }
    }
}
