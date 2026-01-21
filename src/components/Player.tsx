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
        {type === "video" && (
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
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&playsinline=1`}
              title={title ?? "YouTube player"}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      
        {type === "twitch" && (
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src={
                twitchVideoId
                  ? `https://player.twitch.tv/?video=${encodeURIComponent(
                      twitchVideoId
                    )}&parent=localhost&autoplay=true&muted=true`
                  : `https://player.twitch.tv/?channel=${encodeURIComponent(
                      twitchChannel ?? ""
                    )}&parent=localhost&autoplay=true&muted=true`
              }
              title={title ?? "Twitch player"}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      
        {(type === "youtube" && !youtubeId) ||
        (type === "twitch" && !twitchChannel && !twitchVideoId) ? (
          <div className="flex aspect-video items-center justify-center text-sm text-zinc-300">
            埋め込みIDが未設定です
          </div>
        ) : null}
      
        {/* ✅ これがコメント流れるやつ（上に重なる） */}
        <ChatOverlay enabled density={900} />
      </div>
      
    </section>
  );
}