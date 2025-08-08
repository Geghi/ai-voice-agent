import { headers } from 'next/headers';
import { getAppConfig } from '@/lib/utils';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default async function AppLayout({ children }: AppLayoutProps) {
  const hdrs = await headers();
  const { companyName, logo, logoDark } = await getAppConfig(hdrs);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 hidden w-full flex-row justify-between bg-white/5 p-6 backdrop-blur-sm md:flex">
        <span className="text-foreground font-mono text-xs font-bold tracking-wider uppercase">
          Let&apos;s Chat{' '}
        </span>
        <span className="text-foreground font-mono text-xs font-bold tracking-wider uppercase">
          Made By{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://mantovani-giacomo.com"
            className="underline underline-offset-4"
          >
            Giacomo Mantovani
          </a>
        </span>
      </header>
      <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-br from-black/40 to-black/60"></div>
      {children}
    </>
  );
}
