// app/layout.tsx

import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Brendan Coughlan | Researcher & Developer",
  description:
    "Brendan Coughlan is a computer science researcher and developer focused on artificial intelligence and machine learning, and the founder of Corvian Labs."
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
})
{
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Header/>
        {children}
      </body>
    </html>
  );
}