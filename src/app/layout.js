import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ClerkProvider, ClerkLoaded , ClerkLoading} from "@clerk/nextjs";
import Loader from './components/Loader';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TestCube",
  description: "An automated testcase generation tool",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkLoading>
            <Loader />
        </ClerkLoading>
        <Header />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
