package com.cb.yixinger.service;

import com.cb.yixinger.entity.BaseMessage;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/**
 * @Description: 文件上传Service
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2019-01-22 13:48
 **/
public interface FileUploadService {
    String fileUpload(String resourcePath, MultipartFile imageFile, BaseMessage baseMessage) throws IOException;
}
