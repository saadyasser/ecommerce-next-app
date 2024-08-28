// _document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>{/* Any head tags go here */}</Head>
      <body className={`bg-rose-50`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
