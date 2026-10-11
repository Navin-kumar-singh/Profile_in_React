"use client";
import { useState } from "react";
import { skills } from "../data/skills";
export default function Skills() {
  const [active, setActive] = useState(skills[0].title);
  const cur = skills.find((s) => s.title === active);
  return (
    <section id="skills" className="wrap sec">
      <h2>Skills</h2>
      <div className="tabs" role="tablist">
        {skills.map((s) => (
          <button key={s.title} role="tab" aria-selected={active === s.title} className={active === s.title ? "on" : ""} onClick={() => setActive(s.title)}>{s.title}</button>
        ))}
      </div>
      <div className="card chips" role="tabpanel">{cur.items.map((i) => (<span key={i} className="chip">{i}</span>))}</div>
    </section>
  );
}
