"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isMobileDevice } from "@/lib/device";

export function MobileRedirect() {
  const router = useRouter();

  useEffect(() => {
    if (isMobileDevice()) {
      router.replace("/normal");
    }
  }, [router]);

  return null;
}
