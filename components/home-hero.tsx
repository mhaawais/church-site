export default function HomeHero() {
  return (
    <section className="relative h-[720px] sm:h-[520px] lg:h-[600px]">
      <div className="mx-auto max-w-7xl h-full px-4 sm:px-6">
        <div className="h-full flex items-start sm:items-center">
          <div className="w-full sm:w-[52%] lg:w-[48%] pt-24 sm:pt-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow">
              Apostle Victor Okonkwo
            </h1>

            <p className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed drop-shadow">
              Apostle for non-denominational revolutionary church of spirit-filled
              believers. His mission is to preach the intrinsic righteousness and
              holiness as the basis for Christian living.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
