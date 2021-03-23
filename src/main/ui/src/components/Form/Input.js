import React, { forwardRef } from 'react'
import {TextField} from 'react'

export const Input = forwardRef((props, ref)=>{
    return (<TextField
    variant="outlined" 
    margin="normal" 
    inputRef={ref}
    fullWidth
    required
    {...props}
    />)
})