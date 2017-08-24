package com.sutrix.demo.core.utils;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sutrix.demo.core.bean.Product;

public class ReadCSV {
	String filePath = "";
	BufferedReader br = null;
	String line = "";
	String separator = ",";
	List<Product> list = new ArrayList<Product>();

	public ReadCSV(String filePath) {
		this.filePath = filePath;
		ObjectMapper mapper = new ObjectMapper();
		mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
		try {
			File file = new File(filePath);
			// resp.getWriter().print(file==null ? "null":"not null");
			br = new BufferedReader(new FileReader(filePath));
			br.readLine();
			while ((line = br.readLine()) != null) {

				// use comma as separator
				String[] arr = line.split(separator);
				Product product = new Product(Integer.parseInt(arr[0]), arr[1], Double.parseDouble(arr[2]),
						Integer.parseInt(arr[3]));
				list.add(product);
			}
			// mapper.writeValue(resp.getWriter(), list);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (br != null) {
				try {
					br.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}

		}
	}

	public List<Product> getList() {
		return list;
	}

}
