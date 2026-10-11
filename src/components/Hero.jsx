import { profile } from "../data/profile";
export default function Hero() {
  return (
    <section id="top" className="hero wrap">
      <div>
        <h1>{profile.name}</h1>
        <p className="role">Full Stack Developer · MERN · DevOps &amp; Cloud</p>
        <p className="lead">I build web applications from the React interface to the database, then containerize, automate and deploy them. {profile.experience} of development experience.</p>
        <div className="row">
          <a className="btn" href="#projects">View projects</a>
          <a className="btn ghost" href={profile.resume} download>Download resume</a>
          <a className="btn ghost" href="#contact">Contact me</a>
        </div>
      </div>
      <div className="term" aria-label="Terminal summary">
        <div className="term-bar"><i/><i/><i/><span>deploy.sh</span></div>
        <pre>{`$ git push origin main
✓ tests passed
✓ docker build -t app:latest .
✓ docker push registry/app:latest
$ docker compose up -d
frontend   running  :3000
backend    running  :5000
mongo      running  :27017
`}</pre>
      </div>
    </section>
  );
}
