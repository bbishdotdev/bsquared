import fs from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import Markdown from "react-markdown";
import { Navbar } from "@/components/navbar";
import { inlineCodeRenderer } from "@/lib/markdown";

const PRIVACY_POLICY_PATH = path.join(
  process.cwd(),
  "content",
  "legal",
  "braver-search",
  "privacy.md"
);

export const metadata: Metadata = {
  title: "Braver Search Privacy Policy",
  description: "Privacy Policy for the Braver Search Safari extension and app.",
};

async function getPrivacyPolicy() {
  return fs.readFile(PRIVACY_POLICY_PATH, "utf8");
}

export default async function BraverSearchPrivacyPage() {
  const content = await getPrivacyPolicy();

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 pb-24 md:max-w-4xl sm:py-24">
      <article className="prose max-w-none dark:prose-invert prose-headings:scroll-mt-24">
        <Markdown components={{ code: inlineCodeRenderer }}>{content}</Markdown>
      </article>
      <Navbar />
    </div>
  );
}
