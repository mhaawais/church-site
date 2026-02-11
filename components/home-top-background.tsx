"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function pickSrc(w: number) {
  if (w < 640) return "/assets/images/Mobile.jpeg";
  if (w < 1024) return "/assets/images/Tablet.jpeg";
  return "/assets/images/Desktop.jpeg";
}

export default function HomeTopBackground() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [src, setSrc] = useState("/assets/images/Desktop.jpeg");

  useEffect(() => {
    const update = () => setSrc(pickSrc(window.innerWidth));
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!isHome) return null;

  return (
  <div className="absolute inset-x-0 top-0 z-0 overflow-hidden pointer-events-none">
    <div className="relative h-[calc(720px+64px)] sm:h-[calc(520px+64px)] lg:h-[calc(600px+64px)]">
      <Image
        src={src}
        alt="Hero background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_top] sm:object-[center_top] lg:object-[center_center]"
      />
    </div>
  </div>
);
}
