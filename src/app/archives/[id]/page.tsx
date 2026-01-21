import Link from "next/link";
import Player from "@/components/Player";
import { archives } from "@/lib/data";

export default async function ArchiveWatchPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const item = archives.find((a) => a.id === id);

  if (!item) {
    return (
      <main className="min-h-svh bg-zinc-950 text-zinc-50">
        <div className="mx-auto w-full max-w-3xl px-4 py-6 md:px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h1 className="text-xl font-semibold">見つかりません</h1>
            <p className="mt-2 text-sm text-zinc-300">そのアーカイブは存在しないみたい。</p>
            <div className="mt-4">
              <Link
                href="/archives"
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
              >
                ← 一覧へ
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-svh bg-zinc-950 text-zinc-50">
      <div className="mx-auto w-full max-w-3xl px-4 py-6 md:px-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <Link
            href="/archives"
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
          >
            ← 一覧へ
          </Link>

          <Link
            href="/"
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
          >
            ホーム →
          </Link>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 md:p-6">
          <div className="mb-3">
            <div className="text-sm text-zinc-300">{item.date} ・ {item.duration}</div>
          </div>
          <Player title={item.title} src={item.src} />
        </div>
      </div>
    </main>
  );
}