import React from 'react';
import VLibras from '@djpfs/react-vlibras';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <VLibras />

      <header>
        <h1>Teste</h1>
      </header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </>
  );
}

export default App;
