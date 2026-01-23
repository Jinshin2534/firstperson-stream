import Player from "@/components/Player";

export default function WatchPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Player
        status="LIVE"
        type="youtube"
        youtubeId="GZYGZ9l5JcM"
      />
    </main>
  );
}