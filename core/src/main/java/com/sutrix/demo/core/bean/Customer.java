package com.sutrix.demo.core.bean;

public class Customer {

    private String fullNm;
    private String idNum;
    private String gender;
    private String customerNumber;
    private String customerSince;
    private String birthDt;
    private String nationality;
    private String phone;
    private String email;

    public Customer() {
        super();
    }

    public Customer(String fullNm, String idNum, String gender, String customerNumber, String customerSince,
                    String birthDt, String nationality, String phone, String email) {
        super();
        this.fullNm = fullNm;
        this.idNum = idNum;
        this.gender = gender;
        this.customerNumber = customerNumber;
        this.customerSince = customerSince;
        this.birthDt = birthDt;
        this.nationality = nationality;
        this.phone = phone;
        this.email = email;
    }

    public String getFullNm() {
        return fullNm;
    }

    public void setFullNm(String fullNm) {
        this.fullNm = fullNm;
    }

    public String getIdNum() {
        return idNum;
    }

    public void setIdNum(String idNum) {
        this.idNum = idNum;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getCustomerNumber() {
        return customerNumber;
    }

    public void setCustomerNumber(String customerNumber) {
        this.customerNumber = customerNumber;
    }

    public String getCustomerSince() {
        return customerSince;
    }

    public void setCustomerSince(String customerSince) {
        this.customerSince = customerSince;
    }

    public String getBirthDt() {
        return birthDt;
    }

    public void setBirthDt(String birthDt) {
        this.birthDt = birthDt;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
