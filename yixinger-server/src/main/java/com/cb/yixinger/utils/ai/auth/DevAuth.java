package com.cb.yixinger.utils.ai.auth;

import com.cb.yixinger.utils.ai.http.*;
import com.cb.yixinger.utils.ai.util.Util;
import org.json.JSONException;
import org.json.JSONObject;

import java.net.URI;
import java.net.URISyntaxException;
/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-01-17 15:42
 **/
public class DevAuth {

    /**
     * get access_token from openapi
     * @param apiKey API key from console
     * @param secretKey Secret Key from console
     * @param config network config settings
     * @return JsonObject of response from OAuth server
     */
    public static JSONObject oauth(String apiKey, String secretKey, AipClientConfiguration config) throws JSONException {
        try {
            AipRequest request = new AipRequest();
            request.setUri(new URI(AipClientConst.OAUTH_URL));
            request.addBody("grant_type", "client_credentials");
            request.addBody("client_id", apiKey);
            request.addBody("client_secret", secretKey);
            request.setConfig(config);
            int statusCode = 500;
            AipResponse response = null;
            // add retry
            int cnt = 0;
            while (statusCode == 500 && cnt < 3) {
                response = AipHttpClient.post(request);
                statusCode = response.getStatus();
                cnt++;
            }
            String res = response.getBodyStr();
            if (res != null && !res.equals("")) {
                return new JSONObject(res);
            } else {
                return Util.getGeneralError(statusCode, "Server response code: " + statusCode);
            }
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }
        return Util.getGeneralError(-1, "unknown error");
    }
}
