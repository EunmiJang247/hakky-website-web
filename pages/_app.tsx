import '../styles/globals.css';
import type { AppProps } from 'next/app';
import MenusProvider from '../providers/menus';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <MenusProvider>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </MenusProvider>
  );
};

export default App;
