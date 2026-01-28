import Link from "next/link";
import Player from "@/components/Player";

export default function WatchPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-4 space-y-4">
      
      {/* ← ホームに戻る */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur hover:bg-white/20 transition"
        >
          ← ホームに戻る
        </Link>
      </div>

      <Player
        title="ライブ"
        status="LIVE"
        type="youtube"
        youtubeId="DDonRfBzdWs"
      />
    </main>
  );
}