import React, {useEffect, useState} from "react";
import { FormattedMessage, useIntl } from 'react-intl';
import {Button, Input, Layout, Menu, Row, Col, Select, InputNumber, AutoComplete} from "antd";
import {useDispatch, useSelector} from "react-redux";
import agent from "../../core/api/restful";
import {Redirect, useLocation} from "react-router";
import TabBar from "../../components/TabHeader";
import {UserOutlined} from "@ant-design/icons";
import SalePageWrapper, {ResultWrapper} from "./Sale.style";
import actions from "../../redux/Bill/action";
import searchActions from "../../redux/Search/action";
import NumbericInput from "../../components/NumbericInput/NumbericInput";

const { Header, Sider, Content, Footer } = Layout;
const { Search } = Input;

const Sale = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const staffInfo = useSelector(state => state.Auth.data);
    const bills = useSelector(state => state.Bill.bills);
    const activeIndex = useSelector(state => state.Bill.activeBill);
    const activeBill = bills[activeIndex];
    const dispatch = useDispatch();

    const options = useSelector(state => state.Search.book_search_completion_data);

    useEffect(() => {
        var price = 0;
        activeBill.items.forEach(value => {
            price += parseInt(value['Price']);
        })
        setTotalPrice(price);
    }, [activeBill]);

    const selectAfter = (
        <text>VND</text>
    );

    const addCashByDenomination = (value) => {
        dispatch({type: actions.ADD_CASH, value: value});
    }

    const handleSearch = value => {
        if (value === "") return;
        dispatch(searchActions.bookSearchCompletion(value));
    };

    const handleSelect = value => {
        dispatch({type: actions.ADD_BOOK, value: value});
    };

    const searchResult = (results) => {
        if (results) {
            return [
                {
                    label: 'Kết quả tìm kiếm',
                    options: results.map((book, idx) => {
                        let bookName = book['Name'];
                        return {
                            key: book['IDBook'],
                            value: bookName,
                            label: (
                                <ResultWrapper className="d-flex h-100" onClick={e => handleSelect(book)}>
                                    <div className="w-100 h-100 position-relative p-0">
                                        <span className="h-100">{bookName}</span>
                                        <div className="d-flex justify-content-between sh-book-tiny-description">
                                        <span>
                                          <FormattedMessage
                                              id="title.id"
                                              defaultMessage="Mã sách"
                                          />
                                          : {book['IDBook']}
                                        </span>
                                            <span>
                                          <FormattedMessage
                                              id="title.price"
                                              defaultMessage="Giá"
                                          />
                                          : {book['Price']}
                                        </span>
                                        </div>
                                    </div>
                                </ResultWrapper>
                            ),
                        };
                    }),
                },
            ];
        }
    };

    return (
        <SalePageWrapper>
            <Layout className="d-flex h-100">
                <Header className="d-flex align-items-center" style={{paddingLeft: 0, height: 46, lineHeight: 46, background: "#0090DA"}}>
                    <AutoComplete
                        className="search"
                        autoClearSearchValue
                        listHeight={356}
                        options={searchResult(options)}
                        onSearch={handleSearch}
                    >
                        <Search placeholder="Nhập tên hoặc mã sách" allowClear style={{ width: 530, height: 36, margin: '0 5px', borderRadius: 8 }} />
                    </AutoComplete>
                    <TabBar style={{marginLeft: 50}}/>
                </Header>
                <Layout style={{background: "#ebebeb"}}>
                    <Layout style={{marginRight: 10}}>
                        <Content style={{background: "#fff", padding: 5}}>
                            {Object.values(activeBill.items).map((book, index) => (
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
                                        {new Date(activeBill.timeCreated).toLocaleString('vi-VN')}
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
                                   value={activeBill.cashed} onChange={value => dispatch({type: actions.UPDATE_CASH, value: value})}/>

                            <br/>
                            <br/>
                            <FormattedMessage id="sale.denominations.title" defaultMessage="Chọn tiền theo mệnh giá"/>
                            <Row gutter={[4, 4]}>
                                <Col span={8} style={{height: 50}}>
                                    <Button type="default" className="denominations-btn" onClick={e=> addCashByDenomination(500000)}>500.000</Button>
                                </Col>
                                <Col span={8}>
                                    <Button type="default" className="denominations-btn" onClick={e=> addCashByDenomination(200000)}>200.000</Button>
                                </Col>
                                <Col span={8}>
                                    <Button type="default" className="denominations-btn" onClick={e=> addCashByDenomination(100000)}>100.000</Button>
                                </Col>
                                <Col span={8} style={{height: 50}}>
                                    <Button type="default" className="denominations-btn" onClick={e=> addCashByDenomination(50000)}>50.000</Button>
                                </Col>
                                <Col span={8}>
                                    <Button type="default" className="denominations-btn" onClick={e=> addCashByDenomination(20000)}>20.000</Button>
                                </Col>
                                <Col span={8}>
                                    <Button type="default" className="denominations-btn" onClick={e=> addCashByDenomination(10000)}>10.000</Button>
                                </Col>
                                <Col span={8} style={{height: 50}}>
                                    <Button type="default" className="denominations-btn" onClick={e=> addCashByDenomination(5000)}>5.000</Button>
                                </Col>
                                <Col span={8}>
                                    <Button type="default" className="denominations-btn" onClick={e=> addCashByDenomination(2000)}>2.000</Button>
                                </Col>
                                <Col span={8}>
                                    <Button type="default" className="denominations-btn" onClick={e=> addCashByDenomination(1000)}>1.000</Button>
                                </Col>
                            </Row>

                            <br/>
                            <div>
                                <FormattedMessage id="sale.cash.title" defaultMessage="Tiền thừa trả khách"/>
                                <Input defaultValue="0" size="large" style={{textAlign: "end"}} disabled={true} value={activeBill.cashed - totalPrice}/>
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
            </Layout>
        </SalePageWrapper>
    )
}

export default Sale;
