import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — MusiOS",
  description: "How MusiOS collects, uses, and protects your data.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="November 25, 2026">
      <>
        <p>
          MusiOS is operated by{" "}<strong>Perkins Consult ApS</strong>, a company registered in Denmark (&ldquo;MusiOS,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). This policy explains what personal data we handle through musios.io and the MusiOS app, why, how long we keep it, and what rights you have.
        </p>

        <p>
          We&rsquo;re a small team, and MusiOS is in closed beta. If anything here is unclear, email us at{" "}<a href="mailto:support@musios.io">support@musios.io</a>{" "}and we&rsquo;ll explain it plainly.
        </p>

        <h2>1. Who this covers, and who is responsible</h2>

        <ul>
          <li>
            <strong>Visitors and beta sign-ups</strong>{" "}on musios.io, and{" "}<strong>teachers</strong>{" "}with an account. We are the data controller for this information.
          </li>
          <li>
            <strong>Students, and their parents, guardians and other contacts</strong>{" "}that a teacher adds. Students and main contacts can be invited to sign in to the app. The teacher is the data controller for this information, and we process it on the teacher&rsquo;s behalf under our{" "}<Link href="/dpa">Data Processing Agreement</Link>.
          </li>
          <li>
            For keeping the service secure (sign-in, request logs and error reports), we are the controller for everyone who uses the app.
          </li>
        </ul>

        <h2>2. What we handle</h2>

        <p>
          <strong>If you sign up for the closed beta:</strong>{" "}your email address, roughly how many students you teach, and when you signed up.
        </p>

        <p>
          <strong>If you&rsquo;re a teacher:</strong>{" "}your name, email address and password (stored only in hashed form), your tax settings, your plan and invoices, the status of your Stripe account if you take payments, and the studio policy, files, messages and lessons you create. Card and bank details go to Stripe. We never see or store full card numbers.
        </p>

        <p>
          <strong>About a student (added by their teacher, or by the student in the app):</strong>{" "}name, email address, phone number, instrument, hashed password, lessons and classes, practice assignments and practice log, files shared with them, messages sent to them, and payment requests.
        </p>

        <p>
          <strong>About a parent, guardian or other contact:</strong>{" "}name, relationship to the student, email address, phone number, and which emails they should get. A main contact can also sign in.
        </p>

        <p>
          <strong>When someone accepts a studio policy:</strong>{" "}the name they type, who they accept for, the date and time, the version, their IP address and browser. This is the teacher&rsquo;s record of the agreement.
        </p>

        <p>
          <strong>If you contact us:</strong>{" "}your message and how to reply to you.
        </p>

        <p>
          <strong>Technical information:</strong>{" "}request logs (such as IP address, page requested and account id) and error reports (such as account id, IP address and what went wrong). We run the error reporting ourselves, on our own servers.
        </p>

        <p>
          <strong>Device calendar:</strong>{" "}if a teacher allows it in the mobile app, lessons are added to the calendar on their device. We don&rsquo;t receive the other events in it.
        </p>

        <p>
          Please don&rsquo;t enter sensitive information, such as health information, about students. MusiOS isn&rsquo;t made for it.
        </p>

        <h2>3. Children</h2>

        <p>
          Teachers are adults. Many of their students are children. A teacher can make a parent or guardian the main contact, who then gets the invitation and signs in, and can manage the account. A student can also be invited to sign in. Teachers are responsible for having a legal basis, including a parent&rsquo;s or guardian&rsquo;s permission where it&rsquo;s required. We don&rsquo;t advertise to students or use their information for anything other than running the service for their teacher.
        </p>

        <h2>4. Why we use it, and the legal basis</h2>

        <ul>
          <li>
            <strong>To provide the service</strong>{" "}to teachers: our contract with them.
          </li>
          <li>
            <strong>To handle student and contact information</strong>: on the teacher&rsquo;s instructions. The teacher decides the legal basis.
          </li>
          <li>
            <strong>To tell you about the closed beta</strong>{" "}after you sign up: your consent. You can withdraw it at any time by emailing us.
          </li>
          <li>
            <strong>To keep MusiOS secure, fix problems and answer support messages</strong>: our legitimate interest in a service that works and is safe.
          </li>
          <li>
            <strong>To keep accounts and tax records</strong>: our legal obligations.
          </li>
        </ul>

        <h2>5. Who we share it with</h2>

        <p>
          We don&rsquo;t sell personal data. Students&rsquo; information is shared with their own teacher. Beyond that, we use these providers:
        </p>

        <ul>
          <li>
            <strong>Hetzner</strong>{" "}(Germany): hosting of the app, database, files and backups.
          </li>
          <li>
            <strong>Twilio SendGrid</strong>{" "}(USA): sends our email, such as invitations, messages, payment requests and password resets.
          </li>
          <li>
            <strong>Stripe</strong>{" "}(Ireland and USA): payments, subscriptions and payouts. Stripe is also a controller of its own for some of this, under its own privacy policy.
          </li>
          <li>
            <strong>Google</strong>{" "}(Ireland and USA): stores closed beta sign-ups in a spreadsheet. No student information.
          </li>
          <li>
            <strong>GoDaddy</strong>{" "}(USA): hosts our support@musios.io mailbox, so it handles what you write to us by email.
          </li>
        </ul>

        <p>
          Where a provider handles data outside the EU/EEA, we rely on safeguards such as the EU&ndash;US Data Privacy Framework or the European Commission&rsquo;s Standard Contractual Clauses. We may also have to disclose information if the law requires it.
        </p>

        <h2>6. How long we keep it</h2>

        <ul>
          <li>
            <strong>Beta sign-ups</strong>{" "}(and emails from our earlier waitlist): until the beta has ended and MusiOS has launched, or until you ask us to delete them.
          </li>
          <li>
            <strong>Teacher accounts, with their students&rsquo; and contacts&rsquo; information:</strong>{" "}until the account is deleted. Deleting a teacher&rsquo;s account also deletes their students&rsquo; accounts, contacts, lessons, practice, messages, payment requests, policy acceptances and files.
          </li>
          <li>
            <strong>A student removed by their teacher:</strong>{" "}the account and practice are deleted. The teacher&rsquo;s payment records and policy acceptances are kept until the teacher deletes their account.
          </li>
          <li>
            <strong>Our own invoices and payment records</strong>{" "}with teachers: 5 years from the end of the financial year, as Danish bookkeeping law requires.
          </li>
          <li>
            <strong>Backups:</strong>{" "}deleted data remains in database backups for up to 6 months and file backups for up to 14 days, and then disappears. If we restore a backup, we repeat the deletions made since.
          </li>
          <li>
            <strong>Request logs:</strong>{" "}a limited amount, overwritten as new entries arrive. Error reports are kept only as long as we need them to fix problems.
          </li>
          <li>
            <strong>Support messages:</strong>{" "}as long as we need them to help you. Messages sent in the app are deleted with your account.
          </li>
        </ul>

        <h2>7. Your rights</h2>

        <p>
          You have the right to see your information, get a copy, correct it, have it deleted, limit its use, object to it, receive it in a portable format, and withdraw consent. You can change your details and delete your account in the app&rsquo;s settings, or email{" "}<a href="mailto:support@musios.io">support@musios.io</a>. We reply within one month, and may ask you to confirm who you are first.
        </p>

        <p>
          If you&rsquo;re a student, parent or guardian, your teacher decides about the information they hold on you, so it&rsquo;s quickest to ask them. If you write to us, we&rsquo;ll pass your request on to them.
        </p>

        <p>
          You can complain to the Danish Data Protection Agency (<a href="https://www.datatilsynet.dk">Datatilsynet</a>) or the authority where you live.
        </p>

        <h2>8. Security</h2>

        <p>
          Connections are encrypted, passwords are hashed, each user can only reach the information meant for them, and files can only be opened by signing in. We make regular backups. No system is perfectly secure. If a breach affects you, we&rsquo;ll follow the law on telling you, your teacher and the authorities.
        </p>

        <h2>9. Cookies and analytics</h2>

        <p>
          We don&rsquo;t use advertising or analytics cookies. The app stores what it needs to keep you signed in and remember your settings on your device. For musios.io we use Umami, an open-source analytics tool that we run on our own servers. It shows overall traffic, such as page views and referrers, without cookies, and no third party receives the data.
        </p>

        <h2>10. Changes</h2>

        <p>
          We may update this policy as MusiOS develops. We&rsquo;ll change the date at the top, and tell account holders about important changes.
        </p>

        <h2>11. Contact</h2>

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
