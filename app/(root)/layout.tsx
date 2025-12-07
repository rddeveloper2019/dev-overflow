import Navbar from '@/components/navigation/navbar';
import { ReactNode } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
