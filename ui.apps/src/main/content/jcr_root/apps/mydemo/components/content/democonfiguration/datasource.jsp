<%@page import="com.sutrix.demo.core.bean.Country"%>
<%@page import="com.sutrix.demo.core.config.IDemoConfiguration"%>
<%@page import="org.apache.sling.api.scripting.SlingBindings"%>
<%@page import="org.apache.sling.api.scripting.SlingScriptHelper"%>
<%@page session="false"
	import="
                  org.apache.sling.api.resource.Resource,
                  org.apache.sling.api.resource.ResourceUtil,
                  org.apache.sling.api.resource.ValueMap,
                  org.apache.sling.api.resource.ResourceResolver,
                  org.apache.sling.api.resource.ResourceMetadata,
                  org.apache.sling.api.wrappers.ValueMapDecorator,
                  java.util.List,
                  java.util.ArrayList,
                  java.util.HashMap,
                  java.util.Locale,
                  com.adobe.granite.ui.components.ds.DataSource,
                  com.adobe.granite.ui.components.ds.EmptyDataSource,
                  com.adobe.granite.ui.components.ds.SimpleDataSource,
                  com.adobe.granite.ui.components.ds.ValueMapResource,
                  com.day.cq.wcm.api.Page,
                  com.day.cq.wcm.api.PageManager"%>
<%
    
%><%@taglib prefix="cq" uri="http://www.day.com/taglibs/cq/1.0"%>
<%
    
%><cq:defineObjects />
<%
    // set fallback
    request.setAttribute(DataSource.class.getName(), EmptyDataSource.instance());

    SlingBindings binding = (SlingBindings) request.getAttribute(SlingBindings.class.getName());
    SlingScriptHelper helper = binding.getSling();
    IDemoConfiguration democonfig = helper.getService(IDemoConfiguration.class);
    String[] data = null;

    data = democonfig.getData();
    List<Country> list = new ArrayList<Country>();
    for (String s : data) {
        Country c = new Country(s, s);
        list.add(c);
    }

    ResourceResolver resolver = resource.getResourceResolver();

    //Create an ArrayList to hold data
    List<Resource> fakeResourceList = new ArrayList<Resource>();

    ValueMap vm = null;

    //Add 5 values to drop down! 
    for (int i = 0; i < list.size(); i++) {

        //allocate memory to the Map instance
        vm = new ValueMapDecorator(new HashMap<String, Object>());

        // Specify the value and text values
        String Value = list.get(i).getCode();
        String Text = list.get(i).getCode();

        //populate the map
        vm.put("value", Value);
        vm.put("text", Text);

        fakeResourceList.add(new ValueMapResource(resolver, new ResourceMetadata(), "nt:unstructured", vm));
    }

    //Create a DataSource that is used to populate the drop-down control
    DataSource ds = new SimpleDataSource(fakeResourceList.iterator());
    request.setAttribute(DataSource.class.getName(), ds);
%>