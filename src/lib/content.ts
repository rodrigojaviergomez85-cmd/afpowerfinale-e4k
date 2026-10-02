import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

export type ContentItem = Database["public"]["Tables"]["content_items"]["Row"];
export type ItemType = "sentence" | "question" | "vocab";

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Draws `count` random items for a level/class.
 * Avoids recently used ids; falls back to earlier classes of the same level (review mode).
 */
export async function drawItems(opts: {
  level: number;
  classNum: number;
  count: number;
  types?: ItemType[];
  recent: string[];
}): Promise<{ items: ContentItem[]; review: boolean }> {
  let q = supabase
    .from("content_items")
    .select("*")
    .eq("level", opts.level)
    .lte("class_num", opts.classNum);
  if (opts.types?.length) q = q.in("type", opts.types);
  const { data, error } = await q;
  if (error) throw error;
  const all = data ?? [];
  const recent = new Set(opts.recent);
  const current = all.filter((i) => i.class_num === opts.classNum);
  const older = all.filter((i) => i.class_num !== opts.classNum);

  const fresh = shuffle(current.filter((i) => !recent.has(i.id)));
  let picked = fresh.slice(0, opts.count);
  let review = false;
  if (picked.length < opts.count) {
    const olderFresh = shuffle(older.filter((i) => !recent.has(i.id)));
    const add = olderFresh.slice(0, opts.count - picked.length);
    if (add.length) review = true;
    picked = [...picked, ...add];
  }
  if (picked.length < opts.count) {
    // Still short: allow recently used, oldest-used first
    const ids = new Set(picked.map((p) => p.id));
    const rest = shuffle(all.filter((i) => !ids.has(i.id)));
    picked = [...picked, ...rest.slice(0, opts.count - picked.length)];
  }
  return { items: shuffle(picked), review };
}
