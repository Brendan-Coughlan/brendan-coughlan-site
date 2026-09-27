// app/research/page.tsx

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-3 text-lg text-stone-600">
            Research
          </p>

          <h1 className="text-5xl font-bold">
            Exploring intelligent systems.
          </h1>

          <p className="mt-6 text-lg leading-8 text-stone-600">
            I&apos;m currently pursuing my Master&apos;s in Computer Science at
            the College of Staten Island, with a focus on artificial
            intelligence and machine learning.
          </p>

          <p className="mt-4 text-lg leading-8 text-stone-600">
            My current research focuses on reinforcement learning and
            multi-agent decision-making, particularly how different learning
            approaches perform in strategic environments.
          </p>
        </div>
      </section>

      {/* Current Research */}
      <section className="border-t border-stone-300">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold">
            Current Research
          </h2>

          <div className="mt-10 max-w-4xl">
            <p className="text-sm text-stone-500">
              Master&apos;s Thesis
            </p>

            <h3 className="mt-2 text-2xl font-semibold">
              Evaluating Actor-Critic Reinforcement Learning for Multi-Agent
              Decision-Making in <i>So Long Sucker</i>
            </h3>

            <p className="mt-2 text-stone-500">
              College of Staten Island
            </p>

            <p className="mt-6 leading-7 text-stone-600">
              Multi-agent reinforcement learning provides a framework for
              studying decision-making among interacting agents in competitive
              and cooperative environments. <i>So Long Sucker</i> is a
              four-player strategic game involving competition, temporary
              coalitions, and changing player incentives.
            </p>

            <p className="mt-4 leading-7 text-stone-600">
              Previous research introduced the game as a multi-agent
              reinforcement learning benchmark and evaluated value-based
              methods including Deep Q-Networks (DQN), Double DQN (DDQN), and
              Dueling DQN.
            </p>

            <p className="mt-4 leading-7 text-stone-600">
              My research extends this work by evaluating actor-critic
              reinforcement learning methods and comparing their performance
              with these previously tested value-based approaches.
            </p>
          </div>
        </div>
      </section>

      {/* Research Approach */}
      <section className="border-t border-stone-300">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold">
            Approach
          </h2>

          <div className="mt-10 grid grid-cols-3 gap-10">
            <div>
              <p className="text-sm text-stone-500">
                01
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Reproduce
              </h3>

              <p className="mt-3 leading-7 text-stone-600">
                Replicate the existing value-based experiments to evaluate
                reproducibility and establish experimental baselines.
              </p>
            </div>

            <div>
              <p className="text-sm text-stone-500">
                02
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Extend
              </h3>

              <p className="mt-3 leading-7 text-stone-600">
                Implement selected actor-critic reinforcement learning methods
                within the existing <i>So Long Sucker</i> environment.
              </p>
            </div>

            <div>
              <p className="text-sm text-stone-500">
                03
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Compare
              </h3>

              <p className="mt-3 leading-7 text-stone-600">
                Evaluate value-based and actor-critic approaches under
                comparable experimental conditions and analyze their relative
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="border-t border-stone-300">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold">
            Research Interests
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-md border border-stone-300 px-4 py-2">
              Reinforcement Learning
            </span>

            <span className="rounded-md border border-stone-300 px-4 py-2">
              Multi-Agent Systems
            </span>

            <span className="rounded-md border border-stone-300 px-4 py-2">
              Deep Learning
            </span>

            <span className="rounded-md border border-stone-300 px-4 py-2">
              Artificial Intelligence
            </span>

            <span className="rounded-md border border-stone-300 px-4 py-2">
              Machine Learning
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}