// "use client";
// import { useEffect, useState } from "react";
// import { motion, animate } from "framer-motion";

// interface StatCardProps {
//   value: number;       // The number to display
//   label: string;       // Label text
//   suffix?: string;     // Optional suffix like K+, M, %
// }

// const stats: StatCardProps[] = [
//   { value: 650, label: "Award winning" },
//   { value: 1000, label: "Project Done", suffix: "K+" },
//   { value: 95, label: "Happy Client", suffix: "%" },
//   { value: 2000, label: "Projects Designed", suffix: "M" },
// ];

// export default function StatsSection() {
//   return (
//     <section className="bg-white py-16">
//       <div className="max-w-6xl mx-auto grid sm:grid-cols-4  md:grid-cols-4 text-center gap-10">
//         {stats.map((stat, i) => (
//           <StatCard key={i} {...stat} />
//         ))}
//       </div>
//     </section>
//   );
// }

// function StatCard({ value, label, suffix = "" }: StatCardProps) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const controls = animate(0, value, {
//       duration: 2,
//       ease: "easeOut",
//       onUpdate: (v) => setCount(Math.floor(v)),
//     });
//     return () => controls.stop();
//   }, [value]);

//   // Display the formatted value according to suffix
//   const formattedValue = () => {
//     if (suffix === "K+") return (count / 1000).toFixed(0);
//     if (suffix === "M") return (count / 1000).toFixed(0); // you can divide differently if needed
//     return count;
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1.2 }}
//       viewport={{ once: true }}
//       className="flex flex-col items-center"
//     >
//       <h2 className="text-6xl text-black">
//         {formattedValue()}
//         {suffix}
//       </h2>
//       <p className="text-gray-600 mt-2">{label}</p>
//     </motion.div>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
}

const stats: StatCardProps[] = [
  { value: 650, label: "Award winning" },
  { value: 1000, label: "Project Done", suffix: "K+" },
  { value: 95, label: "Happy Client", suffix: "%" },
  { value: 2000, label: "Projects Designed", suffix: "M" },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-16">
      {/* Make it 4 in a row even on mobile */}
      <div className="max-w-6xl mx-auto grid grid-cols-4 text-center gap-6 sm:gap-8 md:gap-10">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>
    </section>
  );
}

function StatCard({ value, label, suffix = "" }: StatCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.floor(v)),
    });
    return () => controls.stop();
  }, [value]);

  const formattedValue = () => {
    if (suffix === "K+") return (count / 1000).toFixed(0);
    if (suffix === "M") return (count / 1000).toFixed(0);
    return count;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-black">
        {formattedValue()}
        {suffix}
      </h2>
      <p className="text-gray-600 mt-2 text-sm sm:text-base">{label}</p>
    </motion.div>
  );
}
