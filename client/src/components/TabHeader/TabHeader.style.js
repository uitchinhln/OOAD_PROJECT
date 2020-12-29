import styled from "styled-components";

const TabWrapper = styled.div`
  width: 130px;
  height: 100%;
  line-height: 100%;
  background: #0077b4;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #acdaff;
  user-select: none;
  cursor: pointer;
  
  &.active {
    background: #fff; 
    color: #005499; 
    
    .ooad-close-button {    
      color: #8e8e8e; 
    }
  }
  
  &:not(.active)::before {
    content: "";
    width: 1px;
    height: 30px;
    position: absolute;
    top: 8px;
    left: 0;
    background-color: #00689d;
  }
  
  .ooad-close-button {
    margin-left: 5px;
    margin-bottom: 4px;
    
    &:hover {       
      color: #ff7474; 
    }
  }
`;

export default TabWrapper;
