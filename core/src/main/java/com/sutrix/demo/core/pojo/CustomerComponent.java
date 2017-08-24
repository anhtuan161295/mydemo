package com.sutrix.demo.core.pojo;

import java.util.List;

import com.adobe.cq.sightly.WCMUsePojo;
import com.sutrix.demo.core.bean.Customer;
import com.sutrix.demo.core.utils.GetJson;

public class CustomerComponent extends WCMUsePojo {

    private List<Customer> list;

    @Override
    public void activate() throws Exception {
        String url = "http://www.mocky.io/v2/596f52020f00007d036b752e";

//        ObjectMapper mapper = new ObjectMapper();
//        mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
//        try {
//            URL oracle = new URL(url); // URL to Parse
//            URLConnection yc = oracle.openConnection();
//            BufferedReader in = new BufferedReader(new InputStreamReader(yc.getInputStream()));
//
//            String result = "";
//            String inputLine = "";
//            JSONArray a = new JSONArray();
//            while ((inputLine = in.readLine()) != null) {
//                result += inputLine;
//            }
//            JSONObject o = new JSONObject(result);
//            JSONObject data = o.getJSONObject("data");
//            // resp.getWriter().print(data.toString());
//            list = new ArrayList<Customer>();
//            Customer p = mapper.readValue(data.toString(), Customer.class);
//            list.add(p);
//
//            in.close();
//        }
//        catch (Exception e) {
//            e.printStackTrace();
//        }
        
        
        list = GetJson.getData(url, null);
        

    }

    
    public List<Customer> getList() {
        return list;
    }

    
    public void setList(List<Customer> list) {
        this.list = list;
    }
    
    
}
