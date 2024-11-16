import { useEffect } from "react";

export function useHoverOutside(ref, handler, enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler();
    };

    document.addEventListener("mouseover", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mouseover", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, enabled]);
}
