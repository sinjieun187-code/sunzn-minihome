export const metadata = {
  title: "슨즌's 슬기로운 병동생활",
  description: "12주 병동일기",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
