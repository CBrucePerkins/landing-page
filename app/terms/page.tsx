import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — MusiOS",
  description: "The terms that govern your use of MusiOS.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="November 25, 2026">
      <>
        <p>
          These terms govern your use of MusiOS, the platform operated by{" "}
          <strong>Perkins Consult ApS</strong>, a company registered in
          Denmark (&ldquo;MusiOS,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;).
          By creating an account or using the service, you agree to them. If
          you don&rsquo;t agree, please don&rsquo;t use MusiOS.
        </p>

        <h2>1. What MusiOS is</h2>
        <p>
          MusiOS is a studio-management platform for music teachers: files and practice, scheduling, student and class management, messaging, studio policies, and payment collection via Stripe. Teachers are our customers. Students, parents and guardians can sign in when their teacher invites them, free of charge, to see what the teacher shares with them. The rules on accounts and acceptable use below apply to them too. Their lessons, payments and studio policy are between them and the teacher.
        </p>

        <h2>2. Eligibility &amp; accounts</h2>
        <p>
          You must be at least 18 (or the age of majority where you live) and able to enter into a contract on behalf of your teaching business to have a Teacher account. During the closed beta, we create Teacher accounts by invitation. A parent or guardian should set up or supervise a child&rsquo;s access.
        </p>

        <p>
          You&rsquo;re responsible for keeping your login credentials secure and for all activity under your account, and for making sure the information you provide, about yourself and about your Students and their contacts, is accurate.
        </p>

        <h2>3. Subscription plans &amp; billing</h2>
        <p>
          MusiOS offers Free and Standard plans as described on our{" "}<Link href="/#pricing">pricing page</Link>, including their limits. Teacher accounts start on the Free plan, unless they are part of the closed beta. Paid plans are billed in advance on a recurring basis through Stripe and renew automatically until cancelled. We&rsquo;ll give reasonable advance notice before any price change takes effect on your account.
        </p>

        <h2>4. The closed beta</h2>
        <p>
          The closed beta begins in January 2027 and is free. Beta testers get access to all features, with a storage limit, for as long as the beta lasts. Because it&rsquo;s a test:
        </p>

        <ul>
          <li>
            features may change, be interrupted or be removed, and there may be errors;
          </li>
          <li>
            please keep your own copies of anything important, such as files, schedules and payment records;
          </li>
          <li>
            we may end the beta, or a tester&rsquo;s participation, with reasonable notice. You&rsquo;ll be able to get a copy of your data first;
          </li>
          <li>
            you may send us feedback, and we may use it to improve MusiOS without owing you anything for it.
          </li>
        </ul>

        <p>
          We won&rsquo;t charge you when the beta ends. Your account moves to the Free plan unless you choose a paid one. Beta testers get a permanent percentage discount on paid plans for as long as their account exists. We&rsquo;ll announce prices and the size of the discount before paid plans open to beta testers. The discount belongs to the account, and ends if the account is deleted or is closed for violating these terms.
        </p>

        <h2>5. Cancellation &amp; refunds</h2>
        <p>
          You can cancel a paid plan at any time; cancellation takes effect
          at the end of your current billing period, and we don&rsquo;t
          prorate refunds for partial periods except where required by law.
          If you&rsquo;re a consumer in the EU acting outside a trade or
          profession, you may have a 14-day right of withdrawal on your
          initial purchase; by starting to use a paid feature with your
          express consent before that period ends, you acknowledge that this
          right no longer applies once the service has been fully performed.
        </p>

        <h2>6. Fair use of messaging features</h2>
        <p>
          Messages in the app and by email are sized around normal studio use (lesson reminders, class communication, and similar). We reserve the right to throttle or suspend messaging that we reasonably believe is abusive, unlawful (e.g. unsolicited bulk messaging), or well outside normal use for a studio of your size.
        </p>

        <h2>7. Your data &amp; responsibility for Student information</h2>
        <p>
          You own the data you and your Students generate in MusiOS. When you enter information about a Student, parent, guardian or other contact, you are the data controller for it, and you&rsquo;re responsible for having the appropriate legal basis to collect and store it, including any required parental or guardian consent. This matters especially for children.
        </p>

        <p>
          MusiOS processes that data on your behalf under our{" "}<Link href="/dpa">Data Processing Agreement</Link>, which is part of these terms. Our{" "}<Link href="/privacy">Privacy Policy</Link>{" "}explains how we handle personal data.
        </p>

        <h2>8. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use MusiOS for anything illegal, or to send spam or unlawful messages;</li>
          <li>Attempt to reverse-engineer, resell, or white-label the platform without our written permission;</li>
          <li>Probe, scan, or test the security of our systems without authorization;</li>
          <li>Upload content you don&rsquo;t have the rights to, or that infringes someone else&rsquo;s rights.</li>
        </ul>

        <h2>9. Third-party services</h2>
        <p>
          Payments are processed by Stripe under its own terms, and email is sent through a third-party provider. We&rsquo;re not responsible for outages or failures of these providers that are outside our control.
        </p>

        <h2>10. Intellectual property</h2>
        <p>
          MusiOS retains all rights to the platform, its software, and its
          branding. Nothing in these terms transfers ownership of MusiOS to
          you; you retain ownership of the content and data you upload.
        </p>

        <h2>11. Disclaimers &amp; limitation of liability</h2>
        <p>
          MusiOS is provided &ldquo;as is,&rdquo; without warranties of any
          kind, express or implied, including fitness for a particular
          purpose or uninterrupted availability. To the maximum extent
          permitted by law, our total liability to you for any claim arising
          from your use of MusiOS is limited to the amount you paid us in the
          12 months before the claim, and we&rsquo;re not liable for
          indirect, incidental, or consequential damages. Nothing in these
          terms limits liability that can&rsquo;t be limited under
          applicable law.
        </p>

        <h2>12. Termination</h2>
        <p>
          You may stop using MusiOS and delete your account at any time in the app&rsquo;s settings. Deletion is immediate and can&rsquo;t be undone, and includes your Students&rsquo; accounts and files, so ask us for a copy of your data first if you need one. We may suspend or terminate accounts that violate these terms. If we end your account or the service, we&rsquo;ll provide a reasonable window to get a copy of your data before it is deleted, except where we&rsquo;re required to delete it sooner by law.
        </p>

        <h2>13. Changes to these terms</h2>
        <p>
          We may update these terms as the product evolves. Material changes
          will be reflected by updating the date at the top of this page,
          and where required, we&rsquo;ll notify active account holders
          directly.
        </p>

        <h2>14. Governing law</h2>
        <p>
          These terms are governed by the laws of Denmark, without regard to
          conflict-of-law principles, and any dispute not otherwise resolved
          will be subject to the jurisdiction of the Danish courts — this
          doesn&rsquo;t remove any mandatory consumer-protection rights you
          have under the law of your own country of residence.
        </p>

        <h2>15. Contact</h2>
        <p>
          Perkins Consult ApS
          <br />
          CVR 44135841
          <br />
          Klapskovvej 3, 8382 Vitten, Denmark
          <br />
          <a href="mailto:support@musios.io">support@musios.io</a>
        </p>
      </>
    </LegalLayout>
  );
}
