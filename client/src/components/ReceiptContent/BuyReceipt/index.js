import React, {useEffect, useState} from "react";
import {Button, Col, Input, Layout, Row} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {FormattedMessage} from "react-intl";
import NumbericInput from "../../NumbericInput/NumbericInput";
import actions from "../../../redux/Bill/action";
import MoneyPicker from "../../MoneyPicker";
import {useDispatch, useSelector} from "react-redux";

const { Header, Sider, Content, Footer } = Layout;

export default function BuyReceipt({bill}) {
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0);
    const staffInfo = useSelector(state => state.Auth.data);

    useEffect(() => {
        var price = 0;
        bill.bookIdList.forEach(value => {
            price += parseInt(value['Price']);
        })
        setTotalPrice(price);
    }, [bill.bookIdList]);

    const selectAfter = (
        <text>VND</text>
    );

    const addCashByDenomination = (value) => {
        dispatch({type: actions.UPDATE_BILL_PROP, value: {cashed: parseInt(value) + parseInt(bill.cashed)}});
    }

    return (
        <Layout style={{background: "#ebebeb"}}>
            <Layout style={{marginRight: 10}}>
                <Content style={{background: "#fff", padding: 5}}>
                    {Object.values(bill.bookIdList).map((book, index) => (
                        <Row gutter={[2,2]} key={index}>
                            <Col span={2}>{book["IDBook"]}</Col>
                            <Col span={2}>{book["IDBook"]}</Col>
                            <Col span={16}>{book["Name"]}</Col>
                            <Col span={4}>{book["Price"]}</Col>
                        </Row>
                    ))}
                </Content>
            </Layout>
            <Sider className="flex-grow-1" width="450px" style={{background:"#fff", padding: "15px 15px", fontSize: 16}}>
                <div style={{minHeight: "calc(100% - 100px)"}}>
                    <div>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                                <UserOutlined />
                                <text>{staffInfo ? staffInfo.name : "Lê Ngọc Chính"}</text>
                            </div>
                            <div style={{maxWidth: "50%"}}>
                                {new Date(bill.dateCreate).toLocaleString('vi-VN')}
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div>
                        <FormattedMessage id="sale.cash.title" defaultMessage="Tổng hóa đơn"/>
                        <Input defaultValue="0" size="large" style={{textAlign: "end"}} disabled={true} value={totalPrice}/>
                    </div>
                    <br/>
                    <FormattedMessage id="sale.cash.title" defaultMessage="Tiền khách đưa"/>
                    <NumbericInput addonAfter={selectAfter} defaultValue="0" size="large" style={{textAlign: "end"}}
                                   value={bill.cashed} onChange={value => dispatch({type: actions.UPDATE_BILL_PROP, value: {cashed: value ? value : 0}})}/>

                    <br/>
                    <br/>
                    <MoneyPicker onClick={addCashByDenomination}/>

                    <br/>
                    <div>
                        <FormattedMessage id="sale.cash.title" defaultMessage="Tiền thừa trả khách"/>
                        <Input defaultValue="0" size="large" style={{textAlign: "end"}} disabled={true} value={bill.cashed - totalPrice}/>
                    </div>
                </div>
                <div style={{minHeight: 100}}>
                    <Button type="primary" className="w-100" style={{height: 90}}>
                        <text style={{fontSize: 20}}>
                            <FormattedMessage id="sale.purchase" defaultMessage="Thanh toán"/>
                        </text>
                    </Button>
                </div>
            </Sider>
        </Layout>
    )
}
