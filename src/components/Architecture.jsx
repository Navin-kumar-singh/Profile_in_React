import Flow from "./Flow";
import { arch } from "../data/technologies";
export default function Architecture() {
  return (
    <section id="architecture" className="wrap sec">
      <h2>Production architecture</h2>
      <div className="card arch">
        <Flow steps={arch} label="Production architecture" />
        <div className="side">
          <div><h4>Monitoring</h4><Flow steps={["Prometheus", "Grafana"]} horizontal /></div>
          <div><h4>Logs</h4><Flow steps={["Application", "CloudWatch / Cloud Logging"]} horizontal /></div>
        </div>
      </div>
    </section>
  );
}
