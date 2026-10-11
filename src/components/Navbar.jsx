"use client";
import { useState } from "react";
import { profile } from "../data/profile";
const links = [["about","About"],["skills","Skills"],["projects","Projects"],["devops","DevOps"],["cloud","Cloud"],["monitoring","Monitoring"],["experience","Experience"],["contact","Contact"]];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#top" className="brand">~/navin<span className="cur">_</span></a>
        <button className="burger" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>☰</button>
        <nav className={open ? "open" : ""} aria-label="Primary">
          {links.map(([id, t]) => (<a key={id} href={"#" + id} onClick={() => setOpen(false)}>{t}</a>))}
          <a className="btn sm" href={profile.resume} target="_blank" rel="noreferrer">Resume</a>
        </nav>
      </div>
    </header>
  );
}
