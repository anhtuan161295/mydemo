package com.sutrix.demo.core.bean;

public class MenuItem {

    String title;

    String path;

    public MenuItem() {

    }

    public MenuItem(String title, String path) {
        this.title = title;
        this.path = path;
    }

    /**
     * @return the title
     */
    public String getTitle() {
        return title;
    }

    /**
     * @param title the title to set
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * @return the path
     */
    public String getPath() {
        return path;
    }

    /**
     * @param path the path to set
     */
    public void setPath(String path) {
        this.path = path;
    }

}
