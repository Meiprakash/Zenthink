import Navbar from "@/app/Components/Navbar/Navbar";
import Image from "next/image";

const services = [
  {
    serviceId: "ui-ux",
    title: "UI-UX Design for Project ",
    author: "Elen Arose",
    date: "May 20, 2025",
    content:
      "This is the full content of the blog post where we explain how we helped a business grow online...",
    image: "/blog-02.png",
    tags: ["UI/UX Design", "Solving", "Design"],
    serv: "UI-UX Design",
  },
  {
    serviceId: "web-dev",
    title: "Web Design Design for Project ",
    author: "Elen Arose",
    date: "May 20, 2025",
    content:
      "This is the full content of the blog post where we explain how we helped a business grow online...",
    image: "/project-05.png",
    tags: ["UI/UX Design", "Solving", "Design"],
    serv: "Web Design",
  },
];

export default function serviceId({
  params,
}: {
  params: { serviceid: "string" };
}) {
  const Service = services.find((b) => b.serviceId === params.serviceid);

  if (!Service) {
    return <div>SErvice not found</div>;
  }
  return (
    <div className="bg-white">
      <Navbar />
      <div className=" grid grid-cols-2 p-10 mb-4 mt-10  ">
        <div className="col-span-1 sm:text-4xl md:text-6xl font-semibold text-black md:ml-29    ">
          {Service.title}
        </div>
        <div className="col-span-1 text-gray-600 text-lg sm:text-sm md:mr-50 md:ml-30  ">
          {" "}
          {Service.content}
          <div className="mt-10">
            {Service.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-md "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap3">
        <div className="col-span-1">
          <Image
            src={Service.image}
            alt={Service.title}
            width={1000}
            height={500}
            className="max-w-[900px] max-h-[600px] min-w-[350px] min-h-[300px] object-cover rounded-3xl  mb-8 md:ml-39 sm:ml-12"
          />
        </div>
        <div className="col-span-1 gap-6 md:ml-90 sm:ml-20">
          <h2 className="text-4xl text-black">General Info</h2>
          <div className="gap-13 mt-15 ml-2 ">
            <div className="mt-10 mb-10 text-xl text-gray-700">
              <p>Clients</p>
              <p className="text-black">Inovis</p>
            </div>
            <div className="mt-10 mb-10 text-xl text-gray-700">
              <p>Services</p>
              <p className="text-black">{Service.serv}</p>
            </div>
            <div className="mt-10 mb-10 text-xl text-gray-700">
              <p>Website Link</p>
              <a href="google.com" className="text-black">
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
