// app/page.tsx

import Link from "next/link";
import Image from "next/image";

export default function HomeScreen()
{
  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      <header className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Identity */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src="/profile_image.jpg"
            alt="Brendan Coughlan"
            width={40}
            height={40}
            priority
            className="size-12 rounded-full object-cover border-2 border-stone-950"
          />

          <span className="text-lg font-semibold tracking-tight">
            Brendan Coughlan
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-7 text-lg text-stone-500">
          <Link
            href="/work"
            className="transition-colors hover:text-stone-950 hover:font-semibold"
          >
            Work
          </Link>

          <Link
            href="/research"
            className="transition-colors hover:text-stone-950 hover:font-semibold"
          >
            Research
          </Link>

          <Link
            href="/writing"
            className="transition-colors hover:text-stone-950 hover:font-semibold"
          >
            Writing
          </Link>

          <Link
            href="/about"
            className="transition-colors hover:text-stone-950 hover:font-semibold"
          >
            About
          </Link>

          <Link
            href="/cv"
            className="transition-colors hover:text-stone-950 hover:font-semibold"
          >
            CV
          </Link>

          <Link
            href="/contact"
            className="transition-colors hover:text-stone-950 hover:font-semibold"
          >
            Contact
          </Link>
        </nav>
      </header>
    </main>
  );
}