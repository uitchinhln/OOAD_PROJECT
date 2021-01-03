import styled from "styled-components";

const BillLobbyWrapper = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  
  .receipt-lobby-title {
    font-size: 60px;
    margin-bottom: 40px;
  }
  
  .receipt-lobby-create-btn {
    width: 100%;
    height: 200px;
  }
`;

export default BillLobbyWrapper;
