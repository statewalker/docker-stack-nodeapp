import '@/styles/globals.css';
import { ColorSchemeProvider } from '@/ui/ColorSchemeContext'
import { MainNavigation } from "@/ui/MainNavigation";

export default function RootLayout({ children }: { children: any }) {
  return (
    <html>
      <head>
        <title>Next.js App Directory Playground</title>
      </head>
      <body>
        <ColorSchemeProvider>
          <MainNavigation />
          <div className="py-12">
            {children}
          </div>
        </ColorSchemeProvider>
      </body>
    </html>
  );
}
