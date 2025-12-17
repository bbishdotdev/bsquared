import { ModeSelector } from "@/components/mode-selector";
import { MobileRedirect } from "@/components/mobile-redirect";

export default function Home() {
  return (
    <main>
      <MobileRedirect />
      <ModeSelector />
    </main>
  );
}
