"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const mainNavigation = [
  { name: 'Projects', href: '/our-projects' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/get-a-quote' }
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = isHome && !scrolled;
  const logoSrc = isTransparent
    ? '/images/brand_assets/logo/logo_wordmark_white.png'
    : '/images/brand_assets/logo/logo_wordmark.png';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent'
          : 'bg-background/80 backdrop-blur-md border-b border-foreground/10'
      }`}
    >
      <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 focus:outline-none rounded-md flex items-center">
            <Image
              src={logoSrc}
              alt="Deltive"
              width={400}
              height={100}
              className={`h-16 w-auto transition-all duration-300 md:h-20 lg:h-24 ${isTransparent ? '' : 'dark:invert'}`}
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors ${
              isTransparent ? 'text-white hover:text-white/80' : 'text-foreground/80 hover:text-foreground'
            }`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {mainNavigation.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-bold transition-colors ${
                  isTransparent
                    ? `hover:text-white ${isActive ? 'text-white' : 'text-white/70'}`
                    : `hover:text-brand ${isActive ? 'text-brand' : 'text-foreground/60'}`
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/get-a-quote"
            className="text-sm font-semibold leading-6 px-5 py-2.5 bg-brand text-white rounded-full hover:bg-brand/90 transition-colors shadow-sm hover:shadow-md"
          >
            Get a Quote
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-foreground/10 border-l border-foreground/5">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <Image src="/images/brand_assets/logo/logo_wordmark.png" alt="Deltive" width={120} height={28} className="h-7 w-auto dark:invert" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-foreground/10">
              <div className="space-y-2 py-6">
                {mainNavigation.map((item) => {
                  const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors hover:bg-brand/5 ${
                        isActive ? 'text-brand bg-brand/5' : 'text-foreground/80'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
