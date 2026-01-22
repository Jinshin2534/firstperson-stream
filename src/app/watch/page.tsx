import Player from "@/components/Player";

export default function WatchPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Player
        title="ライブ"
        status="LIVE"
        type="youtube"
        youtubeId="vw8lgnuo65Q"
      />
    </main>
  );
}