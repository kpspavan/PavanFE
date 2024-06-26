import Navbar from '../components/NavBar'
import { AnimatePresence } from "framer-motion";
import '../styles/globals.css';

import { Montserrat } from "next/font/google";
import { useRouter } from "next/router";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <main
      className={`${montserrat.variable} font-mont bg-light dark:bg-dark -full min-h-screen`}
    >
      <Navbar />
      <AnimatePresence mode="wait">
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
      
    </main>
  );
}
