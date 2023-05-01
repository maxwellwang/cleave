import Menu from "@/components/menu";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maxwell Wang Portfolio",
  description: "Maxwell Wang's side projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="night">
      <body className={inter.className}>
        <div className="flex">
          <div className="w-1/6 h-screen bg-neutral">
            <Menu />
          </div>
          <div className="w-5/6 bg-base-300">{children}</div>
        </div>
      </body>
    </html>
  );
}
