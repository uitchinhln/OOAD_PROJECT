import styled from "styled-components";

const SalePageWrapper = styled.div`
  display: flex;
  height: 100%;
  
  .suggestion-btn {
    width: 100%;
    height: 100%;
    font-weight: bold;
    color: #fff;
  }
  
  .right-col {
    display: flex;
    flex-flow: column;
  }
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
    
  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;

export default SalePageWrapper;

export const ResultWrapper = styled.div`
  min-height: 40px;
  
  .sh-book-tiny-description {
    font-size: 11px;
    color: #9fa59f;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    span {
      margin-bottom: 0;
    }
  }

  .sh-search-result-img {
    margin-right: 15px;
    width: 35px;
    min-width: 35px;
    height: 50px;
  }
`;
