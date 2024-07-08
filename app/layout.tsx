import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calculteur d'IMC",
  description: "Calcul imc en fonction de l'age et du sexe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className='flex flex-col justify-center items-center max-w-7xl min-h-dvh m-auto'>
        {children}
      </body>
    </html>
  );
}
