"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export function LogoTheme() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme || resolvedTheme;

  return (
    <>
      {currentTheme === "dark" && (
        <Image
          src="/logo_light.svg"
          width={125}
          height={50}
          alt="fastery.dev"
        />
      )}
      {currentTheme === "light" && (
        <Image src="/logo_light.svg" width={125} height={50} alt="fastery.dev" />
        )}
    </>
  );
}
