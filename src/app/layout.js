import { Montserrat, Roboto } from 'next/font/google';
import "./globals.css";
import "./fonts.css";

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
        <link rel="icon" href="/logo/icon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Helvetica:wght@400;700&display=swap" />
      </head>
      {/* <body className={roboto.className}>{children}</body> */}
      <body>{children}</body>
    </html>
  );
}
