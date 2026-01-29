"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function HomeTopBackground() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (!isHome) return null;

  return (
    <div className="absolute inset-x-0 top-0 z-0 overflow-hidden">
      <div className="relative h-[720px] sm:h-[520px] lg:h-[600px]">
        <div className="hidden lg:block h-full">
          <Image
            src="/assets/images/final.jpeg"
            alt="Hero background desktop"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="hidden sm:block lg:hidden h-full">
          <Image
            src="/assets/images/final-t.jpeg"
            alt="Hero background tablet"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="block sm:hidden h-full">
          <Image
            src="/assets/images/final-m.jpeg"
            alt="Hero background mobile"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </div>
  );
}
