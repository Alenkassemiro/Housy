import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="A simple Next.js starter template" />
        <link rel="icon" href="/favicon.png" />
        <title>
          Housy
        </title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
