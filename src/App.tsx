import React from 'react';
import VLibras from '@djpfs/react-vlibras';
import Routers from './routes/routes';

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
