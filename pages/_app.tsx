import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Kanit } from "@next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: "200",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={kanit.className}>
      <Component {...pageProps} />
    </main>
  );
}
