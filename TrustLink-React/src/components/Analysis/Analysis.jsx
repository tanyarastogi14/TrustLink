import "./Analysis.css";

function Analysis() {
  return (
    <div className="analysis-grid">
      <div className="analysis-card">
        <div className="analysis-header">
          <div>
            <span className="category">SCORE DISTRIBUTION</span>
            <h3>Match confidence</h3>
          </div>
          <span className="small-note">0 — 1</span>
        </div>

        <div className="score-chart">
          <ScoreBar label="0.0–0.5" width="18%" value="1,482" type="low" />
          <ScoreBar label="0.5–0.7" width="29%" value="2,164" type="medium" />
          <ScoreBar label="0.7–0.9" width="64%" value="5,982" type="high" />
          <ScoreBar label="0.9–1.0" width="91%" value="7,842" type="highest" />
        </div>

        <div className="threshold-line">
          <span>Matching threshold</span>
          <strong>0.80</strong>
        </div>
      </div>

      <div className="analysis-card">
        <div className="analysis-header">
          <div>
            <span className="category">ENTITY GRAPH</span>
            <h3>Weighted connections</h3>
          </div>
          <span className="small-note">Live</span>
        </div>

        <div className="entity-graph">
          <div className="graph-node source-node">
            <span>S1</span>
            <small>Customer</small>
          </div>

          <div className="graph-connection connection-one">
            <span>0.97</span>
          </div>

          <div className="graph-node target-node target-one">
            <span>S2</span>
            <small>Target</small>
          </div>

          <div className="graph-connection connection-two">
            <span>0.89</span>
          </div>

          <div className="graph-node target-node target-two">
            <span>S3</span>
            <small>Target</small>
          </div>
        </div>

        <div className="graph-caption">
          <span>Weighted edge</span>
          <strong>S1 → S2</strong>
          <span>Match score: 0.97</span>
        </div>
      </div>
    </div>
  );
}

function ScoreBar({ label, width, value, type }) {
  return (
    <div className="bar-row">
      <span>{label}</span>

      <div className="bar-track">
        <div className={`bar ${type}`} style={{ width }} />
      </div>

      <strong>{value}</strong>
    </div>
  );
}

export default Analysis;