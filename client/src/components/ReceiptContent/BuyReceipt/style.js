import styled from "styled-components";

const BuyReceiptWrapper = styled.div`
`;

export default BuyReceiptWrapper;

export const ReceiptItemStyle = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ebebeb;
  padding: 5px 20px;
  
  &:first-child {
    background-color: #fff;
    box-shadow: 0 1px 5px rgba(0,0,0,0.3);
    position: relative;
    border-color: transparent;
    border-radius: 3px;
  }
  
  &:hover {
    background: #ececec !important;
  }
  
  &.black-block {
    background: #f9f9f9;
  }
  
  &.white-block {
    background: #fff;    
  }
`;
