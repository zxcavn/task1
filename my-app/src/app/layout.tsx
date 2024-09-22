'use client';

import localFont from "next/font/local";
import FooterComponent from "../../components/footer";
import "./styles/ui.css";
import "./styles/pets.css";
import "./styles/footer.css";
import "./styles/donat.css";
import "./styles/help.css";
import "./styles/notOnly.css";
import "./styles/about.css";
import "./styles/header.css";
import "./styles/friends.css";
import Header from "../../components/header"



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
    <body>
      <Header/>
      {children}
      <FooterComponent/>
    </body>
  </html>
  );

}
