import Player from "@/components/Player";

export default function WatchPage() {
  return (
    <main>
      <Player
        title="ライブ"
        status="LIVE"
        type="twitch"
        twitchChannel="fdsoai"
      />
    </main>
  );
}