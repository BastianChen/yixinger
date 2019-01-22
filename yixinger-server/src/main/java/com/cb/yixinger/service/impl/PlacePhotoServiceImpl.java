package com.cb.yixinger.service.impl;

import com.cb.yixinger.dao.PlacePhotoMapper;
import com.cb.yixinger.entity.PlacePhoto;
import com.cb.yixinger.service.PlacePhotoService;
import com.cb.yixinger.utils.CommonUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tk.mybatis.mapper.entity.Example;

import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.List;

/**
 * @Description: 地点照片ServiceImpl
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-01-22 17:04
 **/
@Service("PlacePhotoService")
public class PlacePhotoServiceImpl implements PlacePhotoService {
    @Autowired
    private PlacePhotoMapper placePhotoMapper;
    private static final Logger logger = LoggerFactory.getLogger(PlaceServiceImpl.class);
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void addPlacePhotoByReptile(String photoList, String placeId) {
        if (!CommonUtil.isNullOrWhiteSpace(photoList)){
            List<String> photoPathList = Arrays.asList(photoList.split(";"));
            logger.info("对爬取下来的部分图片进行持久化（只有景点才有该部分图片）");
            PlacePhoto placePhoto = new PlacePhoto();
            for (String photoPath:photoPathList){
                placePhoto.setPlaceId(placeId);
                placePhoto.setImageUrl(photoPath);
                placePhoto.setReadTimes(0);
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                String date = sdf.format(System.currentTimeMillis());
                placePhoto.setUploadDate(date);
                placePhoto.setUserName("暂无");
                placePhoto.setCommentType(1);
                placePhotoMapper.insertSelective(placePhoto);
            }
        }
    }

    @Override
    public List<PlacePhoto> getPlacePhoto(String uid) {
        Example example = new Example(PlacePhoto.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("placeId", uid);
        criteria.andEqualTo("commentType", 1);
        List<PlacePhoto> placePhotoList = placePhotoMapper.selectByExample(example);
        return placePhotoList;
    }
}
