import { profile } from "../data/profile";
export default function About() {
  const rows = [["Role", "Full Stack / MERN Developer"], ["Experience", profile.experience], ["Education", profile.education], ["Location", profile.location]];
  return (
    <section id="about" className="wrap sec">
      <h2>About</h2>
      <div className="two">
        <p>I am a full stack developer who works across Next.js and React interfaces, Node.js and Express APIs, and MongoDB or MySQL databases. I am also building DevOps and cloud skills: Docker, CI/CD, Linux servers, Nginx, Kubernetes, AWS and GCP.</p>
        <dl className="facts">{rows.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}</dl>
      </div>
    </section>
  );
}
