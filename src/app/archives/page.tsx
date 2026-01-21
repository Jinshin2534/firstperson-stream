import Link from "next/link";
import { archives } from "@/lib/data";

export default function ArchivesPage() {
  return (
    <main className="min-h-svh bg-zinc-950 text-zinc-50">
      <div className="mx-auto w-full max-w-3xl px-4 py-6 md:px-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
          >
            ← ホーム
          </Link>

          <Link
            href="/watch"
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
          >
            配信 →
          </Link>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 md:p-6">
          <div className="mb-4">
            <h1 className="text-xl font-semibold tracking-tight">アーカイブ</h1>
            <p className="text-sm text-zinc-300">新しい順</p>
          </div>

          <div className="grid gap-3">
            {archives.map((a) => (
              <Link
                key={a.id}
                href={`/archives/${a.id}`}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
              >
                <div className="space-y-1">
                  <div className="font-medium">{a.title}</div>
                  <div className="text-sm text-zinc-300">
                    {a.date} ・ {a.duration}
                  </div>
                </div>
                <span className="text-sm text-zinc-300">再生 →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}