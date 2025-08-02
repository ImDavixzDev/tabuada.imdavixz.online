import "./globals.css";

export const metadata = {
  title: "Verificador Tabuada",
  description: "Verificador Tabuada",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
