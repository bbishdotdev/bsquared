"use client";

import { useRef, useEffect, useCallback, memo } from "react";
import { AnsiText } from "./ansi-parser";

export interface TerminalMessage {
  id: string;
  type: "user" | "system";
  content: string;
  timestamp: number;
}

interface MessageListProps {
  messages: TerminalMessage[];
}

const MessageItem = memo(function MessageItem({ msg }: { msg: TerminalMessage }) {
  return (
    <div
      className={`
        py-2 px-3 rounded-md
        ${
          msg.type === "user"
            ? "bg-zinc-800/50 border-l-2 border-cyan-500/50"
            : "bg-transparent"
        }
      `}
    >
      {msg.type === "user" ? (
        <div className="flex items-start gap-2">
          <span className="text-cyan-400 select-none">❯</span>
          <span className="text-zinc-100 break-words whitespace-pre-wrap">
            {msg.content}
          </span>
        </div>
      ) : (
        <AnsiText
          text={msg.content}
          className="text-zinc-300 break-words whitespace-pre-wrap leading-relaxed"
        />
      )}
    </div>
  );
});

export function MessageList({ messages }: MessageListProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isAtBottomRef = useRef(true);
  const SCROLL_BOTTOM_THRESHOLD = 24;

  const updateIsAtBottom = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const distanceFromBottom =
      container.scrollHeight - (container.scrollTop + container.clientHeight);
    isAtBottomRef.current = distanceFromBottom <= SCROLL_BOTTOM_THRESHOLD;
  }, []);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (isAtBottomRef.current) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  const handleScroll = useCallback(() => {
    updateIsAtBottom();
  }, [updateIsAtBottom]);

  // Empty state - still takes flex space but shows nothing
  if (messages.length === 0) {
    return <div className="flex-1 min-h-0" />;
  }

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden px-4 py-2 space-y-1 terminal-scrollbar overscroll-contain"
    >
      {messages.map((msg) => (
        <MessageItem key={msg.id} msg={msg} />
      ))}
    </div>
  );
}
