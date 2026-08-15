import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FavoritoProvider from './contexts/Favorito';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Link acessível invisível que aparece no primeiro TAB para pular a navegação */}
    <a href="#main-content" className="skip-link">
      Saltar para o conteúdo principal
    </a>

    <FavoritoProvider>
      <App />
    </FavoritoProvider>
  </React.StrictMode>
);
