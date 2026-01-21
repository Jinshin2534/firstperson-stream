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
    id: "2026-01-18-01",
    title: "作業ログ 01",
    date: "2026-01-18",
    duration: "03:12",
    src: "https://www.youtube.com/watch?v=xDFuBu3VImQ&pp=ugUEEgJqYQ%3D%3D",
  },
  {
    id: "2026-01-17-01",
    title: "作業ログ 00",
    date: "2026-01-17",
    duration: "01:45",
    src: "https://www.youtube.com/watch?v=xDFuBu3VImQ&pp=ugUEEgJqYQ%3D%3D",
  },
];