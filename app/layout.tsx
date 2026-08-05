import "./globals.css";

export const metadata = {
  title: "Baby Family Blog",
  description: "বাংলা শিশু ও পরিবার বিষয়ক ব্লগ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}
