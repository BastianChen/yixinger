package com.cb.yixinger.service.impl;

import com.cb.yixinger.dao.PlaceDao;
import com.cb.yixinger.entity.Place;
import com.cb.yixinger.service.PlaceService;
import net.sf.json.JSONArray;
import net.sf.json.JSONException;
import net.sf.json.JSONObject;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.UnsupportedEncodingException;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-12-11 13:41
 **/
@Service("PlaceService")
public class PlaceServiceImpl implements PlaceService {
    @Autowired
    private PlaceDao placeDao;
    private static final Logger logger = LoggerFactory.getLogger(PlaceServiceImpl.class);

    @Override
    public Place addPlace(Place place, String uid) {
        String url = "https://map.baidu.com/?ugc_type=3&ugc_ver=1&qt=detailConInfo&device_ratio=1&compat=1&t=1542763086565&uid=" + uid + "&primaryUid=1175400224615406276&auth=XALx853BcA248H7bWFvB%40wZv%3DSaJXBA4uxHEzNLBVRztykiOxAXXwy1uVt1GgvPUDZYOYIZuxtdw8E62qvFu2gz4yYxGccZcuVtPWv3Guzt7xjhN%40ThwzBDGJ4P6VWvcEWe1GD8zv7u%40ZPuxtfvAughxehwzJGBP4B6GBvgjLLwWvrZZWux";
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
        JSONObject content = jsonObject.getJSONObject("content");
        place.setName(content.getString("name"));
        place.setAddress(content.getString("addr"));
        place.setPhone(content.getString("phone"));
        place.setUid(content.getString("uid"));
        place.setShowtag(content.getString("showtag"));
        content = content.getJSONObject("ext");
        content = content.getJSONObject("detail_info");
        place.setImage(content.getString("image"));
        place.setShopHours(content.getString("shop_hours"));
        place.setPrice(content.getString("price"));
        place.setOverallRating(content.getString("overall_rating"));
        content = content.getJSONObject("vs_content").getJSONObject("invisible").getJSONObject("bigdata");
        JSONArray jsonArray = content.getJSONArray("tags1");
        JSONArray tags1Array = new JSONArray();
        for (int i = 0; i < jsonArray.size(); i++) {
            tags1Array = (JSONArray) jsonArray.get(i);
            tags1Array = (JSONArray) tags1Array.get(0);
            if (place.getTags1() == null) {
                place.setTags1((String) tags1Array.get(0));
            } else {
                place.setTags1(place.getTags1() + ";" + tags1Array.get(0));
            }
        }

        JSONObject avocado = jsonObject.getJSONObject("avocado");
        JSONArray cards = avocado.getJSONArray("cards");
        avocado = cards.getJSONObject(1);
        try {
            // 餐馆推荐菜数
            JSONObject dataInfo = avocado.getJSONObject("data");
            JSONArray list = dataInfo.getJSONArray("wordList");
            for (int i = 0; i < list.size(); i++) {
                if (place.getWordList() == null) {
                    place.setWordList((String) list.get(i));
                } else {
                    place.setWordList(place.getWordList() + "," + list.get(i));
                }
            }
            list = dataInfo.getJSONArray("imgList");
            place.setImgList(list.toString());
            // 餐馆推荐菜数
            Integer count = dataInfo.getInt("count");
            place.setCount(count);
            // 餐馆印象标签
            avocado = cards.getJSONObject(2);
            dataInfo = avocado.getJSONObject("data");
            list = dataInfo.getJSONArray("content");
            JSONArray placeContent = new JSONArray();
            for (int i=0;i<list.size();i++){
                dataInfo = (JSONObject) list.get(i);
                placeContent.add(dataInfo.getJSONArray("labels"));
            }
            place.setContent(placeContent.toString());
            // 餐馆评论数
            avocado = cards.getJSONObject(3);
            // 餐馆部分评论
            list = avocado.getJSONObject("data").getJSONObject("list").getJSONArray("comment_list");
            place.setCommentList(list.toString());
            if (list.size() == 0) {
                place.setCommentNumber(0);
            } else {
                place.setCommentNumber(list.size());
            }
        } catch (JSONException jsonException) {
            //景点图片列表
            avocado = cards.getJSONObject(2);
            JSONObject dataInfo = avocado.getJSONObject("data").getJSONObject("list");
            JSONArray list = dataInfo.getJSONArray("photo_list");
            JSONObject photoList = new JSONObject();
            for (int i = 0; i < list.size(); i++) {
                photoList = (JSONObject) list.get(i);
                if (place.getPhotoList() == null) {
                    place.setPhotoList(photoList.getString("imgUrl"));
                } else {
                    place.setPhotoList(place.getPhotoList() + ";" + photoList.getString("imgUrl"));
                }
            }
            // 景点介绍
            avocado = cards.getJSONObject(3).getJSONObject("data");
            place.setIntroduce(avocado.getJSONObject("introduce").getString("abstract"));
            // 景点建议游玩时间
            place.setSugTime(avocado.getString("sug_time"));
            // 景点最佳季节
            place.setBestTime(avocado.getString("best_time"));
            // 景点天气
            place.setWeather(avocado.getJSONObject("weather").toString());
            // 景点印象标签
            avocado = cards.getJSONObject(7).getJSONObject("data");
            list = avocado.getJSONArray("content");
            JSONArray placeContent = new JSONArray();
            for (int i=0;i<list.size();i++){
                dataInfo = (JSONObject) list.get(i);
                placeContent.add(dataInfo.getJSONArray("labels"));
            }
            place.setContent(placeContent.toString());
            // 景点部分评论
            avocado = cards.getJSONObject(8).getJSONObject("data").getJSONObject("list");
            place.setCommentList(avocado.getJSONArray("comment_list").toString());
            // 景点评论数  avocado.getInt("totalNum")
            if (avocado.getJSONArray("comment_list").size() == 0) {
                place.setCommentNumber(0);
            } else {
                place.setCommentNumber(avocado.getJSONArray("comment_list").size());
            }
        }
        placeDao.addPlace(place);
        return place;
    }

    @Override
    public Place getPlaceByUid(String uid) {
        return placeDao.getPlaceByUid(uid);
    }
}
