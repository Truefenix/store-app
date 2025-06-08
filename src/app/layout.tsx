import ThemeProviderWrapper from '../components/ThemeProviderWrapper';
import { GlobalStyles } from '../style/global-styles';
import { metadata } from '../lib/seo-metadata';

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <link rel="icon" type="image/png" href="/favicon.png" />
      <body>
        <ThemeProviderWrapper>
          <GlobalStyles />
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
