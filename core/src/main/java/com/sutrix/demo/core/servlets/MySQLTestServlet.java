package com.sutrix.demo.core.servlets;

import com.day.commons.datasource.poolservice.DataSourceNotFoundException;
import com.day.commons.datasource.poolservice.DataSourcePool;
import com.sutrix.demo.core.bean.Product;
import com.sutrix.demo.core.utils.ReadCSV;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.sling.SlingServlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;

import javax.servlet.ServletException;
import javax.sql.DataSource;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

@SlingServlet(paths = "/bin/mysql")
public class MySQLTestServlet extends SlingSafeMethodsServlet {

    @Reference
    private DataSourcePool pool;

    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws ServletException, IOException {

        Connection conn = null;
        PreparedStatement s = null;

        try {
            DataSource source = (DataSource) pool.getDataSource("mysql");

            conn = source.getConnection();
            response.getWriter().println("Connected");

            ReadCSV readCSV = new ReadCSV("/media/DATA/data.csv");
            List<Product> list = readCSV.getList();

            for (int i = 0; i < list.size(); i++) {
                Product p = list.get(i);
                s = conn.prepareStatement("INSERT INTO `Product`(id,name,price,stock) VALUES (?,?,?,?)");
                s.setInt(1, p.getId());
                s.setString(2, p.getName());
                s.setInt(3, (int) p.getPrice());
                s.setInt(4, p.getStock());

                s.executeUpdate();
                s.close();
            }
            response.getWriter().println("Product data added!");

        } catch (SQLException e) {
            e.printStackTrace();
        } catch (DataSourceNotFoundException e) {
            e.printStackTrace();
        } finally {
            try {

                s.close();
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }


    }
}
