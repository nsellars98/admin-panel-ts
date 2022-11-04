import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useState } from 'react';
import Enter from './auth/enter';

const AUTH = auth;

export default function App({ Component, pageProps }: AppProps) {

  const [authState, setAuth] = useState(false);

  // Check status of FB User
  onAuthStateChanged(AUTH, (user) => {
    if (user) {
      const uid = user.uid;
      setAuth(true);
      console.log(uid)
    } else {
      setAuth(false);
    }
  });

  if (!authState) {
    return (
      <div>
        <Enter />
      </div>
    )
  }

  return (
    <Layout state={authState}>
      <Component {...pageProps} />
    </Layout>
  )
}
