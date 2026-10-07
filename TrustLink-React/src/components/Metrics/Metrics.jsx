import "./Metrics.css";
import { metrics } from "../../data/trustLinkData";

function Metrics() {
  return (
    <div className="metric-grid">
      {metrics.map((item) => (
        <div
          className={`metric-card ${item.peach ? "peach-metric" : ""}`}
          key={item.label}
        >
          <span className="category">{item.label}</span>
          <strong>{item.value}</strong>
          <span>{item.description}</span>
        </div>
      ))}
    </div>
  );
}

export default Metrics;