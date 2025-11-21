import React, { useState } from 'react';
import PdfViewer from './components/PdfViewer';
import AnalysisPanel from './components/AnalysisPanel';
import './index.css';

function App() {
  const [highlightTarget, setHighlightTarget] = useState(null);

  const handleCitationClick = (citationNumber) => {
    if (citationNumber === 3) {
      setHighlightTarget('gain-on-sale');
      
      // Auto-clear highlight after 3 seconds
      setTimeout(() => {
        setHighlightTarget(null);
      }, 3000);
    }
  };

  return (
    <div className="app">
      <div className="app-container">
        <div className="pdf-section">
          <PdfViewer highlightTarget={highlightTarget} />
        </div>
        <div className="analysis-section">
          <AnalysisPanel onCitationClick={handleCitationClick} />
        </div>
      </div>
    </div>
  );
}

export default App;