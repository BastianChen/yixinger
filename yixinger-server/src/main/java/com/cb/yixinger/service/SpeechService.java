package com.cb.yixinger.service;

import com.cb.yixinger.utils.ai.speech.DemoException;
import org.json.JSONException;

import java.io.IOException;

/**
 * @Description: 语音合成Service
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-01-21 9:12
 **/
public interface SpeechService {
    String speechSynthesis(String text, String userId) throws IOException, DemoException, JSONException;
}
