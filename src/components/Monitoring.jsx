"use client";
import { useState } from "react";
import { monitoringTopics } from "../data/technologies";
// DEMO DATA ONLY — not connected to any real server.
const metrics = [["CPU usage", 42, "%"], ["Memory usage", 61, "%"], ["Disk usage", 55, "%"]];
const numbers = [["Request rate", "120 req/s"], ["Response time", "180 ms"], ["Error rate", "0.4 %"]];
const containers = [["frontend", "Running"], ["backend", "Running"], ["mongo", "Running"]];
const pods = [["frontend-7d9", "Running"], ["backend-5c2", "Running"], ["backend-8f1", "Running"]];
const deploys = [["Build #128", "Passed"], ["Deploy to staging", "Passed"], ["Deploy to production", "Waiting"]];
export default function Monitoring() {
  const keys = Object.keys(monitoringTopics);
  const [k, setK] = useState(keys[0]);
  const list = (title, rows) => (
    <div className="card"><h4>{title}</h4>
      <ul className="status">{rows.map(([n, s]) => (<li key={n}><span>{n}</span><span className={"dot " + (s === "Waiting" ? "wait" : "ok")}>{s}</span></li>))}</ul></div>
  );
  return (
    <section id="monitoring" className="wrap sec">
      <h2>Monitoring &amp; observability</h2>
      <div className="tabs" role="tablist">{keys.map((x) => (<button key={x} role="tab" aria-selected={k === x} className={k === x ? "on" : ""} onClick={() => setK(x)}>{x}</button>))}</div>
      <div className="card chips" role="tabpanel">{monitoringTopics[k].map((i) => (<span key={i} className="chip">{i}</span>))}</div>
      <div className="demo">
        <p className="banner">DEMO DATA — static placeholder values, not a live system.</p>
        <div className="grid3">
          {metrics.map(([n, v, u]) => (
            <div key={n} className="card"><div className="between"><h4>{n}</h4><b>{v}{u}</b></div>
              <div className="bar" role="progressbar" aria-valuenow={v} aria-valuemin={0} aria-valuemax={100} aria-label={n}><i style={{ width: v + "%" }} /></div></div>
          ))}
          {numbers.map(([n, v]) => (<div key={n} className="card"><h4>{n}</h4><b className="big">{v}</b></div>))}
          {list("Docker containers", containers)}
          {list("Kubernetes pods", pods)}
          {list("CI/CD & deployment", deploys)}
        </div>
      </div>
    </section>
  );
}
