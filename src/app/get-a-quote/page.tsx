"use client";

import { siteMetadata } from '@/content/services';
import { siteCopy } from '@/content/site-copy';

export default function GetAQuotePage() {
  const copy = siteCopy.getAQuote;

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <section className="pt-44 pb-16 px-6 lg:px-8 bg-foreground/5 text-center md:pt-52">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">{copy.header.title}</h1>
          <p className="text-xl text-foreground/70">
            {copy.header.subtitle}
          </p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Form Side */}
          <div className="bg-background border border-foreground/10 rounded-3xl p-8 md:p-12 shadow-sm">
            <h2 className="text-2xl font-bold mb-8">{copy.form.title}</h2>
            <form className="space-y-6 flex flex-col" onSubmit={(e) => {
              e.preventDefault();
              alert("Form submission will be handled via API route.");
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">{copy.form.fields.firstName}<span className="text-red-500">*</span></label>
                  <input type="text" id="firstName" name="firstName" className="w-full bg-foreground/5 border-transparent focus:border-foreground/20 focus:bg-background focus:ring-0 rounded-lg px-4 py-3 outline-none transition-all" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">{copy.form.fields.lastName}<span className="text-red-500">*</span></label>
                  <input type="text" id="lastName" name="lastName" className="w-full bg-foreground/5 border-transparent focus:border-foreground/20 focus:bg-background focus:ring-0 rounded-lg px-4 py-3 outline-none transition-all" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">{copy.form.fields.email}<span className="text-red-500">*</span></label>
                <input type="email" id="email" name="email" className="w-full bg-foreground/5 border-transparent focus:border-foreground/20 focus:bg-background focus:ring-0 rounded-lg px-4 py-3 outline-none transition-all" required />
              </div>

              <div>
                <label htmlFor="quantityRange" className="block text-sm font-medium mb-2">{copy.form.fields.quantityRange.label}<span className="text-red-500">*</span></label>
                <select id="quantityRange" name="quantityRange" className="w-full bg-foreground/5 border-transparent focus:border-foreground/20 focus:bg-background focus:ring-0 rounded-lg px-4 py-3 outline-none transition-all appearance-none" required>
                  <option value="">Select quantity</option>
                  {copy.form.fields.quantityRange.options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">{copy.form.fields.message}</label>
                <textarea id="message" name="message" rows={5} className="w-full bg-foreground/5 border-transparent focus:border-foreground/20 focus:bg-background focus:ring-0 rounded-lg px-4 py-3 outline-none transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="w-full py-4 px-8 bg-foreground text-background font-bold tracking-widest rounded-lg hover:bg-foreground/90 transition-colors mt-4 uppercase">
                {copy.form.submit}
              </button>
            </form>
          </div>

          {/* Contact Details Side */}
          <div className="space-y-12 lg:pl-12 flex flex-col justify-center">
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase text-foreground/50 mb-6">{copy.contact.tagline}</h2>
              <p className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                {copy.contact.title}
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold tracking-widest uppercase text-foreground/50 mb-2">{copy.contact.emailLabel}</h3>
                <a href={`mailto:${siteMetadata.email}`} className="text-2xl font-medium hover:text-foreground/70 transition-colors break-all">
                  {siteMetadata.email}
                </a>
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-widest uppercase text-foreground/50 mb-2">{copy.contact.phoneLabel}</h3>
                <a href={`tel:${siteMetadata.phone.replace(/\s+/g, '')}`} className="text-2xl font-medium hover:text-foreground/70 transition-colors tracking-wide">
                  {siteMetadata.phone}
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
