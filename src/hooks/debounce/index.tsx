import { useRef } from "react";

export const useDebounce = (fn: Function, delay: number) => {
  const timeoutRef = useRef<any>();

  function debouncedFn(...args: any) {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  }

  return debouncedFn;
};
