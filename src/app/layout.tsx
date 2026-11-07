import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { MathModal } from '@/components/manifesto/MathModal';

export const metadata: Metadata = {
  title: 'PerkPilot AU | The Honest Australian Banking & Perks Aggregator',
  description: 'Pure financial math dictates every ranking. Compare cards, eGift card discounts, cashbacks, and high-interest savings accounts in Australia with zero affiliate bias.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <body className="min-h-screen flex flex-col bg-background text-stone-900 antialiased selection:bg-emerald-500 selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-700 focus:text-white focus:rounded-xl focus:shadow-lg focus:font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 transition-all"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 focus:outline-none">
          {children}
        </main>
        <MathModal />

        <footer className="border-t border-stone-200 bg-white py-8 text-xs text-stone-500 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-stone-900">PerkPilot AU</span>
              <span>•</span>
              <span>Pure math. Zero affiliate bias. Free.</span>
            </div>
            <div className="text-center md:text-right text-[11px] text-stone-400">
              Information provided for general educational comparison only. Not personal financial product advice.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
