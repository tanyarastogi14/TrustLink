import { useState } from "react";
import "./Results.css";
import { matchRows } from "../../data/trustLinkData";

function Results() {
  const [filter, setFilter] = useState("all");

  const visibleRows =
    filter === "all"
      ? matchRows
      : matchRows.filter((row) => row.type === filter);

  return (
    <section className="results-section" id="results">
      <div className="results-heading">
        <div>
          <p className="eyebrow">OUTPUT</p>

          <h2>
            Weighted <em>matches.</em>
          </h2>

          <p>
            The final matching stage produces weighted edges that can be
            passed to clustering and golden-record generation.
          </p>
        </div>

        <div className="filter-buttons">
          {["all", "high", "uncertain"].map((item) => (
            <button
              key={item}
              className={`filter ${filter === item ? "active" : ""}`}
              onClick={() => setFilter(item)}
            >
              {item === "all"
                ? "All"
                : item === "high"
                ? "High confidence"
                : "Uncertain"}
            </button>
          ))}
        </div>
      </div>

      <div className="match-table-card">
        <div className="table-header">
          <span>S1 ID</span>
          <span>TARGET ID</span>
          <span>MATCH SCORE</span>
          <span>DECISION</span>
        </div>

        {visibleRows.map((row) => (
          <div className="match-row" key={`${row.source}-${row.target}`}>
            <span>{row.source}</span>
            <span>{row.target}</span>
            <strong>{row.score}</strong>

            <span
              className={`decision ${
                row.type === "high"
                  ? "high-decision"
                  : "uncertain-decision"
              }`}
            >
              {row.decision}
            </span>
          </div>
        ))}
      </div>

      <div className="next-stage">
        <div>
          <span className="category">NEXT STAGE</span>

          <h3>From matches to trusted entities.</h3>

          <p>
            Weighted edges feed the clustering layer, followed by
            golden-record creation and fraud detection.
          </p>
        </div>

        <div className="next-flow">
          <span>Weighted Edges</span>
          <b>→</b>
          <span>Clustering</span>
          <b>→</b>
          <span>Golden Record</span>
          <b>→</b>
          <span>Fraud Detection</span>
        </div>
      </div>
    </section>
  );
}

export default Results;