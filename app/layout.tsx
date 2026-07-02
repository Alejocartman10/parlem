import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AuthProvider } from "@/lib/auth/AuthContext";
import { UserProgressProvider } from "@/lib/context/UserProgressContext";

export const metadata: Metadata = {
  title: "Parlem! · Aprèn català",
  description: "Aprèn català per viure i treballar a Catalunya.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ca">
      <body className="font-sans antialiased text-parlem-gray-900">
        <AuthProvider>
          <UserProgressProvider>{children}</UserProgressProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
