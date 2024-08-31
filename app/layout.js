import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Invitaciones",
  description: "Boda de José & Mireya",
  openGraph: {
    title: "Boda de José & Mireya",
    description:
      "¡Nos casamos! Y es imprescindible que formes parte del enlace que estamos organizando.",
    image: "/opengraph_image.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
