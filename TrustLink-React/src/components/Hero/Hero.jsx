import "./Hero.css";

function Hero({ onRunMatching, onViewResults }) {
  return (
    <section className="hero" id="product">
      <div className="floating-card region-card">
        <div className="card-header">
          <span>SOURCE RECORDS</span>
          <span>COUNT</span>
        </div>

        <div className="region-row">
          <span>S1 Records</span>
          <strong>12,480</strong>
        </div>
        <div className="region-row">
          <span>S2 Records</span>
          <strong>8,920</strong>
        </div>
        <div className="region-row">
          <span>S3 Records</span>
          <strong>6,410</strong>
        </div>
      </div>

      <div className="hero-content">
        <p className="eyebrow">ENTITY RESOLUTION · TRUSTLINK</p>

        <h1>
          Connect records with <em>confidence.</em>
        </h1>

        <p className="hero-text">
          TrustLink combines hybrid blocking, feature engineering,
          LightGBM scoring and cross-encoder reranking to identify
          reliable entity matches.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn" onClick={onRunMatching}>
            Run matching
          </button>

          <button className="secondary-btn" onClick={onViewResults}>
            View results
          </button>
        </div>
      </div>

      <div className="floating-card registration-card">
        <div className="mini-label">MATCH CONFIDENCE</div>
        <div className="metric">94.7%</div>
        <div className="delta">
          ↑ 6.4% <span>vs previous run</span>
        </div>

        <div className="mini-chart">
          <svg viewBox="0 0 240 80">
            <path d="M5 65 C30 60, 38 50, 55 54 C75 60, 82 32, 104 40 C125 47, 135 24, 150 29 C170 35, 182 17, 202 21 C218 25, 225 10, 235 13" />
          </svg>
        </div>
      </div>

      <div className="floating-card activation-card">
        <div className="mini-label">MATCHED ENTITIES</div>

        <div className="activation-content">
          <div>
            <div className="metric">7,842</div>
            <div className="delta">
              ↑ 12.8% <span>this run</span>
            </div>
          </div>

          <div className="circle-chart">
            <div className="circle-inner">82%</div>
          </div>
        </div>
      </div>

      <div className="composer-card">
        <div className="composer-top">
          <span>@</span>
          <span>Ask TrustLink about your matches…</span>
        </div>

        <div className="composer-bottom">
          <div className="composer-icons">
            <button onClick={onViewResults}>+</button>
            <button onClick={onViewResults}>ⓘ</button>
          </div>

          <button className="send-button" onClick={onViewResults}>
            ↑
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;