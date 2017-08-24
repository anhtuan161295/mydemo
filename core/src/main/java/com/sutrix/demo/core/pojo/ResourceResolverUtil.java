package com.sutrix.demo.core.pojo;
 
import java.util.Collections;
import java.util.Map;
 
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
 
/**
 *
 * It's used to provide the authentication and resource Resolver to service as per the system user which the service
 * needs the access.
 *
 * <br>
 * This approach is needed as in AEM 6.x administrative ResourceResolvers and admin JCR Sessions usage is deprecated.
 * From AEM 6.x service users can only be mapped to system users (jcr:primaryType = rep:SystemUser) More about this:
 * https://sling.apache.org/documentation/the-sling-engine/service-authentication.html
 *
 * @author thuong.nguyen
 *
 */
public final class ResourceResolverUtil {
 
    /**
     * Private Constructor will prevent the instantiation of this class directly
     */
    private ResourceResolverUtil() {
 
    }
 
    /**
     * System user mapping which has access to read content.
     */
    public static final String SYSTEM_USER_HARLEY_READER = "hdservice";
 
    /**
     *
     * @param resourceResolverFactory
     *            resource resolver Factory object from caller.
     * @param user
     *            user with whose permission the resource can be resolved.
     * @return Resource resolver.
     * @throws LoginException
     *             if login of the user failed.
     */
    private static ResourceResolver getResourceResolver(final ResourceResolverFactory resourceResolverFactory,
            final String user) throws LoginException {
        final Map<String, Object> serviceAuthMap = Collections.singletonMap(ResourceResolverFactory.SUBSERVICE,
                (Object) user);
        return resourceResolverFactory.getServiceResourceResolver(serviceAuthMap);
    }
 
    /**
     * Gives the Resource Resolver which has read access to system user.
     *
     * @param resourceResolverFactory
     *            resourceResolverFactory reference passed from calling method.
     * @return Resource Resolver which has read access to system user.
     * @throws LoginException
     *             if login of the user failed.
     */
    public static ResourceResolver getReadResourceResolver(final ResourceResolverFactory resourceResolverFactory)
            throws LoginException {
        return getResourceResolver(resourceResolverFactory, SYSTEM_USER_HARLEY_READER);
    }
 
    /**
     * It's used to close the resource resolver after we used the resolve resolver.
     *
     * @param resourceResolver
     *            resource resolver was opened which has read access to system user.
     */
    public static void closeResourceResolver(final ResourceResolver resourceResolver) {
        if (resourceResolver != null && resourceResolver.isLive()) {
            resourceResolver.close();
        }
    }
 
}