import Flow from "./Flow";
import { aws, gcp, awsUses, gcpFlow } from "../data/technologies";
export default function Cloud() {
  return (
    <section id="cloud" className="wrap sec">
      <h2>Cloud &amp; infrastructure</h2>
      <p className="note">AWS and GCP are skills I am learning. No production cloud experience is claimed.</p>
      <div className="grid2">
        <div className="card"><div className="between"><h3>AWS</h3><span className="badge learning">Learning</span></div>
          <div className="chips">{aws.map((i) => (<span key={i} className="chip">{i}</span>))}</div>
          <h4>EC2 can host</h4><div className="chips">{awsUses.map((i) => (<span key={i} className="chip alt">{i}</span>))}</div></div>
        <div className="card"><div className="between"><h3>Google Cloud</h3><span className="badge learning">Learning</span></div>
          <div className="chips">{gcp.map((i) => (<span key={i} className="chip">{i}</span>))}</div>
          <h4>Request path</h4><Flow steps={gcpFlow} horizontal label="GCP architecture" /></div>
      </div>
    </section>
  );
}
