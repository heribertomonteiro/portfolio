"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type TypingNameProps = {
  text: string;
  className?: string;
  speedMs?: number;
  startDelayMs?: number;
};

export default function TypingName({
  text,
  className,
  speedMs = 60,
  startDelayMs = 250,
}: TypingNameProps) {
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState("");
  const [cursorOn, setCursorOn] = useState(true);

  const stableText = useMemo(() => text ?? "", [text]);

  useEffect(() => {
    if (reduceMotion) {
      setValue(stableText);
      return;
    }

    setValue("");

    let index = 0;
    let typeInterval: number | undefined;

    const startTimeout = window.setTimeout(() => {
      typeInterval = window.setInterval(() => {
        index += 1;
        setValue(stableText.slice(0, index));

        if (index >= stableText.length) {
          if (typeInterval) window.clearInterval(typeInterval);
          typeInterval = undefined;
        }
      }, speedMs);
    }, startDelayMs);

    return () => {
      window.clearTimeout(startTimeout);
      if (typeInterval) window.clearInterval(typeInterval);
    };
  }, [reduceMotion, speedMs, stableText, startDelayMs]);

  useEffect(() => {
    if (reduceMotion) return;

    const cursorInterval = window.setInterval(() => {
      setCursorOn((prev) => !prev);
    }, 500);

    return () => window.clearInterval(cursorInterval);
  }, [reduceMotion]);

  if (reduceMotion) {
    return <span className={className}>{stableText}</span>;
  }

  return (
    <span
      className={cn("inline-flex items-baseline", className)}
      aria-label={stableText}
      style={{ minWidth: `${Math.max(stableText.length, 1)}ch` }}
    >
      <span aria-hidden>{value}</span>
      <span
        aria-hidden
        className={cn(
          "ml-1 transition-opacity duration-150",
          cursorOn ? "opacity-100" : "opacity-0"
        )}
      >
        |
      </span>
    </span>
  );
}
