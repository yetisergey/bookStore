import styled, { css } from 'styled-components';
export const Button = styled.button`
    height:40px;
    background-color: #29bb9c;
    color: white;
    border-radius: 5px;
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

`