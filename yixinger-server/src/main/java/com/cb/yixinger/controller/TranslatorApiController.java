package com.cb.yixinger.controller;

import com.cb.yixinger.service.TranslatorService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @Description:
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-30 17:09
 **/
@Controller
public class TranslatorApiController {
    @Autowired
    private TranslatorService translatorService;
    private static final Logger logger = LoggerFactory.getLogger(TranslatorApiController.class);

//    @LoggerManage(logDescription = "翻译用户信息")
//    @RequestMapping(value = "/translateUser", method = RequestMethod.POST, produces = "application/json; charset=UTF-8")
//    public ResponseEntity<BaseMessage> translateUser(@RequestBody User user,@RequestParam(value = "language", required = true) String language) {
//        BaseMessage baseMessage = new BaseMessage();
//        translatorService.translateUserInfo(user,language);
//        logger.info("翻译用户 {} 信息成功", user.getNickName());
//        baseMessage.setMessage("修改用户 " + user.getNickName() + " 信息成功");
//        return baseMessage.response();
//    }
}
