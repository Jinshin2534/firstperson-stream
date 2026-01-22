"use client";

import ChatOverlay from "@/components/ChatOverlay";

type PlayerType = "video" | "youtube" | "twitch";

type Props = {
  title?: string;
  status?: "LIVE" | "OFFLINE";
  type?: PlayerType;

  // video用
  src?: string;

  // YouTube用（動画ID or ライブ動画ID）
  youtubeId?: string;

  // Twitch用
  twitchChannel?: string; // ライブならチャンネル名
  twitchVideoId?: string; // アーカイブなら v123456789
};

export default function Player({
  title,
  status,
  type = "video",
  src,
  youtubeId,
  twitchChannel,
  twitchVideoId,
}: Props) {
  const isLive = status === "LIVE";

  // ✅ Twitch iframe 用 parent（環境自動対応）
  const parent =
    typeof window !== "undefined"
      ? window.location.hostname
      : "localhost";

  return (
    <section className="space-y-3">
      {(title || status) && (
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-xl font-semibold tracking-tight">{title}</h1>

          {status && (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">
              <span
                className={[
                  "h-2.5 w-2.5 rounded-full",
                  isLive ? "bg-emerald-400" : "bg-amber-300",
                ].join(" ")}
              />
              <span>{isLive ? "LIVE" : "OFFLINE"}</span>
            </div>
          )}
        </div>
      )}

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black">
        {/* ローカル動画 */}
        {type === "video" && src && (
          <video
            className="w-full"
            controls
            playsInline
            muted
            autoPlay={isLive}
            src={src}
          />
        )}

        {type === "youtube" && youtubeId && (
          <div className="relative aspect-video w-full overflow-hidden bg-black">
            <iframe
              className="
                absolute top-1/2 left-1/2
                h-[160%] w-[160%]
                -translate-x-1/2 -translate-y-1/2
              "
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&playsinline=1`}
              title={title ?? "YouTube player"}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {/* Twitch */}
        {type === "twitch" && (
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src={
                twitchVideoId
                  ? `https://player.twitch.tv/?video=${encodeURIComponent(
                      twitchVideoId
                    )}&parent=${parent}&autoplay=true&muted=true`
                  : `https://player.twitch.tv/?channel=${encodeURIComponent(
                      twitchChannel ?? "fdsoai"
                    )}&parent=${parent}&autoplay=true&muted=true`
              }
              title={title ?? "Twitch player"}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {/* ID未設定時のガード */}
        {(type === "youtube" && !youtubeId) ||
        (type === "twitch" && !twitchChannel && !twitchVideoId) ? (
          <div className="flex aspect-video items-center justify-center text-sm text-zinc-300">
            埋め込みIDが未設定です
          </div>
        ) : null}

        {/* ニコ生風コメント（映像の上） */}
        <ChatOverlay enabled density={120} />
      </div>
    </section>
  );
}