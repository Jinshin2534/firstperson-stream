import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-svh bg-zinc-950 text-zinc-50">
      <div className="mx-auto flex min-h-svh w-full max-w-2xl items-center px-6">
        <div className="w-full space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight">一人称配信</h1>
            <p className="text-sm text-zinc-300">見るものを選ぶ。</p>
          </div>

          <div className="grid gap-4">
            <Link
              href="/watch"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-lg font-medium hover:bg-white/10 active:scale-[0.99]"
            >
              <div className="space-y-1">
                <div>配信を見る</div>
                <div className="text-sm text-zinc-300">いまの映像</div>
              </div>
              <span className="text-zinc-300">→</span>
            </Link>

            <Link
              href="/archives"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-lg font-medium hover:bg-white/10 active:scale-[0.99]"
            >
              <div className="space-y-1">
                <div>アーカイブ</div>
                <div className="text-sm text-zinc-300">過去の映像</div>
              </div>
              <span className="text-zinc-300">→</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}