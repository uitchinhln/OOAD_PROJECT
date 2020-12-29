import styled from "styled-components";

const TabWrapper = styled.div`
  padding: 0 7px;
  min-width: 120px;
  height: 100%;
  line-height: 100%;
  background: #0077b4;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: #acdaff;
  user-select: none;
  cursor: pointer;
  
  text {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
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
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover {       
      color: #ff7474; 
    }
  }
`;

export default TabWrapper;
