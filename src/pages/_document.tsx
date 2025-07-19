import { Head, Html, Main, NextScript } from 'next/document';
import type { FC } from 'react';

const Document: FC = () => (
  <Html lang="en">
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="A portfolio containing Victoria's work as a Designer. Victoria Morais Santos is a Designer with UX/UI and Accessibility skills with focus on delivering the best solutions for business and user needs. She is currently working at Tangível and living in Porto, Portugal."
      />
      <meta
        name="keywords"
        content="Portfolio, UX Design, UI Design, Product Design, UX Research, Usability, Accessibility"
      />
      <meta name="author" content="Victoria Morais Santos" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
