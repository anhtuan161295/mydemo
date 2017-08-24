package com.sutrix.demo.core.servlets;

import com.adobe.granite.ui.components.ds.DataSource;
import com.adobe.granite.ui.components.ds.SimpleDataSource;
import com.adobe.granite.ui.components.ds.ValueMapResource;
import org.apache.felix.scr.annotations.sling.SlingServlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceMetadata;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.apache.sling.api.wrappers.ValueMapDecorator;

import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.servlet.ServletException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@SlingServlet(paths = "/bin/templates", methods = "GET", metatype = false)
public class TemplateServlet extends SlingSafeMethodsServlet {

    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws ServletException, IOException {

        Session session = request.getResourceResolver().adaptTo(Session.class);
        try {
            Node root = session.getRootNode();
            Node templates = root.getNode("apps/mydemo/components/content/datasource/templates");
            List<Resource> fakeResourceList = new ArrayList<Resource>();
            if (templates.hasNodes()) {
                NodeIterator iterator = templates.getNodes();

                while (iterator.hasNext()) {
                    Node c = iterator.nextNode();

//                    response.getWriter().print("Text: " + c.getProperty("text").getString() + " " +
//                            "Value: " + c.getProperty("value").getString() + "<br>"
//                    );

                    ValueMap vm = new ValueMapDecorator(new HashMap());
                    vm.put("text", c.getProperty("text").getString());
                    vm.put("value", c.getProperty("value").getString());
                    fakeResourceList.add(new ValueMapResource(request.getResourceResolver(), new ResourceMetadata(), "nt:unstructured", vm));
                }
            }
            DataSource ds = new SimpleDataSource(fakeResourceList.iterator());
            request.setAttribute(DataSource.class.getName(), ds);

        } catch (RepositoryException e) {
            e.printStackTrace();
        }


    }
}
