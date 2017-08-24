package com.sutrix.demo.core.pojo;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import com.adobe.cq.sightly.WCMUsePojo;
import com.day.cq.wcm.api.Page;
import com.sutrix.demo.core.bean.MenuItem;

public class HeaderComponent extends WCMUsePojo {

    List<MenuItem> menuItems = null;

    @Override
    public void activate() throws Exception {
        
        final Page rootPage = getCurrentPage().getAbsoluteParent(getCurrentStyle().get("absParent", 2));
        if (rootPage != null) {

            Iterator<Page> children = rootPage.listChildren();

            if (children.hasNext()) {
                menuItems = new ArrayList<MenuItem>();
            }

            while (children.hasNext()) {
                Page page = children.next();
                menuItems.add(new MenuItem(getTitle(page), page.getPath()));
            }
        }else {
//        menuItems = new ArrayList<MenuItem>();
//        menuItems.add(new MenuItem("title1","path1"));
//    	menuItems.add(new MenuItem("title2","path3"));
//    	menuItems.add(new MenuItem("title3","path3"));
        }
    }

    private String getTitle(Page page) {
        String title = "";
        if (page == null) {
            return title;
        }

        title = page.getTitle();
        if ("".equals(title)) {
            title = page.getPageTitle();
            if ("".equals(title)) {
                title = page.getNavigationTitle();
                if ("".equals(title)) {
                    title = page.getName();
                }
            }
        }

        return title;
    }

    /**
     * @return the menuItems
     */
    public List<MenuItem> getMenuItems() {
        return menuItems;
    }

}
