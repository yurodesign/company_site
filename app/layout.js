import "./globals.css";

export const metadata = {
  title: "YuroDesign - Premium Websites",
  description: "High-performance websites with zero upfront cost",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      {/* Fixed Hydration Warning */}
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}