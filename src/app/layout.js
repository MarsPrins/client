import "@/styles/globals.scss";

export const metadata = {
  title: "BLANK.",
  description:
    "You know you can't wait so join the waitlist to find out right when it comes out.",
};

export const viewport = {
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=01",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
