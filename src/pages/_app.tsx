import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "@/components/Other/Layout/Layout";
import Transition from "@/components/Other/Transition/Transition";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />;
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
