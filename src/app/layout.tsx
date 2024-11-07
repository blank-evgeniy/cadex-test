import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/widgets/Header/Header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./config/theme";

import "./globals.css";
import Footer from "@/components/widgets/Footer/Footer";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "Some Copmany",
  description: "Some Company is...",
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
              }}
            >
              <Header />
              <Box
                component="main"
                sx={{ flex: 1, backgroundColor: "background.default" }}
              >
                {children}
              </Box>
              <Footer />
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
