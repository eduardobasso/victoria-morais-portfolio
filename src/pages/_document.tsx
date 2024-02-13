import { Head, Html, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={`A portfolio containing Victoria's work as a Designer. Victoria Morais Santos is a Designer with UX/UI and Product Design skills with more than 5 years of experience. She is currently working at Tangível and living in Porto, Portugal.`} />
        <meta name="keywords" content={`Portfolio, UX Design, UI Design, Product Design, UX Research`} />
        <meta name="author" content={`Victoria Morais Santos`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
