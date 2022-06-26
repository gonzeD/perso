import React from 'react'

import s from "./menu.module.css"
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Menu from "./Menu"
import Reminder from "../reminder/Router.js";

export default function Router(props)
{

  return <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="reminder/*" element={<Reminder/>}/>
    </Routes>
  </BrowserRouter>
}
