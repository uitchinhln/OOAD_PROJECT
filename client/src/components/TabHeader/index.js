import React from "react";
import Tab from "./Tab"
import {useDispatch, useSelector} from "react-redux";
import actions from "../../redux/Bill/action";
import agent from "../../core/api/restful";
import {CloseOutlined} from "@ant-design/icons";
import TabWrapper from "./TabHeader.style";

const TabBar = ({style}) => {
    const bills = useSelector(state => state.Bill.bills);
    const activating = useSelector(state => state.Bill.activeBill);
    const dispatch = useDispatch();

    const createBill = () => {
        dispatch({type: actions.CREATE_BILL});
    }

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
                         name={"Hóa đơn " + bill.Id} data={bill.bookIdList}
                         closable={true} onClose={e => closeBill(index)}
                         onClick={e => activeBill(index)}/>
                ))}
            </div>
            <TabWrapper onClick={e => createBill()} style={{minWidth: 35, justifyContent: "center", padding: 0}}>
                +
            </TabWrapper>
        </div>
    )
}

export default TabBar;

