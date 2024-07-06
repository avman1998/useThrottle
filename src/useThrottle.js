import { useRef } from "react";

export default function useThrottle(method, delay) {
  let lastCall = useRef(0);
  return () => {
    let now = Date.now();
    if (now - lastCall.current >= delay) {
      method();
      lastCall.current = now;
    }
  };
}
