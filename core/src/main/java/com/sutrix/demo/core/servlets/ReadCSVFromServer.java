/*
 *  Copyright 2015 Adobe Systems Incorporated
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package com.sutrix.demo.core.servlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import javax.jcr.Node;
import javax.jcr.Session;
import javax.servlet.ServletException;

import org.apache.felix.scr.annotations.sling.SlingServlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.sutrix.demo.core.bean.Product;

/**
 * Servlet that writes some sample content into the response. It is mounted for
 * all resources of a specific Sling resource type. The
 * {@link SlingSafeMethodsServlet} shall be used for HTTP methods that are
 * idempotent. For write operations use the {@link SlingAllMethodsServlet}.
 */
@SuppressWarnings("serial")
@SlingServlet(resourceTypes = "mydemo/components/structure/page", selectors = "test3", extensions = "html", methods = "GET", metatype = true)
public class ReadCSVFromServer extends SlingSafeMethodsServlet {

	@Override
	protected void doGet(final SlingHttpServletRequest req, final SlingHttpServletResponse resp)
			throws ServletException, IOException {

		Session session = req.getResourceResolver().adaptTo(Session.class);
		List<Product> list = null;

		try {
			Node root = session.getRootNode();
			Node data = root.getNode("content/dam/mydemo/data/data.csv/jcr:content");
			InputStream is = data.getProperty("jcr:data").getBinary().getStream();
			BufferedReader br = new BufferedReader(new InputStreamReader(is));
			list = new ArrayList<Product>();
			String line = "";
			br.readLine(); // Column name
			while ((line = br.readLine()) != null) {
				String[] product = line.trim().split(",");
				Product p = new Product(Integer.parseInt(product[0]), product[1], Double.parseDouble(product[2]),
						Integer.parseInt(product[3]));
				list.add(p);
			}
//			for (int i = 0; i < list.size(); i++) {
//				Product p = list.get(i);
//				resp.getWriter().println("Id: " + p.getId());
//				resp.getWriter().println("Name: " + p.getName());
//				resp.getWriter().println("Price: " + p.getPrice());
//				resp.getWriter().println("Stock: " + p.getStock());
//				resp.getWriter().print("<br>");
//			}
			ObjectMapper mapper = new ObjectMapper();
			mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
			mapper.enable(SerializationFeature.INDENT_OUTPUT);
			resp.setContentType("application/json"); 
			resp.getWriter().println(mapper.writerWithDefaultPrettyPrinter().writeValueAsString(list));

			session.save();
			br.close();
			is.close();
		} catch (Exception e) {
			// TODO: handle exception
		}

	}
}
