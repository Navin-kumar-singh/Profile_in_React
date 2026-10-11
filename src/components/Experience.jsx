import { experience, highlights } from "../data/experience";
export default function Experience() {
  return (
    <section id="experience" className="wrap sec">
      <h2>Experience</h2>
      <div className="two">
        <div>{experience.map((e) => (
          <div key={e.role} className="card"><h3>{e.role}</h3><p className="sub">{e.company} · {e.period}</p>
            <ul className="ticks one">{e.points.map((p) => (<li key={p}>{p}</li>))}</ul></div>))}</div>
        <div className="card"><h3>What I work on</h3><div className="chips">{highlights.map((h) => (<span key={h} className="chip">{h}</span>))}</div></div>
      </div>
    </section>
  );
}
