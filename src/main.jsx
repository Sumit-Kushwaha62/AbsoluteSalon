import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import './index.css';
import App from './App.jsx';

const PRELOAD_RELOAD_KEY = 'absolute-salon-preload-reload';

window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault();

  try {
    const lastReload = Number(sessionStorage.getItem(PRELOAD_RELOAD_KEY) || 0);
    if (Date.now() - lastReload < 10_000) return;
    sessionStorage.setItem(PRELOAD_RELOAD_KEY, String(Date.now()));
  } catch {
    // Reload still works when session storage is unavailable.
  }

  window.location.reload();
});
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
