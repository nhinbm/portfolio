import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/project-imgs/logo.png" />
      </Head>

      <body id="root" className="bg-background text-foreground">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
