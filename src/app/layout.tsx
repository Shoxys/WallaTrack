import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WallaTrack',
  description: 'See how each purchase moves your savings goal date. Demo with fictional data.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#DA1710',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" data-brand="wbc" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
