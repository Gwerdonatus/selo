import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "./lib/CartContext";

export const metadata: Metadata = {
  title: "selo accessories",
  description: "selo accessories - Handmade in Lagos, Nigeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
