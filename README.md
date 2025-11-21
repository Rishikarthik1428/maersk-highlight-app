# Maersk Q2 2025 Financial Analysis

An interactive React web application for analyzing Maersk's Q2 2025 financial results with citation highlighting functionality.

## 🌟 Features

- **Split-screen Layout**: PDF-style financial statements on the left, analysis panel on the right
- **Interactive Citations**: Click on reference numbers [1], [2], [3] to navigate to relevant sections
- **Smart Highlighting**: Automatic highlighting of "Gain on sale of non-current assets, etc" when clicking [3]
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Smooth Animations**: Elegant highlighting with auto-fade effects

## 🚀 Live Demo

**[View Live Application](https://rishikarthik1428.github.io/maersk-highlight-app/)**

## 📋 Project Overview

This application recreates the financial analysis interface from the Maersk case study, featuring:

- **Left Panel**: Condensed income statement and financial data from Maersk's Q2 2025 report
- **Right Panel**: Detailed analysis with interactive citations
- **Highlight Functionality**: Clicking citation [3] highlights the relevant financial line item

## 🛠️ Technology Stack

- **Frontend**: React 18.2.0
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages
- **Styling**: CSS3 with modern flexbox layout

## 📁 Project Structure

```
maersk-highlight-app/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── PdfViewer.js          # Financial statement display
│   │   └── AnalysisPanel.js      # Analysis with interactive citations
│   ├── data/
│   │   └── maerskData.js         # Financial data and configurations
│   ├── styles/
│   │   └── App.css              # Main styling
│   ├── App.js                   # Root component
│   └── index.js                 # Application entry point
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rishikarthik1428/maersk-highlight-app.git
   cd maersk-highlight-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000)

4. **Build for production**
   ```bash
   npm run build
   ```

The live application is available at:  
[https://rishikarthik1428.github.io/maersk-highlight-app](https://rishikarthik1428.github.io/maersk-highlight-app)

## 🔧 Available Scripts

- `npm start` - Runs development server
- `npm run build` - Creates production build
- `npm test` - Runs test suite
- `npm run deploy` - Deploys to GitHub Pages
- `npm run predeploy` - Automatic pre-deployment build

## 📝 Case Study Objective

This application fulfills the case study requirement:
> "On click of [3] the 'Gain on sale of non-current assets, etc' in the PDF should get highlighted in yellow color"



## 📄 License

This project is created for educational and demonstration purposes as part of a case study.
