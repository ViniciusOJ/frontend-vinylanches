import type { AppProps } from "next/app";
import { GlobalStyle } from "@/styles/Global";

import { AuthProvider } from "../contexts/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AuthProvider>
  );
}
