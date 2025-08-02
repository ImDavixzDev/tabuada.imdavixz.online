import "./globals.css";


export const metadata = {
  title: "Verificador Tabuada",
  description: "Verificador Tabuada",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
