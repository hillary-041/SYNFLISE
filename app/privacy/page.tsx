import LegalLayout from "@/Components/legallayout";

export const metadata = { title: "Privacy Policy | Synflise" };

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="October 10, 2026">
      <section>
        <h2>Who we are</h2>
        <p>
          Synflise (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates this website and its services. This
          policy explains what personal data we collect, why, and the choices you have.
        </p>
      </section>
      <section>
        <h2>Information we collect</h2>
        <ul>
          <li>Details you give us: name, email, company, and the content of your messages.</li>
          <li>Usage data: pages visited, device and browser type, and approximate location from IP address.</li>
          <li>Cookies and similar technologies, described below.</li>
        </ul>
      </section>
      <section>
        <h2>How we use it</h2>
        <ul>
          <li>To respond to enquiries and provide support.</li>
          <li>To operate, secure, and improve the website and our services.</li>
          <li>To send updates you asked for. You can opt out at any time.</li>
          <li>To meet legal obligations.</li>
        </ul>
      </section>
      <section>
        <h2>Cookies</h2>
        <p>
          We use essential cookies to make the site work and, with your consent, analytics cookies to
          understand how it is used. You can change your browser settings to block or delete cookies.
        </p>
      </section>
      <section>
        <h2>Sharing</h2>
        <p>
          We do not sell your personal data. We share it only with service providers who process it on
          our behalf (hosting, analytics, email), and when the law requires it.
        </p>
      </section>
      <section>
        <h2>Retention and security</h2>
        <p>
          We keep personal data only as long as needed for the purposes above and protect it with
          reasonable technical and organizational measures.
        </p>
      </section>
      <section>
        <h2>Your rights</h2>
        <p>
          Depending on where you live, you may have the right to access, correct, delete, or export
          your data, and to object to certain processing. To make a request, email{" "}
          <a href="mailto:privacy@synflise.com">privacy@synflise.com</a>.
        </p>
      </section>
      <section>
        <h2>Changes</h2>
        <p>We may update this policy. The date at the top shows when it last changed.</p>
      </section>
    </LegalLayout>
  );
}