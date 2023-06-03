import "@/style/globals.css";
import { Roboto_Slab } from 'next/font/google';

export const metadata = {
  title: "Mentoria WebApp",
  description: "Aplicação Web para gerenciar a mentoria"
};

const roboto = Roboto_Slab({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin-ext'],
  style: 'normal',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
