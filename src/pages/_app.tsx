import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "@/components/Other/Layout/Layout";
import Transition from "@/components/Other/Transition/Transition";

import "@/styles/globals.css";
import { Jost } from 'next/font/google'

const jost = Jost({
  weight: ['300', '400', '500', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
        <style jsx global>{`
            * {
              font-family: ${jost.style.fontFamily};
            }
          `}</style>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
