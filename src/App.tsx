import React from 'react';
import VLibras from '@djpfs/react-vlibras';
import Routers from './routes/routes';

export interface AppProps {}

export const App: React.FC<AppProps> = (): JSX.Element => {
  return (
    <>
      <VLibras />
      <React.StrictMode>
        <Routers />
      </React.StrictMode>
    </>
  );
};

export default App;
