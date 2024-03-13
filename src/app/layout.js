import { Montserrat, Roboto } from 'next/font/google';
import "./globals.css";
import "./fonts.css";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Analytics } from "@vercel/analytics/react"

const montserrat = Montserrat({ subsets: ['latin'] });
const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin']
});

export const metadata = {
  title: "Try Toronto's Best House Cleaners | Ebenezer Cleaning Services - Toronto",
  description: "Find a house cleaner near you now. Book a one-off, weekly or fortnightly home clean. Toronto's best domestic cleaning service.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Helvetica:wght@400;700&display=swap" />
      </head>
      {/* <body className={roboto.className}>{children}</body> */}
      <UserProvider>
        <body>
          {children}
          <Analytics />
          <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/65f13ce09131ed19d979541d/1hor5bjjc';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
        </body>
      </UserProvider>
    </html>
  );
}
