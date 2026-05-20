import { render } from 'preact';
import App from './app';
import './index.css';
import { LanguageProvider } from './context/LanguageContext';

render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
  document.getElementById('root')!
);
