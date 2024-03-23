import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "../../components/SessionWrapper";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "INS Microproject",
  description: "made by dev patel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
      <body className={inter.className}>{children}</body>
      </SessionWrapper>
    </html>
  );
}
