import styled, { css } from 'styled-components';
export const Button = styled.button`
    height:40px;
    background-color: #29bb9c;
    color: white;
    border-radius: 5px 5px 0 0;
    border:none;
    padding: 5px 20px;
    position:relative;
    margin: 5px;
    cursor: pointer;
    ${props =>
        props.fullWidth &&
        css`
          width:100%;
          margin:0;
    `}
    
    :hover{
        background-color:#27b395;
    }

    ::after{
        content:"";
        display: block;
        position:absolute;
        height:8px;
        left:0px;
        top:calc(100% - 3px);
        border-radius:0 0 5px 5px;
        background-color: #24a589;
        width: 100%;
    }
`