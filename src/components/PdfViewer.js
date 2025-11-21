import React, { useEffect, useRef } from 'react';
import { financialData } from '../data/maerskData';

const PdfViewer = ({ highlightTarget }) => {
  const highlightedRowRef = useRef(null);

  useEffect(() => {
    if (highlightTarget && highlightedRowRef.current) {
      highlightedRowRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
  }, [highlightTarget]);

  return (
    <div className="pdf-content">
      <h1>Financials</h1>
      <h2>Condensed Income Statement</h2>
      
      <table className="financial-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Q2 2025</th>
            <th>Q2 2024</th>
            <th>6M 2025</th>
            <th>6M 2024</th>
            <th>12M 2024</th>
          </tr>
        </thead>
        <tbody>
          {financialData.map((row, index) => {
            const isHighlighted = highlightTarget === row.id;
            return (
              <tr 
                key={index}
                ref={isHighlighted ? highlightedRowRef : null}
                className={isHighlighted ? 'highlighted' : ''}
              >
                <td>{row.description}</td>
                <td>{row.q2_2025}</td>
                <td>{row.q2_2024}</td>
                <td>{row.m6_2025}</td>
                <td>{row.m6_2024}</td>
                <td>{row.m12_2024}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Condensed Statement of Comprehensive Income</h3>
        <p>Profit for the period: 639</p>
        <p>Translation from functional currency to presentation currency: 552</p>
        <p>Restricted to income statement, gain on sale of non-current assets, etc., net: 185</p>
        <p>Cash flow hedges: -5</p>
        <p>Tax on other comprehensive income: 15</p>
        <p>Share of other comprehensive income of joint ventures and associated companies, net of tax: 705</p>
      </div>
    </div>
  );
};

export default PdfViewer;