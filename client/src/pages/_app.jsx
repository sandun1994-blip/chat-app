import { StateProvider } from "@/context/StateContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
  
  <StateProvider initialState={initialState} reducer={reducer}>
    <Head><title>Whatssap</title></Head>
    <link rel="shortcut icon" href="/favicon.png"/>
  <Component {...pageProps} />
  </StateProvider>
  );
}
