export type ArchiveItem = {
  id: string;
  title: string;
  date: string;
  duration: string;

  // どのプレイヤーで再生するか
  type: "youtube" | "twitch" | "video";

  // YouTube用
  youtubeId?: string;

  // Twitch用
  twitchVideoId?: string;

  // ローカル動画など用
  src?: string;
};

export const currentStream = {
  title: "ライブ（仮）",
  status: "OFFLINE" as "LIVE" | "OFFLINE",
  type: "youtube" as const,
  youtubeId: "xDFuBu3VImQ",
};


export const archives: ArchiveItem[] = [
  {
    id: "2026-01-23-UHgYGJnkpAk",
    title: "1/23 配信",
    date: "2026-01-23",
    duration: "??:??",
    type: "youtube",
    youtubeId: "UHgYGJnkpAk",
  },
  {
    id: "2026-01-23-GZYGZ9l5JcM",
    title: "1/23 配信",
    date: "2026-01-23",
    duration: "??:??",
    type: "youtube",
    youtubeId: "GZYGZ9l5JcM",
  },
  {
    id: "2026-01-23-vw8lgnuo65Q",
    title: "1/23 配信",
    date: "2026-01-23",
    duration: "??:??",
    type: "youtube",
    youtubeId: "vw8lgnuo65Q",
  },
  {
    id: "2026-01-22-yyVw1AMPzBY",
    title: "1/22 配信",
    date: "2026-01-22",
    duration: "??:??",
    type: "youtube",
    youtubeId: "yyVw1AMPzBY",
  },
];