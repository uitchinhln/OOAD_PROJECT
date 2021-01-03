import React from "react";
import BillLobbyWrapper from "./style";
import {FormattedMessage} from "react-intl";
import {Row, Col, Button} from "antd";
import {useDispatch} from "react-redux";
import {ReceiptType} from "../../../redux/Bill/BillClasses";
import actions from "../../../redux/Bill/action";

export default function ReceiptLobby() {
    const dispatch = useDispatch();

    return (
        <BillLobbyWrapper>
            <text className="receipt-lobby-title">
                <FormattedMessage defaultMessage="Vui lòng chọn giao dịch" id="receipt-lobby.title"/>
            </text>
            <Row gutter={[16, 16]} >
                <Col span={12}>
                    <Button className="receipt-lobby-create-btn" onClick={e => dispatch({type: actions.CREATE_BILL, billType: ReceiptType.BUY})}>
                        Mua sách
                    </Button>
                </Col>
                <Col span={12}>
                    <Button className="receipt-lobby-create-btn" onClick={e => dispatch({type: actions.CREATE_BILL, billType: ReceiptType.HIRE})}>
                        Thuê sách
                    </Button>
                </Col>
                <Col span={12}>
                    <Button className="receipt-lobby-create-btn" onClick={e => dispatch({type: actions.CREATE_BILL, billType: ReceiptType.RETURN})}>
                        Trả sách
                    </Button>
                </Col>
                <Col span={12}>
                    <Button className="receipt-lobby-create-btn" onClick={e => dispatch({type: actions.CREATE_BILL, billType: ReceiptType.IMPORT})}>
                        Nhập sách
                    </Button>
                </Col>
            </Row>
        </BillLobbyWrapper>
    )
}
