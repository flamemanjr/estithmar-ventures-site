import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'

// Add debugging for app initialization
console.log('Main.tsx: Starting app initialization');

// Ensure the root element exists
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error('Main.tsx: Root element not found!');
  document.body.innerHTML = `
    <div style="padding: 2rem; text-align: center; font-family: system-ui;">
      <h1>Loading Error</h1>
      <p>Unable to find app container. Please refresh the page.</p>
      <button onclick="window.location.reload()" style="padding: 0.5rem 1rem; margin-top: 1rem;">
        Reload Page
      </button>
    </div>
  `;
} else {
  console.log('Main.tsx: Root element found, creating React app');
  
  try {
    const root = createRoot(rootElement);
    root.render(
      <HelmetProvider>
        <App />
      </HelmetProvider>
    );
    console.log('Main.tsx: React app rendered successfully');
  } catch (error) {
    console.error('Main.tsx: Error rendering React app:', error);
    rootElement.innerHTML = `
      <div style="padding: 2rem; text-align: center; font-family: system-ui;">
        <h1>Initialization Error</h1>
        <p>Failed to start the application. Please check the console for details.</p>
        <button onclick="window.location.reload()" style="padding: 0.5rem 1rem; margin-top: 1rem;">
          Reload Page
        </button>
      </div>
    `;
  }
}
