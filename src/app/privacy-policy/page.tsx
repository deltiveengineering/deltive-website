import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full bg-background">
      <section className="pt-32 pb-16 px-6 lg:px-8 border-b border-foreground/10 bg-foreground/5">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="text-lg text-foreground/60">
            Information regarding how this website handles personal data.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
          <h2>GENERAL INFORMATION</h2>
          <p>
            This Privacy Policy describes in general terms how this website handles personal data. Personal data means any information that can identify a visitor directly or indirectly. The text on this page explains what types of information may be collected, for what purposes this information may be used, under which circumstances data may be shared, and what rights visitors have regarding their data. Applicable privacy laws (such as the General Data Protection Regulation - GDPR) may differ per country. Visitors remain responsible for informing themselves about the rules that apply in their own jurisdiction.
          </p>

          <h2>INFORMATION THAT MAY BE COLLECTED</h2>
          <p>In connection with the use of this website, the following types of information may be collected:</p>
          <ul>
            <li>Data that a visitor enters in forms, such as name, email address and the content of a message.</li>
            <li>Technical data automatically provided by the device and browser, such as IP address, browser type, operating system and time of visit.</li>
            <li>Data about the use of the website, such as pages visited, clicks and duration of the visit.</li>
            <li>Information collected through cookies and similar technologies, if used.</li>
          </ul>
          <p className="text-sm text-foreground/50 border-l-4 border-foreground/10 pl-4">
            Different jurisdictions have different legal obligations of what must be included in a Privacy Policy. You are responsible to make sure you are following the relevant legislation to your activities and location.
          </p>

          <h2>PURPOSES FOR INFORMATION USED</h2>
          <p>The information collected through this website may be used for the following purposes, among others:</p>
          <ul>
            <li>Enabling and handling contact requests and other communication with visitors.</li>
            <li>Analysing and improving the operation, security and content of the website.</li>
            <li>Compiling anonymised statistics about the use of the website.</li>
            <li>Showing or sending information that matches the interests of visitors, where permitted under applicable law and chosen settings.</li>
            <li>Complying with legal obligations, for example in the context of security or retention requirements.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
