import React, {useEffect, useState} from "react";
import {FormattedMessage} from 'react-intl';
import {Button, Input, Layout, Menu} from "antd";
import {useDispatch, useSelector} from "react-redux";
import agent from "../../core/api/restful";
import {Redirect, useLocation} from "react-router";
import TabBar from "../../components/TabHeader";

const { Header, Sider, Content, Footer } = Layout;
const { Search } = Input;

const Sale = () => {

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
                    <Sider className="flex-grow-1" width={420} style={{background:"#fff"}}>

                    </Sider>
                </Layout>
            </Layout>
        </>
    )
}

export default Sale;
