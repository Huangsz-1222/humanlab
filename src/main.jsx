import { createRoot } from 'react-dom/client';
import { LangProvider } from './i18n.jsx';
import App from './App.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <LangProvider>
    <App />
  </LangProvider>
);
