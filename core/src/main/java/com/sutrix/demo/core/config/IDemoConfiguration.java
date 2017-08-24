package com.sutrix.demo.core.config;

/**
 * This interface is used to define the funeral planner configurations
 */
public interface IDemoConfiguration {

    /**
     * Gets the AEM username which used to call API via HttpClient
     *
     * @return the username
     */
    public String getUserName();

    /**
     * Gets the AEM password which used to call API via HttpClient
     *
     * @return the AEM password
     */
    public String getPassword();

    /**
     * Gets the funeral planner home page path
     *
     * @return the page path
     */
    public String[] getData();
}
