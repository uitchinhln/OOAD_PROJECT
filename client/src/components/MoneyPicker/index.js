import React from "react";
import {FormattedMessage} from "react-intl";
import {Button, Col, Row} from "antd";
import MoneyPickerWrapper from "./style";

export default function MoneyPicker({onClick}) {

    return (
        <MoneyPickerWrapper>
            <FormattedMessage id="sale.denominations.title" defaultMessage="Chọn tiền theo mệnh giá"/>
            <Row gutter={[4, 4]}>
                <Col span={8} style={{height: 50}}>
                    <Button type="default" className="denominations-btn" onClick={e=> onClick(500000)}>500.000</Button>
                </Col>
                <Col span={8}>
                    <Button type="default" className="denominations-btn" onClick={e=> onClick(200000)}>200.000</Button>
                </Col>
                <Col span={8}>
                    <Button type="default" className="denominations-btn" onClick={e=> onClick(100000)}>100.000</Button>
                </Col>
                <Col span={8} style={{height: 50}}>
                    <Button type="default" className="denominations-btn" onClick={e=> onClick(50000)}>50.000</Button>
                </Col>
                <Col span={8}>
                    <Button type="default" className="denominations-btn" onClick={e=> onClick(20000)}>20.000</Button>
                </Col>
                <Col span={8}>
                    <Button type="default" className="denominations-btn" onClick={e=> onClick(10000)}>10.000</Button>
                </Col>
                <Col span={8} style={{height: 50}}>
                    <Button type="default" className="denominations-btn" onClick={e=> onClick(5000)}>5.000</Button>
                </Col>
                <Col span={8}>
                    <Button type="default" className="denominations-btn" onClick={e=> onClick(2000)}>2.000</Button>
                </Col>
                <Col span={8}>
                    <Button type="default" className="denominations-btn" onClick={e=> onClick(1000)}>1.000</Button>
                </Col>
            </Row>
        </MoneyPickerWrapper>
    )
}
