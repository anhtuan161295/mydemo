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
import java.util.ArrayList;
import java.util.List;

import javax.jcr.Node;
import javax.jcr.Property;
import javax.jcr.Session;
import javax.jcr.Value;
import javax.servlet.ServletException;

import org.apache.felix.scr.annotations.sling.SlingServlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sutrix.demo.core.bean.Carousel;
//import com.sutrix.demo.core.bean.Carousel;
//import com.sutrix.demo.core.bean.ElementMapping;
import com.sutrix.demo.core.bean.ElementMapping;

/**
 * Servlet that writes some sample content into the response. It is mounted for
 * all resources of a specific Sling resource type. The
 * {@link SlingSafeMethodsServlet} shall be used for HTTP methods that are
 * idempotent. For write operations use the {@link SlingAllMethodsServlet}.
 */
@SuppressWarnings("serial")
@SlingServlet(resourceTypes = "mydemo/components/structure/page"
, selectors = "test", extensions = "html", methods = "GET", metatype = true

)
public class ReadPagePathsFromCarousel extends SlingSafeMethodsServlet {

	@Override
	protected void doGet(final SlingHttpServletRequest req, final SlingHttpServletResponse resp)
			throws ServletException, IOException {

		ResourceResolver resolver = null;
		try {

			// Invoke the getReadResourceResolver method to create a Resource
			// Resolver instance
			resolver = req.getResourceResolver();

			// Get session
			Session session = resolver.adaptTo(Session.class);
//
////			 Do something with the resource
//			List<String> pagePath = new ArrayList<String>();
//			List<Carousel> carousels = new ArrayList<Carousel>();
//			ObjectMapper mapper = new ObjectMapper();
//			Node n = session.getNode("/content/mydemo/servlet/jcr:content/par/carousel");
//			if (n != null) {
//				Property prop = n.getProperty("pagePaths");
//				if (prop.isMultiple()) {
//					Value[] value = prop.getValues();
//					for (Value v : value) {
//						pagePath.add(v.getString());
//					}
//				}else {
//					pagePath.add(prop.getValue().getString());
//				}
//				for(int i =0;i<pagePath.size(); i++){
//					ElementMapping ele = mapper.readValue(pagePath.get(i), ElementMapping.class);
//					Carousel c = new Carousel();
//					c.setTitle(String.valueOf(i));
//					c.setPath(ele.getPagePath());
//					carousels.add(c);
//				}
//			}
////			
//			mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
//			mapper.writeValue(resp.getWriter(), carousels);
			

			List<Carousel> carousels = new ArrayList<Carousel>();
			try {
				Resource r = resolver.getResource("/content/mydemo/en/jcr:content/par/carousel");
				ValueMap properties = r.getValueMap();

				// Initialize jackson mapper
				ObjectMapper mapper = new ObjectMapper();
				mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);

				// Get property pagePaths of Carousel component
				String[] list =  properties.get("pagePaths", String[].class);
				for (int i = 0; i < list.length; i++) {
//					 resp.getWriter().println(list[i]);
					// Map pagePath values to ElemementMapping class
					ElementMapping ele = mapper.readValue(list[i], ElementMapping.class);
					// Initialize Carousel class and add it to list
					Carousel c = new Carousel();
					c.setPath(ele.getPagePath());
//					c.setDesktopImgPath(ele.getPagePath());
//					c.setMobileImgPath(ele.getPagePath());
//					c.setTitle(String.valueOf(i));
					if (null != c) {
						carousels.add(c);
					}
				}
				// Write/display list as json
				mapper.writeValue(resp.getWriter(), carousels);

			} catch (Exception e) {
			}

		} catch (Exception e) {
		} finally {
//			if (resolver != null && resolver.isLive()) {
//				resolver.close();
//			}
		}

	}
}
