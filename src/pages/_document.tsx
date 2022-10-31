import type { NextPage } from 'next';
import { Head, Html, Main, NextScript } from 'next/document';

const _document: NextPage = () => {
  return (
    <Html lang="pt-BR">
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FLVVPR3E70"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FLVVPR3E70');
        `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700;900&family=Square+Peg&display=swap"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          href="https://cdn-icons-png.flaticon.com/512/458/458910.png"
          type="image/png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default _document;
