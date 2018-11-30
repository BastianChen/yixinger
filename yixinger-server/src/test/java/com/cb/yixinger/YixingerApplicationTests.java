package com.cb.yixinger;

import com.cb.yixinger.utils.HttpRequestor;
import com.cb.yixinger.entity.TkMybatisTest;
import com.cb.yixinger.service.TestService;
import net.sf.json.JSONObject;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import javax.servlet.ServletException;
import java.io.IOException;
import java.io.UnsupportedEncodingException;

@RunWith(SpringRunner.class)
@SpringBootTest
public class YixingerApplicationTests {
    @Autowired
    private TestService testService;
    @Autowired
    RedisTemplate<String, String> redisTemplate;

    @Test
    public void contextLoads() {

    }

    @Test
    public void jsoupTest() {
        String url = "https://ugcapi.baidu.com/richindex/2/photo?uid=df95f91c9c62cbb438221c0e&from=map_pc&pageCount=10";// 图片爬取
        //String url = "https://ugcapi.baidu.com/richindex/2/comment?uid=df95f91c9c62cbb438221c0e&pageIndex=1&pageCount=10";// 评论爬取
        //String url = "https://map.baidu.com/?ugc_type=3&ugc_ver=1&qt=detailConInfo&device_ratio=1&compat=1&t=1542763086565&uid=96d38a845c08e6492902e13b&primaryUid=1175400224615406276&auth=XALx853BcA248H7bWFvB%40wZv%3DSaJXBA4uxHEzNLBVRztykiOxAXXwy1uVt1GgvPUDZYOYIZuxtdw8E62qvFu2gz4yYxGccZcuVtPWv3Guzt7xjhN%40ThwzBDGJ4P6VWvcEWe1GD8zv7u%40ZPuxtfvAughxehwzJGBP4B6GBvgjLLwWvrZZWux";// 地点信息爬取
        Connection con = Jsoup.connect(url).ignoreContentType(true);
        con.header("Referer", "https://map.baidu.com/");
        con.header("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36");
        byte[] doc = new byte[0];
        try {
            doc = con.execute().bodyAsBytes();
        } catch (IOException e) {
            e.printStackTrace();
        }
        String js = null;
        try {
            js = new String(doc, "GBK");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        JSONObject jsonObject = JSONObject.fromObject(js);
        System.out.println(jsonObject.toString(2));
    }

    @Test
    public void addTest() {
        TkMybatisTest tkMybatisTest = new TkMybatisTest();
        tkMybatisTest.setName("ben");
        tkMybatisTest.setRealName("陈奔");
        tkMybatisTest.setAge(21);
        testService.insrtTest(tkMybatisTest);
        System.out.println(testService.getTest(3));
    }

    @Test
    public void updateTest() {
        TkMybatisTest tkMybatisTest = new TkMybatisTest();
        tkMybatisTest.setId(1);
        tkMybatisTest.setName("陈奔");
        tkMybatisTest.setRealName("ben");
        tkMybatisTest.setAge(18);
        testService.updateTest(tkMybatisTest);
    }

    @Test
    public void deleteTest() {
        testService.deleteTest(2);
    }

    @Test
    public void getTest(){
        System.out.println(testService.getTest(3));
    }

    @Test
    public void getTestList() {
        System.out.println(testService.getTestList());
    }

    @Test
    public void getTestListByNameAndAgeTest() {
        System.out.println(testService.getTestListByNameAndAge("ben", 21));
    }

    @Test
    public void pageHelperTest() {
        System.out.println(testService.findTkMybatisTestByPage(1, 2));
    }

    @Test
    public void redisTest(){
        testService.addRedisTest("test:","123456");
        //redisTemplate.opsForValue().getOperations().delete("test:");
        System.out.println(testService.getRedisTest("test:"));
    }

    @Test
    public void openIdTest(){
        try {
            System.out.println(doPost());
        } catch (ServletException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    protected String doPost() throws ServletException, IOException {
        String appid = "wx52a9380821d85603";
        String secret = "353ae1409d24e026d2bdcb0b180953e8";
        String requestUrl = "https://api.weixin.qq.com/sns/jscode2session?appid="+appid+"&secret="+secret+"&js_code=0217ZmJI0Adv6g2LDAII0zWaJI07ZmJb&grant_type=authorization_code";
        //获取openid
        String  oppid = null;
        try {
            oppid = new HttpRequestor().doGet(requestUrl);
        } catch (Exception e) {
            e.printStackTrace();
        }
        JSONObject oppidObj =JSONObject.fromObject(oppid);
        String openid = (String) oppidObj.get("openid");
        return openid;
    }
}
