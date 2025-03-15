import type { Metadata } from 'next';
import { Inter, Raleway, Racing_Sans_One } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'vietnamese'] });
const raleway = Raleway({ 
  variable: '--font-raleway',
  subsets: ['latin', 'vietnamese'] });
const racingSansOne = Racing_Sans_One({
  variable: '--font-racing-sans-one',
  weight: "400",
  subsets: ['latin', 'latin-ext'] });

export const metadata: Metadata = {
  title: 'FOSO - Cập Nhật Tin Tức Mới Nhất',
  description: 'Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className="mdl-js">
      <body className={`${inter.className}  ${raleway.className} `}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}