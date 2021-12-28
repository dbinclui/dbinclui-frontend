import React from 'react';
import VLibras from '@djpfs/react-vlibras';
import Routers from './routes/routes';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <VLibras />
      <React.StrictMode>
        <Routers />
      </React.StrictMode>
    </>
  );
}

export default App;
