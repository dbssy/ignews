import { SessionProvider as NextAuthProvider } from 'next-auth/react';

import '../styles/global.scss';

import { Header } from '../components/Header';

export default function MyApp({ Component,  pageProps: { session, ...pageProps} }) {
  return (
    <NextAuthProvider session={session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}