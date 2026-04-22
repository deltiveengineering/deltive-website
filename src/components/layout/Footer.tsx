import Link from 'next/link';
import { siteMetadata } from '@/content/services';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-foreground/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-brand/50 rounded-md">
              <Image src="/images/brand_assets/logo/logo_wordmark.png" alt="Deltive" width={120} height={28} className="h-7 w-auto dark:invert" />
            </Link>
            <p className="mt-4 text-sm text-foreground/60 leading-relaxed max-w-sm">
              We design, engineer and industrialize end to end. A Ghent-based design and engineering studio.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/our-projects" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/get-a-quote" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Inquiries */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Inquiries</h3>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${siteMetadata.email}`} className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  {siteMetadata.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteMetadata.phone.replace(/\s+/g, '')}`} className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  {siteMetadata.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Socials</h3>
            <ul className="space-y-3">
              <li>
                <a href={siteMetadata.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href={siteMetadata.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/50">
            &copy; {new Date().getFullYear()} Deltive Engineering. All rights reserved.
          </p>
          <Link href="/privacy-policy" className="text-xs text-foreground/50 hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
