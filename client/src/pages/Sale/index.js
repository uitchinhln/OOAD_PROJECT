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
import MoneyPicker from "../../components/MoneyPicker";
import {ReceiptType} from "../../redux/Bill/BillClasses";
import ReceiptLobby from "../../components/ReceiptContent/Lobby";
import BuyReceipt from "../../components/ReceiptContent/BuyReceipt";

const { Header, Sider, Content, Footer } = Layout;
const { Search } = Input;

const Sale = () => {
    const dispatch = useDispatch();
    const bills = useSelector(state => state.Bill.bills);
    const activeIndex = useSelector(state => state.Bill.activeBill);
    const activeBill = bills[activeIndex];

    const options = useSelector(state => state.Search.book_search_completion_data);

    const handleSearch = value => {
        if (value === "") return;
        dispatch(searchActions.bookSearchCompletion(value));
    };

    const handleSelect = value => {
        dispatch({type: actions.UPDATE_BILL_PROP, value: {books: [...activeBill.books, value]}});
    };

    const billRender = bill => {
        switch (bill.getReceiptType) {
            case ReceiptType.BUY:
                return (
                    <BuyReceipt bill={bill}/>
                )
            case ReceiptType.HIRE:
                return (
                    <BuyReceipt bill={bill}/>
                )
            case ReceiptType.IMPORT:
                return (
                    <BuyReceipt bill={bill}/>
                )
            case ReceiptType.RETURN:
                return (
                    <BuyReceipt bill={bill}/>
                )
        }
    }

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
                                <ResultWrapper key={idx} className="d-flex h-100" onClick={e => handleSelect(book)}>
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
                    <TabBar style={{marginLeft: 50}} onNewBill={() => dispatch({type: actions.ACTIVE_BILL, pos: 999})}/>
                </Header>
                {activeIndex >= bills.length || bills.length < 1 || activeBill.getReceiptType == ReceiptType.LOBBY ? (
                    <ReceiptLobby/>
                ) : billRender(activeBill)}
            </Layout>
        </SalePageWrapper>
    )
}

export default Sale;
