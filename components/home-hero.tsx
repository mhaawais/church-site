export default function HomeHero() {
  return (
    <section className="relative h-[720px] sm:h-[520px] lg:h-[600px]">
      <div className="mx-auto max-w-6xl h-full px-4 sm:px-6">
        
        {/* ALWAYS top-left like mobile */}
        <div className="h-full flex items-start pt-10">

          <div className="w-[65%] sm:w-[55%] lg:w-[46%]">
            <div className="bg-gray-200/90 backdrop-blur-sm rounded-xl p-5 sm:p-6 lg:p-8 shadow-xl">

              <span className="inline-flex items-center gap-2 rounded-full bg-purple-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Welcome
              </span>

              <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-purple-900">
                Apostle Victor Okonkwo
              </h1>

              <p className="mt-4 font-sans text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed">
                Apostle for non-denominational revolutionary church of
                spirit-filled believers. His mission is to preach the intrinsic
                righteousness and holiness as the basis for Christian living.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}







// export default function HomeHero() {
//   return (
//     <section className="relative h-[720px] sm:h-[520px] lg:h-[600px]">
//       <div className="mx-auto max-w-6xl h-full px-4 sm:px-6">
//         {/*
//           Mobile:  text at TOP-LEFT over the church area, narrow width so author+books stay visible on right
//           Tablet:  text vertically centered on the left ~45%
//           Desktop: text vertically centered on the left ~40%, right column reserved for author+books
//         */}
//         <div className="h-full flex items-start pt-6 sm:items-center sm:pt-0">

//           {/* TEXT — always LEFT side, never overlapping author/books on the right */}
//           <div
//             className="
//               w-[55%] sm:w-[48%] lg:w-[42%]
//             "
//           >
//             <div className="bg-gray-200/90 backdrop-blur-sm rounded-lg p-3 sm:p-5 shadow-md">
//               <span className="inline-flex items-center gap-2 rounded-full bg-purple-900/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
//                 <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
//                 Welcome
//               </span>

//               <h1 className="mt-2 sm:mt-3 font-serif text-xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-purple-900">
//                 Apostle Victor Okonkwo
//               </h1>

//               <p className="mt-1.5 sm:mt-3 font-sans text-[11px] sm:text-sm lg:text-base text-gray-800 leading-relaxed">
//                 Apostle for non-denominational revolutionary church of
//                 spirit-filled believers. His mission is to preach the intrinsic
//                 righteousness and holiness as the basis for Christian living.
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
