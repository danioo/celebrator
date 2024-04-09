import '@mantine/core/styles.css';

import type { Metadata } from "next";
import { AppShell, AppShellFooter, AppShellMain, AppShellNavbar, ColorSchemeScript, MantineProvider } from '@mantine/core';
import Navbar from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';

export const metadata: Metadata = {
  title: "Celebrator",
  description: "Plan your celebration with ease",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <AppShell navbar={{ width: 300, breakpoint: 'sm'}}>
            <AppShellNavbar>
              <Navbar />
            </AppShellNavbar>
            <AppShellMain>
              {children}
            </AppShellMain>
            <AppShellFooter>
              <Footer />
            </AppShellFooter>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
