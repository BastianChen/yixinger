package com.cb.yixinger.entity;

import java.io.Serializable;

public class PlaceWithBLOBs extends Place implements Serializable {
    private String tags1;

    private String wordList;

    private String imgList;

    private String content;

    private String commentList;

    private String photoList;

    private String introduce;

    private static final long serialVersionUID = 1L;

    public String getTags1() {
        return tags1;
    }

    public void setTags1(String tags1) {
        this.tags1 = tags1 == null ? null : tags1.trim();
    }

    public String getWordList() {
        return wordList;
    }

    public void setWordList(String wordList) {
        this.wordList = wordList == null ? null : wordList.trim();
    }

    public String getImgList() {
        return imgList;
    }

    public void setImgList(String imgList) {
        this.imgList = imgList == null ? null : imgList.trim();
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }

    public String getCommentList() {
        return commentList;
    }

    public void setCommentList(String commentList) {
        this.commentList = commentList == null ? null : commentList.trim();
    }

    public String getPhotoList() {
        return photoList;
    }

    public void setPhotoList(String photoList) {
        this.photoList = photoList == null ? null : photoList.trim();
    }

    public String getIntroduce() {
        return introduce;
    }

    public void setIntroduce(String introduce) {
        this.introduce = introduce == null ? null : introduce.trim();
    }
}