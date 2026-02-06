import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero2 = () => {
  return (
    <section
      id="book-2"
      aria-labelledby="hero2-heading"
      className="relative w-full overflow-hidden bg-[#8b5f45]"
    >
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-6 sm:px-6 md:py-8 lg:grid-cols-2 lg:gap-14 lg:px-8">
        {/* IMAGE CARD */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="bg-black p-4 sm:p-5 rounded-md w-full max-w-[360px] shadow-2xl">
            <Image
              src="/assets/images/author-image.jpeg"
              alt="Book Image"
              width={360}
              height={480}
              className="w-full h-auto rounded-md object-cover"
              priority={false}
            />
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-800 px-4 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-sm ring-1 ring-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Author
          </span>

          <h2
            id="hero2-heading"
            className="mt-3 text-3xl font-extrabold leading-tight text-black sm:text-4xl md:text-5xl font-serif"
          >
            Apostle Victor As an Author
          </h2>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            ullam facere, quaerat iure quos, cum dignissimos accusantium hic
            molestiae quia adipisci fuga possimus. Minus repellendus alias
            voluptatum excepturi, provident sapiente?
          </p>

          <div className="mt-6">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl bg-red-800 px-7 py-3.5 text-base md:text-lg font-extrabold font-sans tracking-wide text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-[1px] hover:brightness-110 active:translate-y-0"
            >
              Explore More!
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/75">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
              Gift
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
              Liberty
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
              Renewal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;








// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Hero2 = () => {
//   return (
//     <section
//       id="book-2"
//       aria-labelledby="hero2-heading"
//       className="relative w-full overflow-hidden bg-[#8b5f45]"
//     >
//       {/* subtle gradient accents */}
//       <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(50%_50%_at_20%_0%,#1e5a50_0%,transparent_60%),radial-gradient(40%_40%_at_100%_60%,#0b4640_0%,transparent_55%)]" />

//       <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8">
//         {/* IMAGE CARD */}
//         <div className="order-1 lg:order-2 flex justify-center">
//           <div className="bg-black p-6 rounded-md w-full max-w-[350px] shadow-2xl">
//             <Image
//               src="/assets/images/author-image.jpeg"
//               alt="Book Image"
//               width={300}
//               height={400}
//               className="w-full h-auto rounded-md object-cover"
//             />
//           </div>
//         </div>

//         {/* TEXT CONTENT */}
//         <div className="order-2 lg:order-1">
//           <span className="inline-flex items-center gap-2 rounded-full bg-red-800 px-4 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-sm ring-1 ring-white/10">
//             <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
//             Author —
//           </span>

//           <h1
//             id="hero2-heading"
//             className="mt-3 text-3xl font-extrabold leading-tight text-black sm:text-4xl md:text-5xl font-serif"
//           >
//             Apostle Victor As an Author
//             {/* <span className="block text-lg font-semibold text-emerald-300/90">
//               (Spanish Edition)
//             </span> */}
//           </h1>

//           <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
//            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ullam facere, quaerat iure quos, cum dignissimos 
//            accusantium hic molestiae quia adipisci fuga possimus. Minus repellendus alias voluptatum excepturi, provident sapiente?
//           </p>

//           {/* <p className="mt-4 text-sm font-medium text-white/80 sm:text-base">
//             As:
//             <br />
//             <span className="text-green-400">An Author</span>
//           </p> */}

//           <div className="mt-7">
//             <Link href={"/about"}>
//               <button className="font-extrabold inline-flex items-center justify-center rounded-xl bg-red-800 px-7 py-3.5 text-base md:text-lg font-sans tracking-wide text-black shadow-[0_10px_30px_rgba(16,185,129,0.25)] transition-all duration-300 hover:translate-y-[-1px] hover:brightness-150 active:translate-y-0">
//                 Explore More!
//               </button>
//             </Link>
//           </div>

//           <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/70">
//             <span className="inline-flex items-center gap-2">
//               <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
//                 Gift
//             </span>
//             <span className="inline-flex items-center gap-2">
//               <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
//               Liberty
//             </span>
//             <span className="inline-flex items-center gap-2">
//               <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
//               Renewal
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero2;