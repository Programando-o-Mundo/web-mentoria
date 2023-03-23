import "@styles/globals.css";

export const metadata = {
  title: "Mentoria WebApp",
  description: "Aplicação Web para gerenciar a mentoria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
