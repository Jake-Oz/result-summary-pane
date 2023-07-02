import "./globals.css";
import { Hanken_Grotesk } from "next/font/google";

const hanken = Hanken_Grotesk({
  weight: ["500", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Results Summary",
  description: "Frontend Mentor Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={hanken.className}>{children}</body>
    </html>
  );
}
