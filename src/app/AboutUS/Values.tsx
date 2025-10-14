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
      <div className="grid grid-cols-3 gap-5 m-7 ml-35 mr-35 ">
        {/* Column 1 */}
        <div className="col-span-1 row-span-2 bg-gray-100 p-4 flex flex-col items-center justify-center border rounded-2xl">
          <h2 className="text-black text-xl font-bold mb-2">CREATIVITY</h2>
          <p className="mb-4 text-start text-gray-700">
            We get to know your brand, goals, and audience. Through strategy
            calls.
          </p>
          <Image
            src="/value-card-img-01.jpg"
            width={200}
            height={200}
            alt="1stcard"
            className="object-contain"
          />
        </div>

        {/* Column 2 */}
        <div className="col-span-1 flex flex-col gap-3">
          <div className=" bg-gray-100 p-4 flex flex-row items-center gap-4 border rounded-2xl">
            <Image
              src="/value-card-img-02.jpg"
              width={100}
              height={100}
              alt="2ndcard"
              className="object-contain"
            />
            <div>
              <h2 className="text-black text-lg font-bold mb-1">
                COLLABORATION
              </h2>
              <p className="text-sm">
                We get to know your brand, goals, and audience. Through strategy
                calls.
              </p>
            </div>
          </div>

          <div className=" bg-gray-100 p-4 flex flex-row items-center gap-4 border rounded-2xl">
            <Image
              src="/value-card-img-03.jpg"
              width={100}
              height={100}
              alt="3rdcard"
              className="object-contain"
            />
            <div>
              <h2 className="text-black text-lg font-bold mb-1">INNOVATION</h2>
              <p className="text-sm">
                We get to know your brand, goals, and audience. Through strategy
                calls.
              </p>
            </div>
          </div>
        </div>

        {/* Column 3*/}
        <div className="col-span-1 row-span-2  bg-gray-100 p-4 flex flex-col items-center justify-center border rounded-2xl">
          <h2 className="text-black text-xl font-bold mb-2">EXCELLENCE</h2>
          <p className="mb-4 text-center">
            We get to know your brand, goals, and audience. Through strategy
            calls.
          </p>
          <Image
            src="/value-card-img-04.jpg"
            width={200}
            height={200}
            alt="4thcard"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Values;
