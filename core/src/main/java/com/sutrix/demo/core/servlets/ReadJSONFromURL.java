/*
 * Copyright 2015 Adobe Systems Incorporated
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */
package com.sutrix.demo.core.servlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;

import com.sutrix.demo.core.bean.Customer;
import org.apache.felix.scr.annotations.sling.SlingServlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.apache.sling.commons.json.JSONArray;
import org.apache.sling.commons.json.JSONObject;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Servlet that writes some sample content into the response. It is mounted for all resources of a specific Sling
 * resource type. The {@link SlingSafeMethodsServlet} shall be used for HTTP methods that are idempotent. For write
 * operations use the {@link SlingAllMethodsServlet}.
 */
@SuppressWarnings("serial")
@SlingServlet(resourceTypes = "mydemo/components/structure/page", selectors = "test4", extensions = "html", methods = "GET", metatype = true)
public class ReadJSONFromURL extends SlingSafeMethodsServlet {

    private List<Customer> customers = new ArrayList<Customer>();

    @Override
    protected void doGet(final SlingHttpServletRequest req, final SlingHttpServletResponse resp)
            throws ServletException, IOException {

        String url = "http://www.mocky.io/v2/596f52020f00007d036b752e";
        List<Customer> list = null;
        ObjectMapper mapper = new ObjectMapper();
        mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
        try {
            URL oracle = new URL(url); // URL to Parse
            URLConnection yc = oracle.openConnection();
            BufferedReader in = new BufferedReader(new InputStreamReader(yc.getInputStream()));

            String result = "";
            String inputLine = "";
            JSONArray a = new JSONArray();
            while ((inputLine = in.readLine()) != null) {
                result += inputLine;
            }
            JSONObject o = new JSONObject(result);
            JSONObject data = o.getJSONObject("data");
            resp.getWriter().print(data.toString());
            list = new ArrayList<Customer>();
            Customer p = mapper.readValue(data.toString(), Customer.class);
            list.add(p);

            in.close();
        }
        catch (Exception e) {
            e.printStackTrace();
        }

    }
}
