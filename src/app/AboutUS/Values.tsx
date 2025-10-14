import { Lightbulb, Users, Award } from "lucide-react";

const Values = () => {
  const values = [
    {
      title: "CREATIVITY",
      description:
        "We get to know your brand, goals, and audience. Through strategy calls.",
      icon: <Lightbulb size={40} className="text-black" />,
    },
    {
      title: "COLLABORATION",
      description:
        "We get to know your brand, goals, and audience. Through strategy calls.",
      icon: <Users size={40} className="text-black" />,
    },
    {
      title: "EXCELLENCE",
      description:
        "We get to know your brand, goals, and audience. Through strategy calls.",
      icon: <Award size={40} className="text-black" />,
    },
  ];

  return (
    // <section className="w-full px-6 py-16 bg-white text-black">
    //   <div className="grid grid-cols-2 max-w-6xl mx-auto text-center mb-12">
    //     <div className="col-span-1">
    //       <div className="flex  gap-2 bg-gray-100 px-4 py-1 rounded-full mb-4">
    //         <span className="text-sm font-medium">Values</span>
    //         <span className="text-gray-600">⚙️</span>
    //       </div>
    //       <h2 className="text-3xl md:text-6xl bg-black  mb-4  ">
    //         Guiding Lights of Our Works
    //       </h2>
    //     </div>
    //     <p className="text-gray-600 max-w-2xl mx-auto col-span-2">
    //       We believe great work comes from clear collaboration. Our process is
    //       designed to guide you from the first idea to final launch—smoothly,
    //       strategically, and creatively.
    //     </p>
    //   </div>

    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    //     {values.map((val, index) => (
    //       <div
    //         key={index}
    //         className="flex flex-col justify-between items-start text-left bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200"
    //       >
    //         <div>
    //           <h3 className="text-xl font-bold mb-2">{val.title}</h3>
    //           <p className="text-gray-600 text-sm">{val.description}</p>
    //         </div>
    //         <div className="mt-6">{val.icon}</div>
    //       </div>
    //     ))}
    //   </div>
    // </section>

    <section>
      <div>
        <div className="grid grid-cols-2 m-19">
          <div className="">
            <p className="text-black text-lg  flex">
              Values{" "}
              <span>
                <img src="badge.jpg" alt="" />
              </span>
            </p>
            <p className=" text-6xl text-black">Guiding Lights of Our Works</p>
          </div>
          <div className="">
            <p className="text-lg text-gray-500">
              We believe great work comes from clear collaboration. Our process
              is designed to guide you from the first idea to final
              launch—smoothly, strategically, and creatively
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
