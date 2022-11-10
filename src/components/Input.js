import React from 'react'

const Input = (props) => {
  return (
    <textarea rows="12" cols="60"  onChange={(e)=>{props.setdatafn(e.target.value)}}></textarea>


  )
}

export default Input;