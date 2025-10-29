import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-sans horror-bg relative overflow-hidden">
      <div className="horror-stars" aria-hidden="true"></div>
      <div className="horror-grid" aria-hidden="true"></div>
      {/* Navbar */}
      <header className="mx-auto max-w-6xl px-6 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-full p-2 shadow-md">
              <Image
                src="/zombie-removebg.png"
                alt="logo"
                width={44}
                height={44}
                className="rounded-full"
              />
            </div>
            <span className="text-xl font-bold tracking-tight">ZOMBIE</span>
          </div>
          <div className="flex gap-3">
            <a
              href="https://pump.fun/coin/91fu9ukPhzhPJriL4xpNbfDwGagJY1SkRDneqsQvpump"
              className="cursor-pointer rounded-full horror-cta px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-95"
            >
              BUY NOW
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-6">
        <section className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-6 py-12">
            <h1 className="horror-title">ZOMBIE</h1>
            <p className="max-w-xl text-lg text-neutral-300">
              An eerie, undead take on the adventurous mascot — reimagined with
              a horror vibe. Use this as a starting point and I can tune color,
              spacing, and effects to match the screenshot more closely.
            </p>
            <p className="max-w-xl text-lg text-neutral-300">
              CA: 91fu9ukPhzhPJriL4xpNbfDwGagJY1SkRDneqsQvpump
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://pump.fun/coin/91fu9ukPhzhPJriL4xpNbfDwGagJY1SkRDneqsQvpump"
                className="rounded-full horror-cta px-6 py-3 text-sm font-semibold text-white shadow"
              >
                BUY NOW
              </a>
              <a
                href="https://pump.fun/coin/91fu9ukPhzhPJriL4xpNbfDwGagJY1SkRDneqsQvpump"
                className="rounded-full border border-neutral-700 bg-transparent px-6 py-3 text-sm font-medium text-neutral-200"
              >
                Learn more
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center py-12">
            <div className="w-[320px] sm:w-[420px]">
              <Image
                src="/zombie-removebg.png"
                alt="hero"
                width={520}
                height={520}
                className="mx-auto hero-image-eerie"
              />
            </div>
          </div>
        </section>

        {/* Info cards: Tokenomics */}
        <section className="mt-12 grid gap-6 md:grid-cols-4">
          <Card title="TICKER" value="$ZOMBIE" />
          <Card title="TAXES" value="0%" />
          <Card title="TOKEN SUPPLY" value="1,000,000,000" />
          <Card title="PLATFORM" value="pump.fun" />
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-neutral-500">
          © 2025. All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl border bg-white/10 p-6 text-center shadow">
      <div className="text-sm text-neutral-500">{title}</div>
      <div className="mt-2 text-xl font-semibold">{value}</div>
    </div>
  );
}

function ImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-lg border bg-white/60 p-4 text-center shadow">
      <div className="flex items-center justify-center">
        <Image src={src} alt={alt} width={120} height={120} />
      </div>
      <div className="mt-3 text-sm font-medium">{alt}</div>
    </div>
  );
}
