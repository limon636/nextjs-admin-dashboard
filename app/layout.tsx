import "./globals.css";

export const metadata = {
  title: "Medisell App",
  description:
    "Medisell app with most popular medical e-commerce in the world. IN_SHA_ALLAH",
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
