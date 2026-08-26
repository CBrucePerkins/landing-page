import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — MusiOS",
  description: "How MusiOS collects, uses, and protects your data.",
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="August 26, 2026">
      <>
        <p>
          MusiOS is operated by <strong>Perkins Consult ApS</strong>, a
          company registered in Denmark (&ldquo;MusiOS,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us&rdquo;). This policy explains what
          personal data we collect through musios.io and the MusiOS
          application, why we collect it, and what rights you have over it.
        </p>
        <p>
          We&rsquo;re a small, pre-launch team building this platform. If
          anything here is unclear, email us at{" "}
          <a href="mailto:support@musios.io">support@musios.io</a> — we&rsquo;d
          rather explain plainly than hide behind boilerplate.
        </p>

        <h2>1. Who this applies to</h2>
        <p>
          This policy covers everyone who interacts with musios.io or the
          MusiOS app: visitors joining our waitlist, teachers who sign up for
          an account (&ldquo;Teachers&rdquo;), and — indirectly — the
          students Teachers manage inside the app (&ldquo;Students&rdquo;).
        </p>

        <h2>2. What we collect</h2>
        <p>
          <strong>If you join the waitlist:</strong> just your email address,
          submitted through the sign-up form on this site.
        </p>
        <p>
          <strong>If you create a Teacher account:</strong> your name, email,
          phone number, studio/business details, and billing information.
          Payments are processed by Stripe — we never see or store your full
          card number.
        </p>
        <p>
          <strong>Student data entered by a Teacher:</strong> names, contact
          details (email/phone), lesson schedules, attendance, practice
          records, uploaded files, and payment/invoice records that a Teacher
          enters to run their studio.
        </p>

        <h2>3. About Student data and children</h2>
        <p>
          MusiOS is a business tool built for adult Teachers — it isn&rsquo;t
          directed at children, and Students don&rsquo;t create their own
          accounts or interact with us directly. When a Teacher enters
          information about a Student who is a minor, the Teacher is acting
          as the data controller for that information (it&rsquo;s their
          studio&rsquo;s data), and MusiOS processes it only on the
          Teacher&rsquo;s instructions, as a processor. Teachers are
          responsible for having the appropriate legal basis — including any
          required parental or guardian consent — before entering a
          minor&rsquo;s information into the platform.
        </p>

        <h2>4. Why we process this data</h2>
        <ul>
          <li>
            <strong>To provide the service</strong> — running the scheduling,
            practice-tracking, messaging, and payment features you sign up
            for (contract necessity).
          </li>
          <li>
            <strong>To communicate with you</strong> — waitlist updates,
            service notices, and support (consent, for marketing emails; you
            can unsubscribe anytime).
          </li>
          <li>
            <strong>To keep the service secure and working</strong> —
            preventing abuse, debugging, and basic operational monitoring
            (legitimate interest).
          </li>
          <li>
            <strong>To meet legal obligations</strong> — tax, accounting, and
            billing records.
          </li>
        </ul>

        <h2>5. Who we share data with</h2>
        <p>
          We don&rsquo;t sell personal data. We share it only with the
          service providers that make MusiOS work, currently or planned:
        </p>
        <ul>
          <li>
            <strong>Stripe</strong> — payment processing and payouts.
          </li>
          <li>
            <strong>Twilio</strong> — delivers SMS lesson reminders and
            messages (Pro plan SMS allowances are described on our{" "}
            <Link href="/#pricing">pricing page</Link>).
          </li>
          <li>
            <strong>Twilio SendGrid</strong> — delivers transactional email
            (account notices, lesson reminders, receipts). SendGrid is part
            of Twilio, so both channels ultimately run through the same
            vendor.
          </li>
          <li>
            <strong>Hetzner</strong> — cloud hosting for the application and
            its data. Hetzner is based in Germany, so this data stays within
            the EU/EEA.
          </li>
          <li>
            <strong>Google (waitlist only)</strong> — waitlist submissions
            are currently stored via a Google Sheets integration.
          </li>
        </ul>
        <p>
          Twilio, Twilio SendGrid, and Google may process data outside the
          European Economic Area; where that happens, we rely on appropriate
          safeguards such as Standard Contractual Clauses. Our application
          hosting, via Hetzner, stays within the EU/EEA.
        </p>

        <h2>6. How long we keep it</h2>
        <p>
          Waitlist emails are kept until launch or until you ask us to
          remove them. Account and Student data is kept for as long as the
          account is active, plus a reasonable period afterward to satisfy
          legal, tax, and dispute-resolution obligations, after which it is
          deleted or anonymized.
        </p>

        <h2>7. Your rights</h2>
        <p>
          If you&rsquo;re in the EU/EEA (or covered by a similar framework
          elsewhere), you have the right to access, correct, delete, export,
          or restrict the use of your personal data, and to object to or
          withdraw consent for certain processing. To exercise any of these,
          email <a href="mailto:support@musios.io">support@musios.io</a>. If
          you&rsquo;re not satisfied with our response, you can lodge a
          complaint with the Danish Data Protection Agency (Datatilsynet) or
          your local supervisory authority.
        </p>

        <h2>8. Security</h2>
        <p>
          We take reasonable technical and organizational measures to
          protect the data we hold, but no method of transmission or storage
          is perfectly secure, and we can&rsquo;t guarantee absolute
          security.
        </p>

        <h2>9. Cookies</h2>
        <p>
          musios.io does not currently use analytics or advertising cookies —
          only what&rsquo;s strictly necessary for the site to function. If
          that changes, we&rsquo;ll update this policy and request consent
          where required.
        </p>

        <h2>10. Changes to this policy</h2>
        <p>
          We may update this policy as the product evolves. Material changes
          will be reflected by updating the date at the top of this page.
        </p>

        <h2>11. Contact</h2>
        <p>
          Perkins Consult ApS, Denmark
          <br />
          <a href="mailto:support@musios.io">support@musios.io</a>
        </p>
      </>
    </LegalLayout>
  );
}
