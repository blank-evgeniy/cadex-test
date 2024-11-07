import { Roboto } from "next/font/google";
import Header from "@/components/widgets/Header/Header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./config/theme";

import "./globals.css";
import Footer from "@/components/widgets/Footer/Footer";
import { Box } from "@mui/material";
import { Metadata } from "next";
import Background from "@/components/widgets/Background/Background";

export const metadata: Metadata = {
  title: "Some Copmany",
  description: "Some Company is...",
  keywords: ["company", "never gonna give you ap"],
  //Open Graph metadata
  openGraph: {
    title: "Some Copmany",
    description: "Some Company...",
    images: [
      {
        url: "https://images.unsplash.com/photo-1543946602-04a58819ec2c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    type: "website",
  },
  //Twitter metadata
  twitter: {
    title: "Some Copmany",
    description: "Some Company...",
    images: [
      {
        url: "https://images.unsplash.com/photo-1543946602-04a58819ec2c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Header />
            <Box component="main" sx={{ flex: 1 }}>
              {children}
            </Box>
            <Footer />
            <Background />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
