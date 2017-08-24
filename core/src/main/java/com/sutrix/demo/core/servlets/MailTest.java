package com.sutrix.demo.core.servlets;

import com.day.cq.mailer.MessageGateway;
import com.day.cq.mailer.MessageGatewayService;
import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.HtmlEmail;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.sling.SlingServlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;

import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.servlet.ServletException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@SuppressWarnings("serial")
@SlingServlet(paths = "/bin/xyz")
public class MailTest extends SlingSafeMethodsServlet {

    @Reference
    private MessageGatewayService messageGatewayService;

    @Override
    protected void doGet(final SlingHttpServletRequest req, final SlingHttpServletResponse resp)
            throws ServletException, IOException {
//        SlingBindings binding = (SlingBindings) req.getAttribute(SlingBindings.class.getName());
//        SlingScriptHelper sling = binding.getSling();
//        MessageGatewayService messageGatewayService = sling.getService(MessageGatewayService.class);

        MessageGateway<HtmlEmail> messageGateway = messageGatewayService.getGateway(HtmlEmail.class);
        List<InternetAddress> lstMailToIntAddress = new ArrayList<InternetAddress>();
        HtmlEmail htmlEmail = new HtmlEmail();
        try {
            lstMailToIntAddress.add(new InternetAddress("anhtuan161295@gmail.com"));
            htmlEmail.setTo(lstMailToIntAddress);
            htmlEmail.setSubject("abc");
            htmlEmail.setHtmlMsg("testmail");

            if (messageGateway != null) {
                messageGateway.send(htmlEmail);
            }
        } catch (AddressException e) {
            e.printStackTrace();
        } catch (EmailException e) {
            e.printStackTrace();
        } finally {
            resp.getWriter().print(messageGateway == null ? "null" : "Mail sent");
        }


    }

}
