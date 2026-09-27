import Link from "next/link";

export default function CVPage() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-3 text-lg text-stone-600">
            Curriculum Vitae
          </p>

          <h1 className="text-5xl font-bold">
            Education & Experience
          </h1>

          <p className="mt-6 text-lg leading-8 text-stone-600">
            My academic background, professional experience, projects, and
            technical skills.
          </p>

          <a
            href="/Brendan_Coughlan_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-md bg-stone-900 px-5 py-3 text-stone-100 hover:bg-stone-700"
          >
            View Full CV
          </a>
        </div>
      </section>

      {/* Education */}
      <section className="border-t border-stone-300">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold">
            Education
          </h2>

          <div className="mt-10 max-w-4xl">
            <div className="grid grid-cols-4 gap-8">
              <p className="text-stone-500">
                2025 - Present
              </p>

              <div className="col-span-3">
                <h3 className="text-xl font-semibold">
                  M.S. Computer Science
                </h3>

                <p className="mt-1 text-stone-500">
                  College of Staten Island, CUNY
                </p>

                <p className="mt-4 leading-7 text-stone-600">
                  Graduate study in computer science with current research
                  focused on reinforcement learning and multi-agent
                  decision-making.
                </p>

                <Link
                  href="/research"
                  className="mt-3 inline-block font-medium hover:underline"
                >
                  View my research →
                </Link>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-4 gap-8">
              <p className="text-stone-500">
                2022 - 2025
              </p>

              <div className="col-span-3">
                <h3 className="text-xl font-semibold">
                  B.S. Computer Science
                </h3>

                <p className="mt-1 text-stone-500">
                  College of Staten Island, CUNY
                </p>

                <p className="mt-4 text-stone-600">
                  GPA: 3.81 / 4.0
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="border-t border-stone-300">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold">
            Experience
          </h2>

          <div className="mt-10 max-w-4xl">
            <div className="grid grid-cols-4 gap-8">
              <p className="text-stone-500">
                2024 - Present
              </p>

              <div className="col-span-3">
                <h3 className="text-xl font-semibold">
                  Founder & Independent Developer
                </h3>

                <p className="mt-1 text-stone-500">
                  Corvian Labs LLC
                </p>

                <p className="mt-4 leading-7 text-stone-600">
                  Building software, web applications, games, and educational
                  content while managing development, deployment, client
                  communication, and other aspects of the business.
                </p>

                <a
                  href="https://corvianlabs.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block font-medium hover:underline"
                >
                  Visit Corvian Labs →
                </a>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-4 gap-8">
              <p className="text-stone-500">
                2024 - Present
              </p>

              <div className="col-span-3">
                <h3 className="text-xl font-semibold">
                  Security Officer
                </h3>

                <p className="mt-1 text-stone-500">
                  Ports America
                </p>

                <p className="mt-4 leading-7 text-stone-600">
                  Work in cruise terminal security operations, including
                  passenger and staff verification, screening procedures,
                  surveillance, and access control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="border-t border-stone-300">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">
              Projects
            </h2>

            <Link
              href="/work"
              className="font-medium hover:underline"
            >
              View all work →
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-12">
            <div>
              <p className="text-sm text-stone-500">
                May 2025
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Interview Coach
              </h3>

              <p className="mt-3 leading-7 text-stone-600">
                Full-stack AI-powered interview practice application built
                with Next.js and FastAPI. Uses the OpenAI API to generate
                role-specific questions and simulate mock interviews.
              </p>

              <p className="mt-3 text-sm text-stone-500">
                Next.js · FastAPI · OpenAI API
              </p>
            </div>

            <div>
              <p className="text-sm text-stone-500">
                May 2024
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                KotlinTrade
              </h3>

              <p className="mt-3 leading-7 text-stone-600">
                Mobile stock tracking application built in Kotlin with
                watchlists, price alerts, search, and external market data.
              </p>

              <p className="mt-3 text-sm text-stone-500">
                Kotlin · Jetpack Compose · Retrofit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-stone-300">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold">
            Technical Skills
          </h2>

          <div className="mt-10 grid grid-cols-3 gap-10">
            <div>
              <h3 className="font-semibold">
                Languages
              </h3>

              <p className="mt-3 leading-7 text-stone-600">
                Python<br />
                Java<br />
                C++<br />
                C#<br />
                JavaScript<br />
                PHP<br />
                HTML & CSS
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Frameworks & Tools
              </h3>

              <p className="mt-3 leading-7 text-stone-600">
                Git & GitHub<br />
                FastAPI<br />
                MySQL<br />
                OpenAI API<br />
                Unity<br />
                Godot
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Areas of Interest
              </h3>

              <p className="mt-3 leading-7 text-stone-600">
                Reinforcement Learning<br />
                Deep Learning<br />
                Multi-Agent Systems<br />
                Machine Learning<br />
                Software Development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="border-t border-stone-300">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold">
            Awards & Publications
          </h2>

          <div className="mt-10 max-w-4xl">
            <div className="grid grid-cols-4 gap-8">
              <p className="text-stone-500">
                2022
              </p>

              <div className="col-span-3">
                <h3 className="text-xl font-semibold">
                  Young Writers Award
                </h3>

                <p className="mt-2 text-stone-600">
                  Recognized for excellence in creative writing.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-4 gap-8">
              <p className="text-stone-500">
                2022
              </p>

              <div className="col-span-3">
                <h3 className="text-xl font-semibold">
                  The Dead Can't Laugh
                </h3>

                <p className="mt-2 text-stone-600">
                  Short story published in <i>Unsolved – American Mysteries</i>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}