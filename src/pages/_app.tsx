import { GlobalStyle } from '$/styles/global';
import { themes } from '$/styles/themes';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

import '$/styles/fonts.css';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />

      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default App;
