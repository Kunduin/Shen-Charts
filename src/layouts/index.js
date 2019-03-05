import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "./style.css";
const { Header, Content, Footer } = Layout;

export default ({ children }) => {
  return (
    <Layout>
      <Content style={{ padding: 0, marginTop: 0 }}>
        <div>{children()}</div>
      </Content>
      <Footer style={{ textAlign: "center", backgroundColor:"#80808026",marginTop:"20px" }}>
        <div>
          <p> 南京大学新闻传播学院数据新闻小组 王一珺、叶霁萱、沈欣</p>
          <p>
            数据来源：中国文物信息网、中国统计年鉴2017、江苏省文化厅、南京市文广新局、《第一次可移动文物普查公报》
          </p>
        </div>
      </Footer>
    </Layout>
  );
};
