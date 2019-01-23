package com.cb.yixinger.service.impl;

import com.cb.yixinger.entity.BaseMessage;
import com.cb.yixinger.service.FileUploadService;
import com.cb.yixinger.utils.FileUploadUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

/**
 * @Description: 文件上传ServiceImpl
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-01-22 13:48
 **/
@Service("FileUploadService")
public class FileUploadServiceImpl implements FileUploadService {
    private static final Logger logger = LoggerFactory.getLogger(FileUploadServiceImpl.class);

    @Override
    public String fileUpload(String resourcePath, MultipartFile imageFile, BaseMessage baseMessage) throws IOException {
        if (imageFile != null) {
            logger.info("获取到图像并校验文件类型是否是被允许的");
            if (FileUploadUtil.allowUpload(imageFile.getContentType())) {
                logger.info("该文件类型是被允许的");
                String fileName = FileUploadUtil.rename(imageFile.getOriginalFilename());
                int end = fileName.lastIndexOf(".");
                String saveName = fileName.substring(0, end);
                File dir = new File(resourcePath);
                if (!dir.exists()) {
                    dir.mkdirs();
                }
                logger.info("---文件保存目录--" + dir);
                File file = new File(dir, saveName + "_src.jpg");
                imageFile.transferTo(file);
                return saveName;
            } else {
                logger.info("不支持的图片格式");
                baseMessage.setMessageDetail("不支持的图片格式");
                return null;
            }
        } else {
            logger.info("文件为空");
            baseMessage.setMessageDetail("文件为空");
            return null;
        }
    }
}
