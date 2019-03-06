package com.cb.yixinger.service.impl;

import com.cb.yixinger.dao.PlaceDao;
import com.cb.yixinger.dao.PlaceMapper;
import com.cb.yixinger.entity.PageBean;
import com.cb.yixinger.entity.Place;
import com.cb.yixinger.service.PlaceService;
import com.cb.yixinger.utils.CommonUtil;
import com.github.pagehelper.PageHelper;
import net.sf.json.JSONArray;
import net.sf.json.JSONException;
import net.sf.json.JSONObject;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tk.mybatis.mapper.entity.Example;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-12-11 13:41
 **/
@Service("PlaceService")
public class PlaceServiceImpl implements PlaceService {
    @Autowired
    private PlaceDao placeDao;
    @Autowired
    private PlaceMapper placeMapper;
    private static final Logger logger = LoggerFactory.getLogger(PlaceServiceImpl.class);

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Place addPlace(Place place, String uid, String type) {
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
        System.out.println(jsonObject.toString());
        JSONObject content = jsonObject.optJSONObject("content");
        place.setName(content.optString("name", "暂无"));
        place.setAddress(content.optString("addr", "暂无"));
        place.setPhone(content.optString("phone", "暂无"));
        place.setUid(content.optString("uid", "暂无"));
        place.setShowtag(content.optString("showtag", "暂无"));
        content = content.optJSONObject("ext");
        content = content.optJSONObject("detail_info");
        place.setImage(content.optString("image", "暂无"));
        place.setShopHours(content.optString("shop_hours", "暂无"));
        place.setPrice(content.optString("price", "暂无"));
        if (CommonUtil.isNotEmpty(content.optString("overall_rating"))) {
            place.setOverallRating(Double.valueOf(content.optString("overall_rating")));
        } else {
            place.setOverallRating(0.0);
        }
        if (content.optJSONObject("vs_content") != null) {
            content = content.optJSONObject("vs_content");
            if (content.optJSONObject("invisible") != null) {
                content = content.optJSONObject("bigdata");
                if (content != null) {
                    JSONArray jsonArray = content.optJSONArray("tags1");
                    JSONArray tags1Array;
                    if (jsonArray != null && jsonArray.size() > 0) {
                        for (int i = 0; i < jsonArray.size(); i++) {
                            tags1Array = (JSONArray) jsonArray.get(i);
                            tags1Array = (JSONArray) tags1Array.get(0);
                            if (place.getTags1() == null) {
                                place.setTags1((String) tags1Array.get(0));
                            } else {
                                place.setTags1(place.getTags1() + ";" + tags1Array.get(0));
                            }
                        }
                    }
                }
            }
        }

        JSONObject avocado = jsonObject.optJSONObject("avocado");
        if(avocado==null){
            return null;
        }
        JSONArray cards = avocado.optJSONArray("cards");
        JSONObject dataInfo = new JSONObject();
        try {
            switch (type) {
                case "2":
                    avocado = cards.optJSONObject(1);
                    dataInfo = avocado.optJSONObject("data");
                    // 餐馆推荐菜数
                    if (dataInfo != null) {
                        JSONArray list = dataInfo.optJSONArray("wordList");
                        if (list != null && list.size() > 0) {
                            for (int i = 0; i < list.size(); i++) {
                                if (place.getWordList() == null) {
                                    place.setWordList((String) list.get(i));
                                } else {
                                    place.setWordList(place.getWordList() + "," + list.get(i));
                                }
                            }
                        }
                        list = dataInfo.optJSONArray("imgList");
                        if (list != null && list.size() > 0) {
                            place.setImgList(list.toString());
                        }
                        // 餐馆推荐菜数
                        Integer count = dataInfo.optInt("count", 0);
                        place.setCount(count);
                        // 餐馆印象标签
                        dataInfo = avocado.optJSONObject("data");
                        list = dataInfo.optJSONArray("content");
                        JSONArray placeContent = new JSONArray();
                        if (list != null && list.size() > 0) {
                            logger.info("index为1的JSONObject有餐馆印象标签数据");
                            if (list != null && list.size() > 0) {
                                for (int i = 0; i < list.size(); i++) {
                                    dataInfo = (JSONObject) list.get(i);
                                    placeContent.add(dataInfo.optJSONArray("labels"));
                                }
                                avocado = cards.optJSONObject(2);
                                dataInfo = avocado.optJSONObject("data");
                            }
                        } else {
                            logger.info("index为1的JSONObject没有餐馆印象标签数据");
                            avocado = cards.optJSONObject(2);
                            if (avocado.optJSONObject("data") != null) {
                                dataInfo = avocado.optJSONObject("data");
                            }
                            list = dataInfo.optJSONArray("content");
                            if (list != null && list.size() > 0) {
                                for (int i = 0; i < list.size(); i++) {
                                    dataInfo = (JSONObject) list.get(i);
                                    placeContent.add(dataInfo.optJSONArray("labels"));
                                }
                            }
                        }
                        place.setContent(placeContent.toString());
                        // 餐馆评论数
                        dataInfo = dataInfo.optJSONObject("list");
                        if (dataInfo != null) {
                            list = dataInfo.optJSONArray("comment_list");
                            if (list != null) {
                                logger.info("index为2的JSONObject有餐馆评论数");
                                place.setCommentList(list.toString());
                            }
                        } else {
                            logger.info("index为2的JSONObject没有餐馆评论数");
                            avocado = cards.optJSONObject(3);
                            // 餐馆部分评论
                            avocado = avocado.optJSONObject("data");
                            if (avocado != null) {
                                list = avocado.optJSONObject("list").optJSONArray("comment_list");
                                place.setCommentList(list.toString());
                            }
                        }
                        if (list != null && list.size() > 0) {
                            place.setCommentNumber(list.size());
                        } else {
                            place.setCommentNumber(0);
                        }
                    }
                    place.setType(2);
                    break;
                case "1":
                    //景点图片列表
                    JSONArray list = new JSONArray();
                    JSONObject photoList = new JSONObject();
                    avocado = cards.optJSONObject(1);
                    if (avocado != null) {
                        setPhotoList(dataInfo, avocado, list, photoList, place);
                    }
                    avocado = cards.optJSONObject(2);
                    if (avocado != null) {
                        setPhotoList(dataInfo, avocado, list, photoList, place);
                    }
                    // 景点介绍
                    avocado = cards.optJSONObject(3);
                    if (avocado != null) {
                        setPhotoList(dataInfo, avocado, list, photoList, place);
                        if (avocado.optJSONObject("introduce") != null) {
                            place.setIntroduce(avocado.optJSONObject("introduce").optString("abstract", "暂无"));
                        } else {
                            place.setIntroduce("暂无");
                        }
                        // 景点建议游玩时间
                        place.setSugTime(avocado.optString("sug_time", "暂无"));
                        // 景点最佳季节
                        place.setBestTime(avocado.optString("best_time", "暂无"));
                        // 景点天气
                        //place.setWeather(avocado.optJSONObject("weather").toString());
                    }
                    avocado = cards.optJSONObject(4).optJSONObject("data");
                    if (avocado != null) {
                        if (avocado.optJSONObject("introduce") != null) {
                            place.setIntroduce(avocado.optJSONObject("introduce").optString("abstract", "暂无"));
                        } else {
                            place.setIntroduce("暂无");
                        }
                        // 景点建议游玩时间
                        place.setSugTime(avocado.optString("sug_time", "暂无"));
                        // 景点最佳季节
                        place.setBestTime(avocado.optString("best_time", "暂无"));
                        // 景点天气
                        //place.setWeather(avocado.optJSONObject("weather").toString());
                    }
                    // 景点印象标签
                    avocado = cards.optJSONObject(6).optJSONObject("data");
                    if (avocado != null) {
                        list = avocado.optJSONArray("content");
                        JSONArray placeContent = new JSONArray();
                        if (list != null && list.size() > 0) {
                            for (int i = 0; i < list.size(); i++) {
                                dataInfo = (JSONObject) list.get(i);
                                placeContent.add(dataInfo.optJSONArray("labels"));
                            }
                        }
                        place.setContent(placeContent.toString());
                    }
                    // 景点部分评论
                    avocado = cards.optJSONObject(7);
                    if (avocado != null) {
                        avocado = avocado.optJSONObject("data");
                        if (avocado != null) {
                            avocado = avocado.optJSONObject("list");
                            if (avocado != null) {
                                place.setCommentList(avocado.optJSONArray("comment_list").toString());
                                // 景点评论数  avocado.getInt("totalNum")
                                if (avocado.optJSONArray("comment_list").size() == 0) {
                                    place.setCommentNumber(0);
                                } else {
                                    place.setCommentNumber(avocado.optJSONArray("comment_list").size());
                                }
                            }
                        }
                    }
                    place.setType(1);
                    break;
                default:
                    break;
            }
        } catch (JSONException jsonException) {
            jsonException.printStackTrace();
        }
        placeDao.addPlace(place);
        return place;
    }

