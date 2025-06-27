import "./globals.css";
import { Fira_Sans } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "ULA Website",
  description:
    "Improving the learning experience of students in core CS courses!",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={firaSans.className}>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
