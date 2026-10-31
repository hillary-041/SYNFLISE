import LegalLayout from "@/Components/legallayout";

export const metadata = { title: "Terms of Service | Synflise" };

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="October 10, 2026">
      <section>
        <h2>Agreement</h2>
        <p>
          By using the Synflise website or services you agree to these terms. If you do not agree,
          please do not use them.
        </p>
      </section>
      <section>
        <h2>Using our services</h2>
        <ul>
          <li>Use them only for lawful purposes and in line with these terms.</li>
          <li>Do not attempt to disrupt, reverse engineer, or gain unauthorized access to them.</li>
          <li>Keep any account credentials secure. You are responsible for activity on your account.</li>
        </ul>
      </section>
      <section>
        <h2>Intellectual property</h2>
        <p>
          The site, its content, and the Synflise name and logo belong to Synflise or its licensors.
          You may not copy or reuse them without written permission.
        </p>
      </section>
      <section>
        <h2>Your content</h2>
        <p>
          You keep ownership of content you submit. You give us a limited license to use it only to
          provide and improve the services to you.
        </p>
      </section>
      <section>
        <h2>Disclaimer</h2>
        <p>
          The services are provided &ldquo;as is&rdquo; without warranties of any kind, to the extent
          permitted by law.
        </p>
      </section>
      <section>
        <h2>Limitation of liability</h2>
        <p>
          To the extent permitted by law, Synflise is not liable for indirect, incidental, or
          consequential damages arising from your use of the services.
        </p>
      </section>
      <section>
        <h2>Termination</h2>
        <p>
          We may suspend or end access if you breach these terms. You may stop using the services at
          any time.
        </p>
      </section>
      <section>
        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of [your jurisdiction]. Questions? Email{" "}
          <a href="mailto:legal@synflise.com">legal@synflise.com</a>.
        </p>
      </section>
    </LegalLayout>
  );
}