"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const HEADER_H = 64; // h-16 = 64px

function pickSrc(w: number) {
  if (w < 640) return "/assets/images/mobile-09.jpeg"; // mobile
  if (w < 1024) return "/assets/images/tablet-08.jpeg"; // tablet
  return "/assets/images/desktop-07.jpeg"; // desktop
}

export default function HomeTopBackground() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [src, setSrc] = useState("/assets/images/desktop-07.jpeg");

  useEffect(() => {
    const update = () => setSrc(pickSrc(window.innerWidth));
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!isHome) return null;

  return (
    <div className="absolute inset-x-0 top-0 z-0 overflow-hidden">
      {/* + header height so background reaches the exact bottom of the hero */}
      <div className="relative h-[calc(720px+64px)] sm:h-[calc(520px+64px)] lg:h-[calc(600px+64px)]">
        <Image
          src={src}
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* No overlay => real image colors */}
      </div>
    </div>
  );
}
