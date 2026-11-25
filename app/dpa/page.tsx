import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Data Processing Agreement — MusiOS",
  description: "How MusiOS processes student and contact data on behalf of teachers.",
  alternates: {
    canonical: "/dpa",
  },
};

export default function DataProcessingAgreement() {
  return (
    <LegalLayout title="Data Processing Agreement" lastUpdated="November 25, 2026">
      <>
        <p>
          This agreement applies between you, a teacher or studio using MusiOS (&ldquo;the controller&rdquo;), and{" "}<strong>Perkins Consult ApS</strong>, Denmark (&ldquo;the processor,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;), whenever we process personal data for you. It is required by Article 28 of the GDPR and is part of our{" "}<Link href="/terms">Terms of Service</Link>. You enter into it when you accept the Terms. If the two disagree about personal data, this agreement applies.
        </p>

        <h2>1. What we process for you</h2>

        <ul>
          <li>
            <strong>Purpose:</strong>{" "}to provide MusiOS to you: student and class management, scheduling, practice, files, messages, payment requests and studio policies.
          </li>
          <li>
            <strong>How:</strong>{" "}storing, showing, sending, backing up and deleting the information.
          </li>
          <li>
            <strong>Whose data:</strong>{" "}your students, who may be children, and their parents, guardians and other contacts.
          </li>
          <li>
            <strong>What data:</strong>{" "}names, relationship, email addresses, phone numbers, sign-in details, instrument, lessons and classes, practice records, files, messages, payment requests, and policy acceptances with date, IP address and browser.
          </li>
          <li>
            <strong>Sensitive data:</strong>{" "}MusiOS isn&rsquo;t meant for special categories of data (such as health information) or national identity numbers, and you agree not to enter any.
          </li>
          <li>
            <strong>Duration:</strong>{" "}as long as you have an account, and until the data is deleted as described in section 9.
          </li>
        </ul>

        <h2>2. Your responsibilities</h2>

        <p>
          You decide what information you enter and why. You are responsible for having a legal basis, including permission from a parent or guardian where it&rsquo;s required, and for informing the people concerned.
        </p>

        <h2>3. Your instructions</h2>

        <p>
          We process the data only on your documented instructions, including for transfers outside the EU/EEA, unless EU or Danish law requires otherwise. In that case we tell you first, unless the law forbids it. The Terms, this agreement and what you do in the app are your instructions. We tell you if we believe an instruction breaks data protection law.
        </p>

        <h2>4. Confidentiality</h2>

        <p>
          Only people who need access to run and support MusiOS have it, and they are bound by confidentiality. We look at your data only to provide the service, fix a problem, help you when you ask, or comply with the law.
        </p>

        <h2>5. Security</h2>

        <p>
          We take appropriate measures under Article 32 of the GDPR, considering that the data may concern children. They include:
        </p>

        <ul>
          <li>
            encrypted connections, and passwords stored only in hashed form;
          </li>
          <li>
            access rules in the database that limit each user to the information meant for them;
          </li>
          <li>
            files that can only be opened by signing in;
          </li>
          <li>
            limits on repeated sign-in attempts, and logs and error reports that leave out passwords and sign-in tokens;
          </li>
          <li>
            regular backups, and hosting within the EU/EEA.
          </li>
        </ul>

        <h2>6. Sub-processors</h2>

        <p>
          You give us general permission to use sub-processors. We use:
        </p>

        <ul>
          <li>
            <strong>Hetzner Online GmbH</strong>, Germany: hosting, storage and backups.
          </li>
          <li>
            <strong>Twilio Inc. (SendGrid)</strong>, USA: sending email.
          </li>
          <li>
            <strong>Stripe</strong>, Ireland and USA: payments, if you take them through MusiOS. Stripe is also a controller of its own for parts of this.
          </li>
          <li>
            <strong>GoDaddy and Microsoft (Microsoft 365)</strong>, USA and Ireland: our support@musios.io mailbox, and so any student information you send us by email.
          </li>
        </ul>

        <p>
          We tell you by email at least 30 days before adding or replacing one. You can object within that time on reasonable data protection grounds. If we can&rsquo;t find a solution, you can end the agreement by deleting your account. We impose the same data protection obligations on sub-processors, and remain responsible to you for what they do.
        </p>

        <h2>7. Transfers outside the EU/EEA</h2>

        <p>
          Data is hosted in the EU/EEA. Some sub-processors may handle it elsewhere. Transfers happen only with a valid basis under Chapter V of the GDPR, such as an adequacy decision (including the EU&ndash;US Data Privacy Framework) or the European Commission&rsquo;s Standard Contractual Clauses.
        </p>

        <h2>8. Helping you</h2>

        <ul>
          <li>
            <strong>Requests from people:</strong>{" "}if a student or contact writes to us about their rights, we pass it to you without undue delay and don&rsquo;t answer on your behalf. We help you respond, where you can&rsquo;t do it yourself in the app.
          </li>
          <li>
            <strong>Breaches:</strong>{" "}we tell you without undue delay, and where possible within 48 hours of becoming aware of a breach affecting your data, with what we know: what happened, whose data and how much, likely consequences, and what we&rsquo;re doing. We add to this as we learn more.
          </li>
          <li>
            <strong>Other duties:</strong>{" "}we help you meet your obligations on security, impact assessments and consulting the authorities, considering the nature of the processing and what we know.
          </li>
        </ul>

        <h2>9. Deleting or returning data</h2>

        <p>
          You can delete students, contacts, files and your account in the app. When the service ends, we delete the data or return it to you, as you choose. Ask at{" "}<a href="mailto:support@musios.io">support@musios.io</a>{" "}if you want a copy before your account is deleted. Deleted data remains in database backups for up to 6 months and in file backups for up to 14 days. During that time it isn&rsquo;t used for anything other than restoring the service, and deletions are repeated after a restore. We keep data longer only if EU or Danish law requires it.
        </p>

        <h2>10. Checking that we comply</h2>

        <p>
          We give you the information needed to show that we follow Article 28, and allow and contribute to audits, including inspections, by you or an auditor you choose. Please give reasonable notice, and begin with written questions. Audits must not give access to other customers&rsquo; data.
        </p>

        <h2>11. Duration, changes and law</h2>

        <p>
          This agreement applies as long as we process personal data for you, and can&rsquo;t be ended separately while we do. We may update it, and tell you by email at least 30 days before a change that matters to you. It is governed by Danish law, and the liability rules in the Terms apply, except where the GDPR doesn&rsquo;t allow them to.
        </p>

        <h2>12. Contact</h2>

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
