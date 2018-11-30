package com.cb.yixinger.entity;

import lombok.Data;

import javax.persistence.Id;
import javax.persistence.OrderBy;
import java.io.Serializable;

@Data
public class Translator implements Serializable {
    @Id
    @OrderBy("desc")
    private Integer id;

    private Integer userId;

    private Integer textId;

    private String from;

    private String to;

    private String date;

    private String type;

    private String originalText;

    private String translatedText;

    private static final long serialVersionUID = 1L;
}