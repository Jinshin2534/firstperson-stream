export type ArchiveItem = {
  id: string;
  title: string;
  date: string;
  duration: string;
  src: string; // 今は仮動画URL（あとでTwitch/YouTube/HLSに差し替える）
};

export const currentStream = {
  title: "ライブ（仮）",
  status: "OFFLINE" as "LIVE" | "OFFLINE",
  src: "https://www.youtube.com/watch?v=xDFuBu3VImQ&pp=ugUEEgJqYQ%3D%3D",
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