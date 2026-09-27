// app/work/page.tsx

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-3 text-lg text-stone-600">
            Work
          </p>

          <h1 className="text-5xl font-bold">
            Things I've built.
          </h1>

          <p className="mt-6 text-lg leading-8 text-stone-600">
            A selection of software projects I've worked on across
            artificial intelligence, security operations, mobile development,
            and other areas that interest me.
          </p>
        </div>
      </section>

      {/* PortWatch */}
      <section className="border-t border-stone-300">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-2 gap-16">
            <div>
              <p className="text-sm text-stone-500">
                Security Operations
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                PortWatch
              </h2>

              <p className="mt-5 leading-7 text-stone-600">
                PortWatch is a shoreside security operations platform designed
                for cruise terminals.
              </p>

              <p className="mt-4 leading-7 text-stone-600">
                It centralizes ship port calls, passenger and crew manifests,
                truck screening, security procedures, operational notes, and
                watchman activity in one system.
              </p>

              <p className="mt-4 leading-7 text-stone-600">
                The platform also includes a live AIS vessel tracker with
                searchable vessel data and real-time ship positions for
                situational awareness.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-md border border-stone-300 px-3 py-1 text-sm">
                  Full Stack
                </span>

                <span className="rounded-md border border-stone-300 px-3 py-1 text-sm">
                  Security
                </span>

                <span className="rounded-md border border-stone-300 px-3 py-1 text-sm">
                  AIS
                </span>
              </div>
            </div>

            {/* Add screenshot later */}
            <div className="flex min-h-80 items-center justify-center rounded-md border border-stone-300">
              <p className="text-stone-400">
                PortWatch Screenshot
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Coach */}
      <section className="border-t border-stone-300">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-2 gap-16">
            {/* Add screenshot later */}
            <div className="flex min-h-80 items-center justify-center rounded-md border border-stone-300">
              <p className="text-stone-400">
                Interview Coach Screenshot
              </p>
            </div>

            <div>
              <p className="text-sm text-stone-500">
                Artificial Intelligence
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Interview Coach
              </h2>

              <p className="mt-5 leading-7 text-stone-600">
                A full-stack AI-powered application designed to help users
                prepare for job interviews through realistic mock interview
                experiences.
              </p>

              <p className="mt-4 leading-7 text-stone-600">
                The application uses the OpenAI API to dynamically generate
                role-specific interview questions and provide a more
                personalized practice experience.
              </p>

              <p className="mt-4 leading-7 text-stone-600">
                I led backend development on the three-person project,
                including API routing, prompt engineering, and asynchronous
                data flow.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-md border border-stone-300 px-3 py-1 text-sm">
                  Next.js
                </span>

                <span className="rounded-md border border-stone-300 px-3 py-1 text-sm">
                  FastAPI
                </span>

                <span className="rounded-md border border-stone-300 px-3 py-1 text-sm">
                  OpenAI API
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MyWardrobe */}
      <section className="border-t border-stone-300">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-2 gap-16">
            <div>
              <p className="text-sm text-stone-500">
                Mobile Application
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                MyWardrobe
              </h2>

              <p className="mt-5 leading-7 text-stone-600">
                MyWardrobe is a mobile application for digitally organizing
                and understanding your clothing collection.
              </p>

              <p className="mt-4 leading-7 text-stone-600">
                Users can add clothing with photos and information such as
                category, color, brand, and size, making it easy to browse
                everything they own in one place.
              </p>

              <p className="mt-4 leading-7 text-stone-600">
                Planned features include outfit planning, AI-powered clothing
                recognition, personalized outfit suggestions, and clothing
                recommendations based on the user's existing wardrobe and
                personal style.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-md border border-stone-300 px-3 py-1 text-sm">
                  Mobile
                </span>

                <span className="rounded-md border border-stone-300 px-3 py-1 text-sm">
                  AI
                </span>
              </div>
            </div>

            {/* Add screenshot later */}
            <div className="flex min-h-80 items-center justify-center rounded-md border border-stone-300">
              <p className="text-stone-400">
                MyWardrobe Screenshot
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Work */}
      <section className="border-t border-stone-300">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold">
            Other Work
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-12">
            <div>
              <p className="text-sm text-stone-500">
                Mobile Development
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                KotlinTrade
              </h3>

              <p className="mt-3 leading-7 text-stone-600">
                A stock tracking application built in Kotlin with watchlists,
                price alerts, search, and external market data.
              </p>

              <p className="mt-3 text-sm text-stone-500">
                Kotlin · Jetpack Compose · Retrofit
              </p>
            </div>

            <div>
              <p className="text-sm text-stone-500">
                Machine Learning
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Iris Classification Study
              </h3>

              <p className="mt-3 leading-7 text-stone-600">
                A small machine learning study exploring classification on the
                Iris dataset and evaluating model performance using metrics
                including accuracy and precision.
              </p>

              <p className="mt-3 text-sm text-stone-500">
                Python · Machine Learning · Model Evaluation
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}