import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Asegúrate de tener un archivo App.js en la misma carpeta

// Busca el elemento contenedor en tu HTML (normalmente public/index.html)
const container = document.getElementById('root');

// Crea la raíz de React e inicializa la aplicación
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);