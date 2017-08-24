package com.sutrix.demo.core.servlets;

import org.apache.felix.scr.annotations.sling.SlingServlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;

import javax.servlet.ServletException;
import java.io.IOException;

@SlingServlet(paths = "/bin/testform")
public class TestFormServlet extends SlingSafeMethodsServlet {
    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws ServletException, IOException {

        String firstName = request.getParameter("txtFirstName");
        String lastName = request.getParameter("txtLastName");

        response.getWriter().println("First name: "+ firstName);
        response.getWriter().println("Last name: "+ lastName);
    }
}
