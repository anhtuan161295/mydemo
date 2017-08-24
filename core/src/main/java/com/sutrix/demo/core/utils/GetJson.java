package com.sutrix.demo.core.utils;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.sutrix.demo.core.bean.Customer;

public class GetJson {

    public static List<Customer> getData(String url, String body) {
        List<Customer> list = new ArrayList<Customer>();
        try {
            CloseableHttpClient httpClient = HttpClientBuilder.create().build();
            HttpGet request = new HttpGet(url);
            // StringEntity params = new StringEntity(body);
            request.addHeader("content-type", "application/json");
            // request.setEntity(params);
            HttpResponse result = httpClient.execute(request);
            String json = EntityUtils.toString(result.getEntity(), "UTF-8");

            Gson gson = new Gson();
            JsonObject jo = gson.fromJson(json, JsonObject.class);
            JsonObject data = jo.getAsJsonObject("data");
            Customer p = gson.fromJson(data, Customer.class);
            list.add(p);
            return list;

        }
        catch (IOException ex) {}
        return null;
    }
}
