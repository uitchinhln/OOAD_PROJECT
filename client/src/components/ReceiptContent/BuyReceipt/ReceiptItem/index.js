import React, {useEffect, useState} from "react";
import {Col, Row} from "antd";
import ReceiptItemStyle from "./style";

export default function ReceiptItem(props) {

    return (
        <ReceiptItemStyle className={props.className} style={{...props.style}}>
            <Row gutter={[2,2]} key={props.index}>
                <Col span={2}>{props.index + 1}</Col>
                <Col span={2}>{props.book["IDBook"]}</Col>
                <Col span={16}>{props.book["Name"]}</Col>
                <Col span={4}>{props.book["Price"]}</Col>
            </Row>
        </ReceiptItemStyle>
    )
}
