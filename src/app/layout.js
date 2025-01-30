import "./globals.css";

export const metadata = {
  title: "Practice App",
  description: "This is NextJS app for Practice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
