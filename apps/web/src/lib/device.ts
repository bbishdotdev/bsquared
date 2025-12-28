// Detect if user is on mobile device
export function isMobileDevice(): boolean {
  if (typeof window === "undefined") return false;

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

// Check if user has dismissed the mobile banner
export function hasDismissedMobileBanner(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("dismissed-mobile-banner") === "true";
}

// Set the dismissed state
export function dismissMobileBanner(): void {
  if (typeof window === "undefined") return;
  localStorage.setItem("dismissed-mobile-banner", "true");
}

