"use client";
import { useState } from "react";
import { profile } from "../data/profile";
const empty = { name: "", email: "", subject: "", message: "" };
function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Enter your name (at least 2 characters).";
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Enter a valid email address.";
  if (v.subject.trim().length < 3) e.subject = "Enter a subject (at least 3 characters).";
  if (v.message.trim().length < 10) e.message = "Write a message of at least 10 characters.";
  return e;
}
export default function Contact() {
  const [v, setV] = useState(empty);
  const [err, setErr] = useState({});
  const [state, setState] = useState("idle");
  const set = (k) => (ev) => setV({ ...v, [k]: ev.target.value });
  function submit(ev) {
    ev.preventDefault();
    const e = validate(v); setErr(e);
    if (Object.keys(e).length) { setState("error"); return; }
    // Frontend only: opens the visitor's email app with the message filled in.
    const body = encodeURIComponent(v.message + "\n\n— " + v.name + " (" + v.email + ")");
    window.location.href = "mailto:" + profile.email + "?subject=" + encodeURIComponent(v.subject) + "&body=" + body;
    setState("success"); setV(empty);
  }
  const f = (k, label, type = "text") => (
    <label>{label}
      {type === "area" ? <textarea rows="5" value={v[k]} onChange={set(k)} aria-invalid={!!err[k]} /> : <input type={type} value={v[k]} onChange={set(k)} aria-invalid={!!err[k]} />}
      {err[k] && <span className="err" role="alert">{err[k]}</span>}
    </label>
  );
  return (
    <section id="contact" className="wrap sec">
      <h2>Contact</h2>
      <div className="two">
        <form className="card form" onSubmit={submit} noValidate>
          {f("name", "Name")}{f("email", "Email", "email")}{f("subject", "Subject")}{f("message", "Message", "area")}
          {state === "error" && <p className="msg bad" role="alert">Fix the highlighted fields and send again.</p>}
          {state === "success" && <p className="msg good" role="status">Your email app should open with the message ready. Press send there to finish.</p>}
          <button className="btn" type="submit">Send message</button>
        </form>
        <div className="card"><h3>Other ways to reach me</h3>
          <div className="row col"><a className="btn ghost" href={"mailto:" + profile.email}>Email me</a>
            <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub</a></div></div>
      </div>
    </section>
  );
}
