// app/about/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-2 items-center gap-16">
          <div className="max-w-2xl">
            <p className="mb-3 text-lg text-stone-600">
              About
            </p>

            <h1 className="text-5xl font-bold">
              I like learning how things work.
            </h1>

            <p className="mt-6 text-lg leading-8 text-stone-600">
              I'm Brendan Coughlan, a computer science researcher and
              developer with a curiosity that tends to extend well beyond
              computers.
            </p>

            <p className="mt-4 text-lg leading-8 text-stone-600">
              I'm currently pursuing my Master's in Computer Science
              at the College of Staten Island, where my research focuses on
              reinforcement learning and multi-agent decision-making.
            </p>

            <p className="mt-4 text-lg leading-8 text-stone-600">
              Outside of research, I enjoy building software, experimenting
              with new ideas, and exploring subjects across science,
              mathematics, history, games, nature, and more.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/profile_image.jpg"
              alt="Brendan Coughlan"
              width={350}
              height={350}
              className="size-80 rounded-full object-cover border-2 border-stone-900"
            />
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="border-t border-stone-300">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold">
            What I Do
          </h2>

          <div className="mt-10 grid grid-cols-3 gap-10">
            <div>
              <p className="text-sm text-stone-500">
                Research
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Artificial Intelligence
              </h3>

              <p className="mt-3 leading-7 text-stone-600">
                My current academic work focuses on reinforcement learning,
                deep learning, and decision-making in multi-agent systems.
              </p>

              <Link
                href="/research"
                className="mt-4 inline-block font-medium hover:underline"
              >
                View research →
              </Link>
            </div>

            <div>
              <p className="text-sm text-stone-500">
                Development
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Building Software
              </h3>

              <p className="mt-3 leading-7 text-stone-600">
                I build applications and tools across different domains,
                ranging from AI-powered applications to operational and
                consumer software.
              </p>

              <Link
                href="/work"
                className="mt-4 inline-block font-medium hover:underline"
              >
                View my work →
              </Link>
            </div>

            <div>
              <p className="text-sm text-stone-500">
                Education
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Corvian Labs
              </h3>

              <p className="mt-3 leading-7 text-stone-600">
                I founded Corvian Labs to explore complex ideas through
                interactive explanations, visualizations, and experiments
                across science, mathematics, computing, and beyond.
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

      {/* Curiosity */}
      <section className="border-t border-stone-300">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold">
                Beyond Computer Science
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-stone-600">
                Computer science is what I study, but I've never been very
                good at limiting myself to one subject. I enjoy learning about
                anything that helps me better understand the world and how it
                works.
              </p>
            </div>

            <div className="flex flex-wrap content-start gap-3">
              {[
                "Science",
                "Mathematics",
                "History",
                "Games",
                "Nature",
                "Technology",
                "Artificial Intelligence",
              ].map((interest) => (
                <span
                  key={interest}
                  className="rounded-md border border-stone-300 px-4 py-2"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t border-stone-300">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold">
              Always Learning
            </h2>

            <p className="mt-5 text-lg leading-8 text-stone-600">
              There is far more to understand than any one person could learn
              in a lifetime. I find that exciting rather than discouraging. I
              want to keep asking questions, exploring unfamiliar subjects,
              building things, and learning as much as I can along the way.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}