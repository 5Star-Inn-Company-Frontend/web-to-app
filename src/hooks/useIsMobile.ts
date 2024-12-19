// src/components/hooks/use-mobile.ts
import { useState, useEffect } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this value based on your design breakpoints
    };

    // Set initial value
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}
