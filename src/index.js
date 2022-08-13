import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import Background from './components/Background';
import Toggle from './components/ThemeToggle';
import { ThemeProvider } from './components/ThemeContext';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
      <ThemeProvider>
        <Background>
          <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
            <Toggle />
          </div>
        <App />
        </Background>
    </ThemeProvider>,
  </React.StrictMode>,
);

