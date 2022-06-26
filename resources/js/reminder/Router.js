import React, {useState,useEffect} from 'react'

import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Input from "../misc/Input"

import p from "../../css/panel.module.css"
import s from "./Reminder.module.css"

import {http} from "../utils"

export default function Router(props)
{

  return <Routes>
    <Route path="/*" element={<Reminder/>}/>
    <Route path="/add" element={<AddReminder/>}/>
  </Routes>
}


function Reminder(props)
{
  var [reminders, setReminders] = useState(null);
  var [batch,setBatch] = useState(0)

  useEffect(() => {
    http("/api/reminder").then(d => setReminders(d.data));
  },[batch]);

  var remove = id => {
    http("/api/reminder/"+id,"DELETE").then(() => setBatch(batch+1));
  }

  return <div className={p.Container}>
    <h2>
      <span>Reminder</span>
      <Link to="/reminder/add" className="btn">Add</Link>
    </h2>
    <section className={p.Section}>
      <div className={s.Table}>
        {reminders && reminders.map(x => <div className={s.Entry}>
          {x.title}
          <div className="btn" onClick={() => remove(x.id)}>Delete</div>
        </div>)}
      </div>
    </section>
  </div>
}


function AddReminder(props)
{
  var [title,setTitle] = useState("");
  var [cron,setCron] = useState("");
  var [data,setData] = useState("");

  var navigate = useNavigate();
  var submit = e => {
    e.preventDefault();
    http("/api/reminder","POST",{title:title,frequency:cron,data:data}).then(d => navigate("/reminder"));

  }

  return <div className={p.Container}>
    <h2>
      <span>Add a reminder</span>
      <Link to="/reminder/" className="btn">Back</Link>
    </h2>
    <form className={p.Section} onSubmit={submit}>
      <Input type="text" value={title} onChange={setTitle} placeholder="Title of the reminder" required autoFocus/>
      <Input type="text" value={cron} onChange={setCron} placeholder="Custom cron interval (Y M D)" required/>
      <Input type="text" value={data} onChange={setData} placeholder="Round robin data (optionnal, separated by comma)"/>
      <input type="submit" className="btn" value="Add reminder"/>
    </form>
  </div>
}
