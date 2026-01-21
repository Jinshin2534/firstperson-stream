import Player from "@/components/Player";

export default function WatchPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Player
        title="ライブ"
        status="LIVE"
        type="twitch"
        twitchChannel="fdsoai"
      />
    </main>
  );
}