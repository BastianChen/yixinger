package com.cb.yixinger.entity;

import java.io.Serializable;

public class PlaceCommentWithBLOBs extends PlaceComment implements Serializable {
    private String comment;

    private String imageList;

    private static final long serialVersionUID = 1L;

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment == null ? null : comment.trim();
    }

    public String getImageList() {
        return imageList;
    }

    public void setImageList(String imageList) {
        this.imageList = imageList == null ? null : imageList.trim();
    }
}