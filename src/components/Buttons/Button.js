import React from 'react'
import { Button } from './Buttons.styles'

export default props =>
    (
        <Button onClick={props.onClick} {...props}></Button>
    )