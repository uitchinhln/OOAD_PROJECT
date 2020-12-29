import React, {useEffect, useState} from "react";
import {FormattedMessage} from 'react-intl';
import {Button, Input, Layout, Menu} from "antd";
import {useDispatch, useSelector} from "react-redux";
import agent from "../../core/api/restful";
import {Redirect, useLocation} from "react-router";
import TabBar from "../../components/TabHeader";
import {UserOutlined} from "@ant-design/icons";

const { Header, Sider, Content, Footer } = Layout;
const { Search } = Input;

const Sale = () => {
    const staffInfo = useSelector(state => state.Auth.data);
    const bills = useSelector(state => state.Bill.bills);
    const activeIndex = useSelector(state => state.Bill.activeBill);
    const activeBill = bills[activeIndex];

    const onSearch = value => {
        console.log(value);
    }

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
                        <Footer style={{background: "#ebebeb", height: 200}}>

                        </Footer>
                    </Layout>
                    <Sider className="flex-grow-1" width={420} style={{background:"#fff", padding: "15px 15px", fontSize: 16}}>
                        <div style={{minHeight: "calc(100% - 150px)"}}>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    <UserOutlined />
                                    <text>{staffInfo ? staffInfo.name : "Lê Ngọc Chính"}</text>
                                </div>
                                <div style={{maxWidth: "50%"}}>
                                    {new Date(activeBill.timeCreated).toLocaleString('vi-VN')}
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mt-3">
                                <div className="d-flex align-items-center">
                                    <FormattedMessage id="sale.price" defaultMessage="Tổng tiền sách"/>
                                </div>
                                <div style={{maxWidth: "50%"}}>
                                    <text>0</text>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mt-3">
                                <div className="d-flex align-items-center">
                                    <FormattedMessage id="sale.discount" defaultMessage="Giảm giá"/>
                                </div>
                                <div style={{maxWidth: "50%"}}>
                                    <text>0</text>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mt-3">
                                <div className="d-flex align-items-center">
                                    <FormattedMessage id="sale.total" defaultMessage="Khách cần trả"/>
                                </div>
                                <div style={{maxWidth: "50%"}}>
                                    <text>0</text>
                                </div>
                            </div>
                            {activeBill.items.length > 0 ? (
                                <div className="d-flex justify-content-between mt-3">
                                    <div className="d-flex align-items-center">
                                        <FormattedMessage id="sale.cash" defaultMessage="Tiền khách đưa"/>
                                    </div>
                                    <div style={{maxWidth: "50%"}}>
                                        <text>0</text>
                                    </div>
                                </div>
                            ) : ""}
                            <div className="d-flex justify-content-between mt-3">
                                <div className="d-flex align-items-center">
                                    <FormattedMessage id="sale.excess_cash" defaultMessage="Tiền thừa trả khách"/>
                                </div>
                                <div style={{maxWidth: "50%"}}>
                                    <text>0</text>
                                </div>
                            </div>
                        </div>
                        <div style={{minHeight: 150}}>
                            <Button type="primary" className="w-100" style={{height: 90}}>
                                <text style={{fontSize: 20}}>
                                    <FormattedMessage id="sale.purchase" defaultMessage="Thanh toán"/>
                                </text>
                            </Button>
                        </div>
                    </Sider>
                </Layout>
            </Layout>
        </>
    )
}

export default Sale;
