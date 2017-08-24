package com.sutrix.demo.core.bean;

public class Country {

    private String code;
    private String value;

    public Country() {
        super();
    }

    public Country(String code, String value) {
        super();
        this.code = code;
        this.value = value;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

}