    @Override
    public Place getPlaceByUid(String uid) {
        return placeDao.getPlaceByUid(uid);
    }

    @Override
    public List<Place> getPlaceList(Integer type) {
        Example example = new Example(Place.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("type", type);
        List<Place> placeList = placeMapper.selectByExample(example);
        return placeList;
    }

    @Override
    public List<Place> getPlaceList(String uidList) {
        List<String> uid = Arrays.asList(uidList.split(";"));
        List<Place> placeList = new ArrayList<>();
        for (String id : uid) {
            Place place = new Place();
            place.setUid(id);
            place = placeMapper.selectOne(place);
            placeList.add(place);
        }
        logger.info("对用于轮播的数据进行设置边界的冒泡排序");
        // 设置边界的冒泡排序
        int len = placeList.size();
        int flag = len;
        // 如果flag>0则排序结束
        while (flag > 0) {
            flag = 0;
            for (int i = 1; i < len; i++) {
                // 比较评分，若前面小于后面则交换数据
                if (placeList.get(i - 1).getOverallRating() < placeList.get(i).getOverallRating()) {
                    Place temp = placeList.get(i);
                    placeList.set(i, placeList.get(i - 1));
                    placeList.set(i - 1, temp);
                    // 设置最新边界
                    flag = i;
                }
            }
            // 记录遍历的边界
            len = flag;
        }
        return placeList;
    }

    public void setPhotoList(JSONObject dataInfo, JSONObject avocado, JSONArray list, JSONObject photoList, Place place) {
        dataInfo = avocado.optJSONObject("data");
        if (dataInfo != null) {
            dataInfo = dataInfo.optJSONObject("list");
            if (dataInfo != null) {
                list = dataInfo.optJSONArray("photo_list");
                if (list != null && list.size() > 0) {
                    for (int i = 0; i < list.size(); i++) {
                        photoList = (JSONObject) list.get(i);
                        if (place.getPhotoList() == null) {
                            place.setPhotoList(photoList.optString("imgUrl", "暂无"));
                        } else {
                            place.setPhotoList(place.getPhotoList() + ";" + photoList.optString("imgUrl", "暂无"));
                        }
                    }
                }
            }
        }
    }
}
