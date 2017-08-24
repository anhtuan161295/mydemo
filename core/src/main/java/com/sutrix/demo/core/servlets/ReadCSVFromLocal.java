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

import java.io.IOException;
import java.util.List;

import javax.jcr.Node;
import javax.jcr.Session;
import javax.servlet.ServletException;

import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.sling.SlingServlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.apache.sling.jcr.api.SlingRepository;

import com.sutrix.demo.core.bean.Product;
import com.sutrix.demo.core.utils.ReadCSV;

/**
 * Servlet that writes some sample content into the response. It is mounted for
 * all resources of a specific Sling resource type. The
 * {@link SlingSafeMethodsServlet} shall be used for HTTP methods that are
 * idempotent. For write operations use the {@link SlingAllMethodsServlet}.
 */
@SuppressWarnings("serial")
@SlingServlet(resourceTypes = "mydemo/components/structure/page", selectors = "test2", extensions = "html", methods = "GET", metatype = true)
public class ReadCSVFromLocal extends SlingSafeMethodsServlet {
	@Reference
	private SlingRepository repository;

	@Override
	protected void doGet(final SlingHttpServletRequest req, final SlingHttpServletResponse resp)
			throws ServletException, IOException {

		Session session = req.getResourceResolver().adaptTo(Session.class);
		ReadCSV r = new ReadCSV("/media/DATA/data.csv");
		List<Product> list = r.getList();
 
		try {
			Node root = session.getRootNode();
			// Node current = req.getResourceResolver().adaptTo(Node.class);
			Node etc = root.getNode("etc");
			Node mydemo = etc.addNode("mydemo");
			Node products = mydemo.addNode("products");
			for (int i = 0; i < 50; i++) {
				Product product = list.get(i);
				Node p = products.addNode("product" + product.getId(), "nt:unstructured");
				p.setProperty("Id", product.getId());
				p.setProperty("Name", product.getName());
				p.setProperty("Price", product.getPrice());
				p.setProperty("Stock", product.getStock());
			}
			session.save();
		} catch (Exception e) {
			// TODO: handle exception
		}

	}
}
