import React from "react";
import Tab from "./Tab"
import {useDispatch, useSelector} from "react-redux";
import actions from "../../redux/Bill/action";
import agent from "../../core/api/restful";
import {CloseOutlined} from "@ant-design/icons";
import TabWrapper from "./TabHeader.style";
import {ReceiptType} from "../../redux/Bill/BillClasses";

const TabBar = ({style, onNewBill}) => {
    const bills = useSelector(state => state.Bill.bills);
    const activating = useSelector(state => state.Bill.activeBill);
    const dispatch = useDispatch();

    const activeBill = (index) => {
        dispatch({type: actions.ACTIVE_BILL, pos: index});
    }

    const closeBill = (index) => {
        dispatch({type: actions.CLOSE_BILL, pos: index});
    }

    return (
        <div className="d-flex h-100 align-items-center" style={{...style}}>
            <div className="d-flex h-100 align-items-center">
                {Object.values(bills).map((bill, index) => (
                    <Tab key={index} active={index==activating}
                         name={"Hóa đơn " + bill.Id} data={bill.books}
                         closable={true} onClose={e => closeBill(index)}
                         onClick={e => activeBill(index)}/>
                ))}
            </div>
            <TabWrapper className={(activating >= bills.length || activating < 0 ? "active" : " add-new-btn")}
                        onClick={e => onNewBill ? onNewBill() : null}
                        style={{minWidth: 50, justifyContent: "center", padding: 0}}>
                <text style={{fontSize: 30, lineAlign: "center", marginBottom: 5}}>
                    +
                </text>
            </TabWrapper>
        </div>
    )
}

export default TabBar;

