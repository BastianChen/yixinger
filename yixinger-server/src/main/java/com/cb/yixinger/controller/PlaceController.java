package com.cb.yixinger.controller;

import com.cb.yixinger.service.PlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @Auther: Administrator Chen Ben
 * @Date: 2018/12/12/012 21:42
 * @Description:
 */
@Controller
@RequestMapping(value = "/Place")
public class PlaceController {
    @Autowired
    private PlaceService placeService;


}
