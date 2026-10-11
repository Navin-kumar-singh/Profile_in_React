import { profile } from "../data/profile";
export default function GitHub() {
  return (
    <section id="github" className="wrap sec">
      <h2>Code &amp; resume</h2>
      <div className="grid2">
        <div className="card"><h3>GitHub</h3><p>Source code for my projects lives on GitHub.</p><a className="btn sm" href={profile.github} target="_blank" rel="noreferrer">Open GitHub</a></div>
        <div className="card"><h3>Resume</h3><p>Full Stack · MERN · Next.js · Node.js · MongoDB · Docker · Kubernetes · AWS · GCP · CI/CD · Monitoring</p>
          <div className="row"><a className="btn sm" href={profile.resume} target="_blank" rel="noreferrer">View resume</a><a className="btn sm ghost" href={profile.resume} download>Download resume</a></div></div>
      </div>
    </section>
  );
}
