import Image from "next/image";

const firstRow = [
  { src: "/intercomn.jpg", alt: "Intercom" },
  { src: "/deliver.jpg", alt: "Deliveroo" },
  { src: "/ventures.jpg", alt: "Ventures" },
  { src: "/Monzo.jpg", alt: "Monzo" },
];

const secondRow = [
  { src: "/Gocardles.jpg", alt: "GoCardless" },
  { src: "/snyk.jpg", alt: "Snyk" },
  { src: "/comply.jpg", alt: "Comply Advantage" },
  { src: "/UI_path.jpg", alt: "UiPath" },
];

export default function InvestorsSection() {
  return (
    <section className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-2xl text-bold  text-black mb-12 leading-snug">
          Trusted investors and{" "}
          <span className="text-lime-400">Unicorn founders</span>
        </h2>

        {/* FIRST ROW */}
        <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-14 md:gap-40 mb-10">
          {firstRow.map((logo, i) => (
            <div
              key={i}
              className="opacity-95 grayscale flex justify-center items-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={100}
                className="object-contain max-w-[100px] sm:max-w-[120px] md:max-w-[160px]"
              />
            </div>
          ))}
        </div>

        {/* SECOND ROW */}
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-30">
          {secondRow.map((logo, i) => (
            <div
              key={i}
              className="opacity-95 grayscale flex justify-center items-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={100}
                className="object-contain max-w-[80px] sm:max-w-[100px] md:max-w-[130px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
