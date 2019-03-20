package com.cb.yixinger.service.impl;

import com.cb.yixinger.config.Constants;
import com.cb.yixinger.service.SpeechService;
import com.cb.yixinger.utils.CommonUtil;
import com.cb.yixinger.utils.FileUploadUtil;
import com.cb.yixinger.utils.MD5;
import com.cb.yixinger.utils.ai.speech.ConnUtil;
import com.cb.yixinger.utils.ai.speech.DemoException;
import com.cb.yixinger.utils.ai.speech.TokenHolder;
import org.json.JSONException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;

/**
 * @Description: 语音合成ServiceImpl
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-01-21 9:13
 **/
@Service("SpeechService")
public class SpeechServiceImpl implements SpeechService {
    @Autowired
    RedisTemplate<String, String> redisTemplate;
    private static final Logger logger = LoggerFactory.getLogger(SpeechServiceImpl.class);

    /**
     * 发音人选择, 0为普通女声，1为普通男生，3为情感合成-度逍遥，4为情感合成-度丫丫，默认为普通女声
     */
    private final int per = 0;
    /**
     * 语速，取值0-15，默认为5中语速
     */
    private final int spd = 5;
    /**
     * 音调，取值0-15，默认为5中语调
     */
    private final int pit = 5;
    /**
     * 音量，取值0-9，默认为5中音量
     */
    private final int vol = 5;

    /**
     * 下载的文件格式, 3：mp3(default) 4： pcm-16k 5： pcm-8k 6. wav
     */
    private final int aue = 3;

    private String cuid = "1234567JAVA";

    @Override
    public String speechSynthesis(String text, String userId) throws IOException, DemoException, JSONException {
        TokenHolder holder = new TokenHolder(Constants.APP_KEY, Constants.SECRET_KEY, TokenHolder.ASR_SCOPE);
        holder.refresh();
        String resourcePath = System.getProperty("user.dir") + "/src/main/resources/static/audio/";
        String speechText = "";
        String token;
        List<String> textList = Arrays.asList(text.split(";"));
        for (String texts : textList) {
            speechText = speechText + texts;
        }
        String tokenValue = redisTemplate.opsForValue().get("speechToken");
        if (!CommonUtil.isNullOrWhiteSpace(tokenValue)) {
            logger.info("读取speechToken缓存数据");
            token = tokenValue;
        } else {
            logger.info("未读取到speechToken缓存数据");
            token = holder.getToken();
            redisTemplate.opsForValue().set("speechToken", token, 29, TimeUnit.DAYS);
            logger.info("将token添加到redis缓存中，缓存名为speechToken，缓存时间为29天");
        }
        // 此处2次urlEncode，确保特殊字符被正确编码
        String params = "tex=" + ConnUtil.urlEncode(ConnUtil.urlEncode(speechText));
        params += "&per=" + per;
        params += "&spd=" + spd;
        params += "&pit=" + pit;
        params += "&vol=" + vol;
        params += "&cuid=" + cuid;
        params += "&tok=" + token;
        params += "&aue=" + aue;
        params += "&lan=zh&ctp=1";
        // 反馈请带上此url，浏览器上可以测试
        System.out.println(Constants.SPEECH_URL + "?" + params);
        HttpURLConnection conn = (HttpURLConnection) new URL(Constants.SPEECH_URL).openConnection();
        conn.setDoInput(true);
        conn.setDoOutput(true);
        conn.setConnectTimeout(5000);
        PrintWriter printWriter = new PrintWriter(conn.getOutputStream());
        printWriter.write(params);
        printWriter.close();
        String contentType = conn.getContentType();
        if (contentType.contains("audio/")) {
            byte[] bytes = ConnUtil.getResponseBytes(conn);
            String format = getFormat(aue);
            File dir = new File(resourcePath);
            if (!dir.exists()) {
                dir.mkdirs();
            }
            // 打开mp3文件即可播放
            String fileName = MD5.md5(userId + System.currentTimeMillis() + "" + new Random().nextInt(99999999));
            File file = new File(dir, fileName + "-result." + format);
            FileOutputStream os = new FileOutputStream(file);
            os.write(bytes);
            os.close();
            String speechPath = "/audio/" + file.getName();
            logger.info("---文件保存目录--" + file.getAbsolutePath());
            return speechPath;
        } else {
            logger.error("ERROR: content-type= " + contentType);
            String res = ConnUtil.getResponseString(conn);
            logger.error(res);
            return null;
        }
    }

    /**
     * 下载的文件格式, 3：mp3(default) 4： pcm-16k 5： pcm-8k 6. wav
     */
    private String getFormat(int aue) {
        String[] formats = {"mp3", "pcm", "pcm", "wav"};
        return formats[aue - 3];
    }
}
