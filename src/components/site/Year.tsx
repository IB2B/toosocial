"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** Current year. Read only in the browser, so the prerendered page never
 *  bakes in a stale date (Next 16 blocks `new Date()` during prerender). */
export function Year() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => null,
  );
  return <span>{year}</span>;
}
