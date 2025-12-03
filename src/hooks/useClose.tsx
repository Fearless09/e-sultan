import { useEffect, useRef } from "react";

/**
 * A custom hook that handles closing functionality when clicking outside or pressing Escape key.
 * @param onClose - The callback function to be called when Escape key is pressed or clicking outside
 * @returns A ref object to attach to the element that should trigger the close on outside click
 * @throws {Error} If onClose is not a function
 */

export default function useClose(
  onClose: () => void,
): React.RefObject<HTMLElement | null> {
  const ref = useRef<HTMLElement>(null);

  if (typeof onClose !== "function") {
    throw new Error("useClose: onClose must be a function");
  }

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    // Add event listeners
    document.addEventListener("keydown", handleEscapeKey);
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return ref;
}
