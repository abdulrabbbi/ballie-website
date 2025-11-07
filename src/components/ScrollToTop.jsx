import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Smoothly scrolls to top or to a hash target on route changes
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If the URL has a valid hash (e.g., #section), try to scroll to it
    if (hash && hash.length > 1) {
      try {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      } catch {
        // ignore invalid selectors like just '#'
      }
    }
    // Fallback: scroll to top on every pathname change
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}
