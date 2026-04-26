import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Google Fonts
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

// Global reset
const style = document.createElement('style');
style.textContent = `* { margin: 0; padding: 0; box-sizing: border-box; } body { font-family: 'Inter', sans-serif; background: #fafafa; color: #0d2b12; }`;
document.head.appendChild(style);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);