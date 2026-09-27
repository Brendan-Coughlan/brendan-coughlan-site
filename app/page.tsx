// app/page.tsx

import Link from "next/link";

export default function HomeScreen()
{
  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-2 items-center gap-12">
          {/* Introduction */}
          <div>
            <p className="mb-3 text-lg text-stone-600">
              Computer Science Researcher & Developer
            </p>

            <h1 className="text-6xl font-bold">
              Brendan Coughlan
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
              I&apos;m a computer science researcher and developer driven by
              curiosity and a desire to understand how things work.
            </p>

            <p className="mt-4 max-w-xl text-lg leading-8 text-stone-600">
              My current work focuses on reinforcement learning and deep
              learning, but my interests extend across science, mathematics,
              history, games, nature, and beyond.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/work"
                className="rounded-md bg-stone-900 px-5 py-3 text-stone-100 hover:bg-stone-700"
              >
                View my work
              </Link>

              <Link
                href="/about"
                className="rounded-md border border-stone-400 px-5 py-3 hover:bg-stone-200"
              >
                About me
              </Link>
            </div>
          </div>

          {/* Ecosystem */}
          <div className="flex items-center justify-center">
            <p className="text-stone-400">
              Ecosystem goes here
            </p>
          </div>
        </div>
      </section>

      {/* Currently */}
      <section className="border-t border-stone-300">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold">
            Currently
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-12">
            {/* Research */}
            <div>
              <p className="text-sm text-stone-500">
                Research
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                M.S. Computer Science
              </h3>

              <p className="mt-1 text-stone-500">
                College of Staten Island
              </p>

              <p className="mt-4 leading-7 text-stone-600">
                I'm currently researching multi-agent reinforcement
                learning using <i>So Long Sucker</i>, a four-player strategic
                game involving competition, temporary coalitions, and changing
                incentives.
              </p>

              <Link
                href="/research"
                className="mt-4 inline-block font-medium hover:underline"
              >
                View research →
              </Link>
            </div>

            {/* Corvian Labs */}
            <div>
              <p className="text-sm text-stone-500">
                Building
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Corvian Labs
              </h3>

              <p className="mt-1 text-stone-500">
                Interactive learning across disciplines
              </p>

              <p className="mt-4 leading-7 text-stone-600">
                Interactive explanations for science, mathematics, computing,
                and beyond through visualizations, experiments, and
                interactive experiences.
              </p>

              <a
                href="https://corvianlabs.io"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-medium hover:underline"
              >
                Visit Corvian Labs →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}