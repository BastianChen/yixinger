package com.baidu.aip;

import com.baidu.aip.http.AipRequest;
import com.baidu.aip.imageclassify.AipImageClassify;
import com.baidu.aip.util.Base64Util;
import com.baidu.aip.util.Util;
import org.json.JSONObject;

import java.net.URLEncoder;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-20 10:52
 **/
public class Landmark {

    /**
     * 重要提示代码中所需工具类
     * FileUtil,Base64Util,HttpUtil,GsonUtils请从
     * https://ai.baidu.com/file/658A35ABAB2D404FBF903F64D47C1F72
     * https://ai.baidu.com/file/C8D81F3301E24D2892968F09AE1AD6E2
     * https://ai.baidu.com/file/544D677F5D4E4F17B4122FBD60DB82B3
     * https://ai.baidu.com/file/470B3ACCA3FE43788B5A963BF0B625F3
     * 下载
     */
//    public static String landmark() {
//        // 请求url
//        String url = "https://aip.baidubce.com/rest/2.0/image-classify/v1/landmark";
//        AipRequest request = new AipRequest();
//        preOperation(request);
//        try {
//            // 本地文件路径
//            String filePath = "[本地文件路径]";
//            byte[] imgData = Util.readFileByBytes(filePath);
//            String imgStr = Base64Util.encode(imgData);
//            String imgParam = URLEncoder.encode(imgStr, "UTF-8");
//
//            String param = "image=" + imgParam;
//
//            // 注意这里仅为了简化编码每一次请求都去获取access_token，线上环境access_token有过期时间， 客户端可自行缓存，过期后重新获取。
//            String accessToken = "[调用鉴权接口获取的token]";
//
//            String result = HttpUtil.post(url, accessToken, param);
//            System.out.println(result);
//            return result;
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//        return null;
//    }

    public static void main(String[] args) {
        AipImageClassify aipImageClassify = new AipImageClassify("14831168","dCg3446RCU5F9IZkpGZGkVho","famETHsyYSS4infgd1ykBj4GvfMVQ3yv");
        JSONObject res = aipImageClassify.landmark("C:/Users/YFZX-CB-1784/Desktop/u=1173372126,88602272&fm=200&gp=0.jpg");
        System.out.println(res.toString(2));
    }
}
