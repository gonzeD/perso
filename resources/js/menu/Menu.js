import React from 'react'

import s from "./menu.module.css"
import { NavLink } from "react-router-dom";

export default function Menu(props)
{

  return <div className={s.Container}>
    <NavLink to="/">bonjour</NavLink>
    <NavLink to="/reminder">reminder</NavLink>
  </div>
}
