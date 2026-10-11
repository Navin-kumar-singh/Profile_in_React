import { projects } from "../data/projects";
export default function Projects() {
  return (
    <section id="projects" className="wrap sec">
      <h2>Projects</h2>
      <div className="grid2">
        {projects.map((p) => (
          <article key={p.name} className="card proj">
            <div className="shot" role="img" aria-label={p.name + " screenshot placeholder"}>
              {p.image ? <img src={p.image} alt={p.name + " screenshot"} loading="lazy" /> : <span>Screenshot placeholder</span>}
            </div>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p className="sub"><b>Problem solved:</b> {p.problem}</p>
            <p className="sub"><b>Architecture:</b> {p.architecture}</p>
            <div className="chips">{p.stack.map((s) => (<span key={s} className="chip">{s}</span>))}</div>
            <ul className="ticks">{p.features.map((f) => (<li key={f}>{f}</li>))}</ul>
            <p className="sub"><b>Deployment:</b> {p.deploy}</p>
            <div className="row"><a className="btn sm" href={p.github}>GitHub</a><a className="btn sm ghost" href={p.demo}>Live demo</a></div>
          </article>
        ))}
      </div>
    </section>
  );
}
