
package com.sutrix.demo.core.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import javax.servlet.ServletException;

import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.sling.SlingServlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceMetadata;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.apache.sling.api.wrappers.ValueMapDecorator;

import com.adobe.granite.ui.components.ds.DataSource;
import com.adobe.granite.ui.components.ds.SimpleDataSource;
import com.adobe.granite.ui.components.ds.ValueMapResource;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.sutrix.demo.core.bean.Country;
import com.sutrix.demo.core.config.IDemoConfiguration;
import com.sutrix.demo.core.constants.ConstantsHelper;

@SuppressWarnings("serial")
// @SlingServlet(paths="/bin/service/demo")

@SlingServlet(resourceTypes = "page/demo")
public class DemoConfigurationServlet extends SlingSafeMethodsServlet {

    @Reference(target = ConstantsHelper.SERVICE_CONFIGURATION_PID)
    private IDemoConfiguration demoConfiguration;

    @Override
    protected void doGet(final SlingHttpServletRequest req, final SlingHttpServletResponse resp)
            throws ServletException, IOException {

        String[] data = demoConfiguration.getData();
        List<Country> list = new ArrayList<Country>();
        for (String s : data) {
            Country c = new Country(s, s);
            list.add(c);
        }
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();
        builder.disableHtmlEscaping();

        Gson gson = builder.create();
        JsonArray array = gson.toJsonTree(list).getAsJsonArray();
        JsonObject object = new JsonObject();
        object.add("countries", array);

        // resp.getWriter().print(gson.toJson(object));

        ResourceResolver resolver = req.getResourceResolver();
        List<Resource> fakeResourceList = new ArrayList<Resource>();
        for (Country item : list) {
            ValueMap vm = new ValueMapDecorator(new HashMap());
            vm.put("text", item.getValue());
            vm.put("value", item.getValue());
            fakeResourceList.add(new ValueMapResource(resolver, new ResourceMetadata(), "nt:unstructured", vm));
        }
        DataSource ds = new SimpleDataSource(fakeResourceList.iterator());
        req.setAttribute(DataSource.class.getName(), ds);
    }

}
