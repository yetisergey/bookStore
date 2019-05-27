import React from 'react'
import TextArea from './TextArea';
import { Wrapper, Label } from './TextAreas.styles'

export default props => (
    <Wrapper>
        <Label>{props.name}</Label>
        <TextArea {...props}></TextArea>
    </Wrapper>
)