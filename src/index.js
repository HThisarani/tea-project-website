import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Google Fonts
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=DM+Sans:wght@300;400;500&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

// Global reset
const style = document.createElement('style');
style.textContent = `* { margin: 0; padding: 0; box-sizing: border-box; } body { font-family: 'DM Sans', sans-serif; background: #fff; color: #0d2b12; }`;
document.head.appendChild(style);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);