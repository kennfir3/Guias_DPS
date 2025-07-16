"use client";

import { Provider } from 'react-redux';  // Corregido el paréntesis en el import
import store from '../redux/store';
import Navbar from '../components/Navbar';
import '../styles/global.css';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Provider store={store}>  {/* Corregido el uso de paréntesis y asignación */}
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
