package com.baidu.aip;

import com.baidu.aip.imageclassify.AipImageClassify;
import com.baidu.aip.ocr.AipOcr;
import org.json.JSONObject;

import java.util.HashMap;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-20 9:44
 **/
public class main {
    public static void main(String[] args) {
        //文字识别
        HashMap<String, String> options = new HashMap<String, String>();
        options.put("language_type", "CHN_ENG");
        options.put("detect_direction", "true");
        options.put("detect_language", "true");
        options.put("probability", "true");
        AipOcr aipOcr = new AipOcr("14831168","dCg3446RCU5F9IZkpGZGkVho","famETHsyYSS4infgd1ykBj4GvfMVQ3yv");
        //JSONObject res = aipOcr.basicAccurateGeneral("C:/Users/YFZX-CB-1784/Desktop/微信图片_20181113135257.jpg",options);
        //JSONObject res = aipOcr.idcard("C:/Users/YFZX-CB-1784/Desktop/微信图片_20181113135257.jpg","front",options);
        //JSONObject res = aipOcr.qrcode("C:/Users/YFZX-CB-1784/Desktop/微信图片_20181120100623.jpg",options);
        JSONObject res = aipOcr.basicAccurateGeneral("C:/Users/YFZX-CB-1784/Desktop/下载.jfif",options);
        System.out.println(res.toString(2));

        //图像识别
        AipImageClassify aipImageClassify = new AipImageClassify("14831168","dCg3446RCU5F9IZkpGZGkVho","famETHsyYSS4infgd1ykBj4GvfMVQ3yv");
        HashMap<String, String> options1 = new HashMap<String, String>();
        options1.put("baike_num", "5");
        JSONObject res1 = aipImageClassify.advancedGeneral("C:/Users/YFZX-CB-1784/Desktop/下载.jfif",options1);
        System.out.println(res1.toString(2));


    }
}
