import { Head, Html, Main, NextScript } from 'next/document';

function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="description"
                    content={`A portfolio containing Victoria's work as a Designer. Victoria Morais Santos is a Designer with UX/UI and Accessibility skills with focus on delivering the best solutions for business and user needs. She is currently working at Tangível and living in Porto, Portugal.`}
                />
                <meta
                    name="keywords"
                    content={`Portfolio, UX Design, UI Design, Product Design, UX Research, Usability, Accessibility`}
                />
                <meta name="author" content={`Victoria Morais Santos`} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

export default Document;
