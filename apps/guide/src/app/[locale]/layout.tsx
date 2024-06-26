import '@repo/ui/text-styles';
import '@repo/ui/globals';
import '@repo/ui/colors';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import Link from 'next/link';
import ThemeSelector from '@/components/ThemeSelector';
import NextThemeProvider from '@/lib/NextThemeProviders';

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <head>
        <meta
          name='naver-site-verification'
          content='5155226e8cbb4329fa802d28753a2934765c0f1b'
        />
      </head>
      <body>
        <NextThemeProvider>
          <nav>
            {/* <Link href={`/${locale}`}>Home</Link> */}
            {/* <LocaleSwitcher /> */}

            {/* 추후 라이트 색상 추가 시 추가 */}
            {/* <ThemeSelector /> */}
          </nav>
          {children}
        </NextThemeProvider>
      </body>
    </html>
  );
}
