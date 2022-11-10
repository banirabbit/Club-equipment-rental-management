import React from 'react'
import { Box } from "@mui/system"
import Background from '../assets/loginBodyBcground.jpeg'
import { Backdrop } from '@mui/material'

export default function LoginBody() {
  const bcgStyle = {
    display:"flex",
    width:"100%",
    height:"723px",
    backgroundImage: `url(${Background})`
  }
  return (
    <Backdrop style={bcgStyle}>
      
    </Backdrop>
  )
}
