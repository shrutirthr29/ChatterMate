import "@/styles/globals.css";
import { StateProvider } from "@/context/StateContext"
import reducer, { initialState } from "@/context/StateReducers.js";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Head>
        <title>ChatterMate</title>
        <link rel="shortcut icon" href="/chattermate_favicon.png" />
      </Head>
      <Component {...pageProps} />;
    </StateProvider>
  )
}
