import "./globals.css";

export const metadata = {
  title: "SMC Backtester",
  description: "Smart Money Concepts backtesting platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
  }
