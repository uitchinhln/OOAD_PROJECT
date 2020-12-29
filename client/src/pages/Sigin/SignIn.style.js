import styled from 'styled-components';
import { palette } from 'styled-theme';

const BlaSignInStyleWrapper = styled.div`
    height: 100%;
    width: 100%;
    background-size: cover;
  
    .blaLoginContentWrapper {
        width: 350px;
        height: 250px;
        z-index: 10;
        background: #ffffff46;
    }
  
    .blaLoginContent {
        margin: 30px 40px;
        width: 350px;
        
        .blaLogoWrapper {
            width: 100%;
            display: flex;
            margin-bottom: 30px;
            justify-content: center;
            flex-shrink: 0;
            
            span {
                font-size: 24px;
                font-weight: 300;
                line-height: 1;
                text-transform: uppercase;
                color: ${palette('secondary', 2)};
            }
        }
          
        .blaInputWrapper {
            margin-bottom: 15px;
        
            &:last-of-type {
                margin-bottom: 0;
            }
            
            input {
                background: #ffffff9f;
                
                &::-webkit-input-placeholder {
                    color: ${palette('grayscale', 0)};
                }
                
                &:-moz-placeholder {
                    color: ${palette('grayscale', 0)};
                }
                
                &::-moz-placeholder {
                    color: ${palette('grayscale', 0)};
                }
                &:-ms-input-placeholder {
                    color: ${palette('grayscale', 0)};
                }
            }
        }
    }
`;

export default BlaSignInStyleWrapper;
