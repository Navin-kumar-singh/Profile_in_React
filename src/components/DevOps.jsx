"use client";
import { useState, useEffect } from "react";
import Flow from "./Flow";
import { topics, pipeline } from "../data/technologies";
import { levels } from "../data/experience";

function Pipeline() {
  const [sel, setSel] = useState(0);
  const [run, setRun] = useState(false);
  useEffect(() => {
    if (!run) return;
    if (sel >= pipeline.length - 1) { setRun(false); return; }
    const t = setTimeout(() => setSel((s) => s + 1), 700);
    return () => clearTimeout(t);
  }, [run, sel]);
  return (
    <div className="card">
      <div className="between"><h3>CI/CD pipeline</h3>
        <button className="btn sm" onClick={() => { setSel(0); setRun(true); }} disabled={run}>{run ? "Running…" : "Run walkthrough"}</button></div>
      <ol className="steps">
        {pipeline.map(([n], i) => (
          <li key={n}><button className={(i === sel ? "on " : "") + (i < sel ? "done" : "")} onClick={() => { setRun(false); setSel(i); }}>{n}</button></li>
        ))}
      </ol>
      <p className="detail" aria-live="polite"><b>{pipeline[sel][0]}:</b> {pipeline[sel][1]}</p>
    </div>
  );
}

export default function DevOps() {
  const [id, setId] = useState(topics[0].id);
  const t = topics.find((x) => x.id === id);
  return (
    <section id="devops" className="wrap sec">
      <h2>DevOps &amp; infrastructure</h2>
      <p className="note">{levels.map((l) => l.label + " = " + l.text).join(". ")}.</p>
      <div className="tabs" role="tablist">
        {topics.map((x) => (<button key={x.id} role="tab" aria-selected={id === x.id} className={id === x.id ? "on" : ""} onClick={() => setId(x.id)}>{x.title}</button>))}
      </div>
      <div className="card" role="tabpanel">
        <div className="between"><h3>{t.title}</h3><span className={"badge " + t.level.toLowerCase()}>{t.level}</span></div>
        <p>{t.text}</p>
        <div className="chips">{t.items.map((i) => (<span key={i} className="chip">{i}</span>))}</div>
        {t.flow && (<><h4>{t.flowTitle}</h4><Flow steps={t.flow} horizontal label={t.flowTitle} /></>)}
      </div>
      <Pipeline />
    </section>
  );
}
