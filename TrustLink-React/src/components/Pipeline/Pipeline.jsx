import "./Pipeline.css";
import { pipelineSteps } from "../../data/trustlinkData";

function Pipeline({ status, running, completed }) {
  return (
    <div className="pipeline-wrapper">
      <div className="dashboard-heading">
        <div>
          <p className="eyebrow">TRUSTLINK ENGINE</p>
          <h2>
            Matching, <em>step by step.</em>
          </h2>
        </div>

        <div className="run-status">
          <span
            className={`status-dot ${
              running ? "running" : completed ? "complete" : ""
            }`}
          />
          <span>{status}</span>
        </div>
      </div>

      <div className="pipeline-card">
        <div className="pipeline-top">
          <div>
            <span className="category">HYBRID CASCADE</span>
            <h3>Entity resolution pipeline</h3>
          </div>

          <span className="pipeline-version">v1.0</span>
        </div>

        <div className="pipeline">
          {pipelineSteps.map(([number, title, detail], index) => (
            <div className="pipeline-group" key={number}>
              <div className="pipeline-step active">
                <div className="step-number">{number}</div>
                <strong>{title}</strong>
                <span>{detail}</span>
              </div>

              {index < pipelineSteps.length - 1 && (
                <div className="pipeline-line" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pipeline;