"use client";

import { useState, useCallback } from "react";

type UseToggleReturn = readonly [boolean, (state?: boolean) => void];

/**
 * A custom hook that provides toggle functionality
 * @param initialState - The initial state of the toggle (defaults to false)
 * @returns An object containing the current toggle state and a memoized function to toggle it
 */
export const useToggle = (initialState: boolean = false): UseToggleReturn => {
  const [toggle, setToggle] = useState<boolean>(initialState);

  const toggleFn = useCallback(
    (state?: boolean) => setToggle((prev) => state ?? !prev),
    [],
  );

  return [toggle, toggleFn] as const;
};
