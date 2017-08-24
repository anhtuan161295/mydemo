package com.sutrix.demo.core.config;

import java.util.Dictionary;

import org.apache.commons.lang3.StringUtils;
import org.apache.felix.scr.annotations.Activate;
import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Modified;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Service;
import org.osgi.service.component.ComponentContext;

import com.sutrix.demo.core.constants.ConstantsHelper;

/**
 * The funeral planner configuration
 */
@Service
@Component(name = ConstantsHelper.SERVICE_CONFIGURATION_NAME, label = "My Service", immediate = true, enabled = true, description = "This authentication is only used to call servlet via HttpClient in the author mode")
@Properties({
        @Property(name = DemoConfiguration.AEM_USERNAME, label = "User Name", value = DemoConfiguration.DEFAULT_VALUE),
        @Property(name = DemoConfiguration.AEM_PASSWORD, label = "Password", value = DemoConfiguration.DEFAULT_VALUE),

        @Property(name = DemoConfiguration.AEM_DATA, label = "Funeral Home Url", value = ConstantsHelper.AEM_DATA) })
public class DemoConfiguration implements IDemoConfiguration {

    static final String DEFAULT_VALUE = "admin";

    static final String AEM_USERNAME = "mydemo.aem.user.username";
    static final String AEM_PASSWORD = "mydemo.aem.user.password";
 
    static final String AEM_DATA = "mydemo.data";

    private String userName;
    private String password;
    private String[] data;

    /**
     *
     * @param config
     * @param key
     * @param defaultValue
     * @return
     */
    private String getValue(final Dictionary<?, ?> config, String key, String defaultValue) {
        String sRet = defaultValue;
        try {
            sRet = (String) config.get(key);
        }
        catch (Exception ex) {
            sRet = defaultValue;
        }
        if (StringUtils.isBlank(sRet)) {
            sRet = defaultValue;
        }
        return sRet;
    }

    @Activate
    public void activate(ComponentContext context) {

        final Dictionary<?, ?> config = context.getProperties();

        this.userName = getValue(config, AEM_USERNAME, DEFAULT_VALUE);
        this.password = getValue(config, AEM_PASSWORD, DEFAULT_VALUE);

        this.data = (String[]) config.get(AEM_DATA);

    }

    @Modified
    public void modified(ComponentContext context) {
        activate(context);
    }

    @Override
    public String getUserName() {
        // TODO Auto-generated method stub
        return userName;
    }

    @Override
    public String getPassword() {
        // TODO Auto-generated method stub
        return password;
    }

    @Override
    public String[] getData() {
        // TODO Auto-generated method stub
        return data;
    }

}
