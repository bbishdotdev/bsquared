import { Navbar } from "@/components/navbar";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function BStackLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen pb-28">
      <ScrollToTop />
      {children}
      <Navbar />
    </div>
  );
}
