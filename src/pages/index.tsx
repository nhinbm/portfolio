import { Inter } from "next/font/google";
import { HomPage } from "@/components";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Nhi's Portfolio</title>
      </Head>

      <main className={inter.className}>
        <HomPage />
      </main>
    </>
  );
}
