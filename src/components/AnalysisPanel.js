import React from 'react';

const AnalysisPanel = ({ onCitationClick }) => {
  return (
    <div className="analysis-content">
      <h2 className="section-title">Analysis</h2>
      <p>
        No extraordinary or one-off items affecting EBITDA were reported in Maersk's Q2 2025 results.
        The report explicitly notes that EBITDA improvements stemmed from operational performance—including volume growth, cost control, and margin improvement across Ocean, Logistics & Services, and Terminals segments 
        <span className="citation" onClick={() => onCitationClick(1)}>[1]</span>
        <span className="citation" onClick={() => onCitationClick(2)}>[2]</span>. 
        Gains or losses from asset sales, which could qualify as extraordinary items, are shown separately under EBIT and not included in EBITDA. The gain on sale of non-current assets was USD 25 m in Q2 2025, significantly lower than USD 208 m in Q2 2024, but these affect EBIT, not EBITDA 
        <span className="citation" onClick={() => onCitationClick(3)}>[3]</span>. 
        Hence, Q2 2025 EBITDA reflects core operating activities without one-off extraordinary adjustments.
      </p>

      <div className="findings-section">
        <h3 className="section-title">Findings</h3>
        
        <div className="sub-section">
          <h4>Page 3 — Highlights Q2 2025</h4>
          <p>EBITDA increase (USD 2.3 bn vs USD 2.1 bn prior year) attributed to operational improvements; no mention of extraordinary or one-off items <span className="citation" onClick={() => onCitationClick(1)}>[1]</span></p>
        </div>
        
        <div className="sub-section">
          <h4>Page 5 — Review Q2 2025</h4>
          <p>EBITDA rise driven by higher revenue and cost control across all segments; no extraordinary gains or losses included. <span className="citation" onClick={() => onCitationClick(2)}>[2]</span></p>
        </div>
        
        <div className="sub-section">
          <h4>Page 15 — Condensed Income Statement</h4>
          <p>Gain on sale of non-current assets USD 25 m (vs USD 208 m prior year) reported separately below EBITDA; therefore, not part of EBITDA. <span className="citation" onClick={() => onCitationClick(3)}>[3]</span></p>
        </div>
      </div>

      <div className="evidence-section">
        <h3 className="section-title">Supporting Evidence</h3>
        
        <div className="sub-section">
          <p><strong>[1]</strong> A.P. Moller – Maersk Q2 2025 Interim Report (7 Aug 2025) — Page 3</p>
          <p><em>"Maersk's results continued to improve year-on-year … EBITDA of USD 2.3 bn (USD 2.1 bn) … driven by volume and other revenue growth in Ocean, margin improvements in Logistics & Services and significant top line growth in Terminals."</em></p>
        </div>
        
        <div className="sub-section">
          <p><strong>[2]</strong> A.P. Moller – Maersk Q2 2025 Interim Report (7 Aug 2025) — Page 5</p>
          <p><em>"EBITDA increased to USD 2.3 bn (USD 2.1 bn) … driven by higher revenue and cost management … Ocean's EBITDA … slightly increased by USD 36 m … Logistics & Services contributed significantly with a USD 71 m increase … Terminals' EBITDA increased by USD 50 m."</em></p>
        </div>
        
        <div className="sub-section">
          <p><strong>[3]</strong> A.P. Moller – Maersk Q2 2025 Interim Report (7 Aug 2025) — Page 15</p>
          <p><em>"Gain on sale of non-current assets, etc., net 25 (208) … Profit before depreciation, amortisation and impairment losses, etc. (EBITDA) 2,298"</em></p>
        </div>
      </div>
    </div>
  );
};

export default AnalysisPanel;