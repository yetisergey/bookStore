import styled from 'styled-components'

export const TextInput = styled.input`
    box-sizing:border-box;
    border-radius: 5px;
    padding:0 10px;
    height:30px;
    width:100%;
    border: 1px solid rgb(169, 169, 169);;
`
export const Label = styled.label`
    text-transform: capitalize;
    margin-right: 5px;
    white-space:nowrap;
`

export const Wrapper = styled.div`
    display:flex;
    align-items:center;
`