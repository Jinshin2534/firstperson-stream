"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type FlyMsg = {
  id: string;
  text: string;
  topPct: number; // 0-100
  durationMs: number; // 流れる速さ
  sizePx: number; // 文字サイズ
  opacity: number;
};

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

// たくさん＋カテゴリ分け（ニコ生っぽいノイズ混ぜ）
const DUMMY = {
  reaction: [
    "うおおお",
    "草",
    "ｗｗｗｗｗ",
    "それな",
    "わかる",
    "なるほど",
    "えぐ",
    "助かる",
    "神",
    "天才",
    "優勝",
    "好き",
    "最高",
    "きたーーー",
    "うますぎ",
    "強い",
    "ええやん",
    "よすぎ",
    "えっぐ",
    "エモい",
    "熱い",
    "え？",
    "マジ？",
    "こわ",
    "すげぇ",
    "👏👏👏",
    "👍",
    "🔥",
    "✨",
    "草草草",
  ],
  echo: [
    "↑それ",
    "↑わかる",
    "↑同意",
    "これ",
    "それ",
    "そう",
    "はい",
    "うん",
    "正解",
    "わかりみ",
    "たしかに",
    "まじそれ",
    "それが言いたかった",
    "なるほどね",
    "わかりすぎる",
  ],
  noise: [
    "初見です",
    "いま北",
    "ただいま",
    "おかえり",
    "おーぷん",
    "ねむい",
    "腹減った",
    "水飲め",
    "風呂いってくる",
    "重い？",
    "止まった？",
    "音なし助かる",
    "画質いい",
    "画質わる",
    "遅延どれくらい？",
    "回線がんばれ",
    "通知切ろ",
    "今日は何する？",
    "草しかない",
    "草生える",
    "ワロタ",
    "おけ",
    "なるほど（2回目）",
    "それはそう",
  ],
  praise: [
    "センスある",
    "考え方好き",
    "わかりやすい",
    "その視点いい",
    "伸びる",
    "期待",
    "いいね",
    "さすが",
    "天才か？",
    "その発想すごい",
    "理解した",
    "いい話",
    "刺さった",
    "強い言葉だ",
    "それが本質",
  ],
  tease: [
    "出たｗ",
    "またそれかｗ",
    "はいはい",
    "それ言う？",
    "草不可避",
    "やってんなｗ",
    "盛ってる？",
    "嘘だろｗ",
    "それは草",
    "急に哲学",
    "急に真理",
  ],
  long: [
    "今の話ちょっと刺さった",
    "その考え方、結構好き",
    "それ前から思ってたやつだ",
    "そこ、言語化できるのすごい",
    "今の一言で全部繋がった感ある",
    "その方向性で行くのアリだと思う",
    "地味に大事なこと言ってる",
  ],
};

function pick<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function ChatOverlay({
  enabled = true,
  // ここを小さくすると「量」が増える（ms）
  density = 20,
  // たまに弾幕（連投）する確率
  burstChance = 0.10,
}: {
  enabled?: boolean;
  density?: number;
  burstChance?: number;
}) {
  const [msgs, setMsgs] = useState<FlyMsg[]>([]);
  const timer = useRef<number | null>(null);

  const pool = useMemo(() => Object.values(DUMMY).flat(), []);
  const longPool = useMemo(() => DUMMY.long, []);

  useEffect(() => {
    if (!enabled) return;

    timer.current = window.setInterval(() => {
      const isLong = Math.random() < 0.12;
      const text = isLong ? pick(longPool) : pick(pool);

      // 上下に散らす（端ギリギリを避ける）
      const topPct = 4 + Math.floor(Math.random() * 86); // 4%〜90%

      // 速さ：6〜10秒（長文は少し遅く）
      const durationMsBase = 6000 + Math.floor(Math.random() * 4000);
      const durationMs = isLong ? durationMsBase + 1500 : durationMsBase;

      // 文字サイズ：今より大きめ（28〜40px）
      const sizePx = 28 + Math.floor(Math.random() * 13); // 28-40

      const opacity = 0.9 + Math.random() * 0.1;

      const makeOne = (text: string): FlyMsg => ({
        id: uid(),
        text,
        topPct,
        durationMs,
        sizePx,
        opacity,
      });

      // 通常は1つ、たまに弾幕（2〜5個）で増やす
      const burst = Math.random() < burstChance;
      const count = burst ? 2 + Math.floor(Math.random() * 4) : 1;
      
      const used = new Set<string>();
      const items: FlyMsg[] = [];
      
      for (let i = 0; i < count; i++) {
        let t: string;
      
        // 同じtick内で重複しないようにする
        do {
          const isLong = Math.random() < 0.12;
          t = isLong ? pick(longPool) : pick(pool);
        } while (used.has(t) && used.size < pool.length + longPool.length);
      
        used.add(t);
      
        const m = makeOne(t);
      
        if (burst) {
          m.topPct = Math.min(92, Math.max(2, m.topPct + (i - 1) * 4));
        }
      
        items.push(m);
      }

      setMsgs((prev) => [...prev, ...items].slice(-120)); // たくさん流しても破綻しにくい
    }, density);

    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [enabled, density, burstChance, pool, longPool]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {msgs.map((m) => (
        <Fly
          key={m.id}
          msg={m}
          onDone={() => setMsgs((prev) => prev.filter((x) => x.id !== m.id))}
        />
      ))}
    </div>
  );
}

function Fly({ msg, onDone }: { msg: FlyMsg; onDone: () => void }) {
  return (
    <div
      className="absolute top-0 left-full whitespace-nowrap px-2 font-semibold text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] will-change-transform select-none"
      style={{
        top: `${msg.topPct}%`,
        fontSize: `${msg.sizePx}px`,
        opacity: msg.opacity,
        animation: `nico-fly ${msg.durationMs}ms linear`,
      }}
      onAnimationEnd={onDone}
    >
      {msg.text}
    </div>
  );
}