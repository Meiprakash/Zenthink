import { Lightbulb, Users, Award } from "lucide-react";
import Image from "next/image";

const Values = () => {
  // const values = [
  //   {
  //     title: "CREATIVITY",
  //     description:
  //       "We get to know your brand, goals, and audience. Through strategy calls.",
  //     icon: <Lightbulb size={40} className="text-black" />,
  //   },
  //   {
  //     title: "COLLABORATION",
  //     description:
  //       "We get to know your brand, goals, and audience. Through strategy calls.",
  //     icon: <Users size={40} className="text-black" />,
  //   },
  //   {
  //     title: "EXCELLENCE",
  //     description:
  //       "We get to know your brand, goals, and audience. Through strategy calls.",
  //     icon: <Award size={40} className="text-black" />,
  //   },
  // ];

  return (


    <section>
      <div>
        <div className="grid grid-cols-2 m-19">
          <div className="">
            <p className="text-black text-lg  flex">
              Values{" "}
              <span>
                <Image src="/badge.jpg" width={16} height={16} alt="" />
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
