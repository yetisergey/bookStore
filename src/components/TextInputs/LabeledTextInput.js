import React from 'react'
import TextInput from './TextInput';
import { Wrapper, Label } from './TextInputs.styles';

export default props => (
    <Wrapper>
        <Label> {props.name}</Label>
        <TextInput {...props}></TextInput>
    </Wrapper>
)