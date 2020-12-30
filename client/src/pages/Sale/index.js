import React, {useEffect, useState} from "react";
import {FormattedMessage} from 'react-intl';
import {Button, Input, Layout, Menu, Row, Col, Select, InputNumber } from "antd";
import {useDispatch, useSelector} from "react-redux";
import agent from "../../core/api/restful";
import {Redirect, useLocation} from "react-router";
import TabBar from "../../components/TabHeader";
import {UserOutlined} from "@ant-design/icons";
import CurrencyInput from 'react-currency-input';

const { Header, Sider, Content, Footer } = Layout;
const { Search } = Input;
const { Option } = Select;

const Sale = () => {
    const staffInfo = useSelector(state => state.Auth.data);
    const bills = useSelector(state => state.Bill.bills);
    const activeIndex = useSelector(state => state.Bill.activeBill);
    const activeBill = bills[activeIndex];

    const onSearch = value => {
        console.log(value);
    }


    const selectAfter = (
        <Select defaultValue="1kVND" className="select-after">
            <Option value="1kVND">.000 VND</Option>
            <Option value="1VND">VND</Option>
        </Select>
    );

    return (
        <>
            <Layout className="d-flex h-100">
                <Header className="d-flex align-items-center" style={{paddingLeft: 0, height: 46, lineHeight: 46, background: "#0090DA"}}>
                    <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 530, height: 36, margin: '0 5px', borderRadius: 8 }} />
                    <TabBar style={{marginLeft: 50}}/>
                </Header>
                <Layout style={{background: "#ebebeb"}}>
                    <Layout style={{marginRight: 10}}>
                        <Content style={{background: "#fff"}}>

                        </Content>
                    </Layout>
                    <Sider className="flex-grow-1" width="45%" style={{background:"#fff", padding: "15px 15px", fontSize: 16}}>
                        <div>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    <UserOutlined />
                                    <text>{staffInfo ? staffInfo.name : "Lê Ngọc Chính"}</text>
                                </div>
                                <div style={{maxWidth: "50%"}}>
                                    {new Date(activeBill.timeCreated).toLocaleString('vi-VN')}
                                </div>
                            </div>
                        </div>
                        <Row gutter={[16, 16]}>
                            <Col span={12}>
                                <FormattedMessage id="sale.cash.title" defaultMessage="Tiền khách đưa"/>
                                <Input addonAfter={selectAfter} defaultValue="0" size="large" style={{textAlign: "end"}}/>
                            </Col>
                            <Col span={12}>
                            </Col>
                        </Row>
                    </Sider>
                </Layout>
            </Layout>
        </>
    )
}

export default Sale;
