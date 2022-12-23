import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ExhibCategoriesProvider from '../providers/exhib-categories';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ExhibCategoriesProvider>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ExhibCategoriesProvider>
  );
};

export default App;
