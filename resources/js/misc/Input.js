import React, {useState,useEffect} from 'react'

import s from "./Input.module.css"

export default function Input(props)
{
  return <div className={s.Container}>
    <input type={props.type} value={props.value} className={props.value?s.Filled:""} onChange={e => props.onChange(e.target.value)} required={props.required} autoFocus={props.autoFocus}/>
    <span>{props.placeholder}</span>
  </div>
}
