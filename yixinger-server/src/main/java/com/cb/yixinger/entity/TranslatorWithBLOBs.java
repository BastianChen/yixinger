package com.cb.yixinger.entity;

import java.io.Serializable;

public class TranslatorWithBLOBs extends Translator implements Serializable {
    private String originalText;

    private String translatedText;

    private static final long serialVersionUID = 1L;

    public String getOriginalText() {
        return originalText;
    }

    public void setOriginalText(String originalText) {
        this.originalText = originalText == null ? null : originalText.trim();
    }

    public String getTranslatedText() {
        return translatedText;
    }

    public void setTranslatedText(String translatedText) {
        this.translatedText = translatedText == null ? null : translatedText.trim();
    }
}