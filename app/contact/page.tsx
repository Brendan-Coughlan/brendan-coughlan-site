// app/contact/page.tsx

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-3 text-lg text-stone-600">
            Contact
          </p>

          <h1 className="text-5xl font-bold">
            Get in touch.
          </h1>

          <p className="mt-6 text-lg leading-8 text-stone-600">
            For research, collaboration, development opportunities, or
            inquiries related to Corvian Labs, you can reach me by email.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-stone-300">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold">
                Email
              </h2>

              <p className="mt-4 text-stone-600">
                The best way to contact me directly.
              </p>

              <a
                href="mailto:bcoughlan2404@gmail.com"
                className="mt-4 inline-block text-lg font-semibold hover:underline"
              >
                Email →
              </a>
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                Elsewhere
              </h2>

              <p className="mt-4 text-stone-600">
                You can also find my work and professional profiles here.
              </p>

              <div className="mt-4 flex gap-6">
                <a
                  href="https://github.com/Brendan-Coughlan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                >
                  GitHub →
                </a>

                <a
                  href="https://www.linkedin.com/in/brendan-coughlan-132a14255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                >
                  LinkedIn →
                </a>

                <a
                  href="https://corvianlabs.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                >
                  Corvian Labs →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}