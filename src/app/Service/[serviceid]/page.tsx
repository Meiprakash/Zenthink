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
    PojectOverView:
      " Welcome to innovis, where cutting-edge technology meets exceptional design. The innovis  Website Template is a solution crafted for emerging AI startups looking to establish a strong online presence. This template seamlessly blends advanced with a sleek and modern design, providing a platform to showcase your AI innovations and captivate your audience.",
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
  {
    serviceId: "branding",
    title: "Branding  Project ",
    author: "Elen Arose",
    date: "May 20, 2025",
    content: "Create memorable brands that stand out in the market.",
    image: "/project-04.png",
    tags: ["UI/UX Design", "Solving", "Design"],
    serv: "Branding",
  },
  {
    serviceId: "motion",
    title: "Branding  Project ",
    author: "Elen Arose",
    date: "May 20, 2025",
    content: "Bring stories to life with animation and motion graphics.",
    image: "/project-03.png",
    tags: ["UI/UX Design", "Solving", "Design"],
    serv: "Branding",
  },
];

export default function serviceId({
  params,
}: {
  params: { serviceid: "string" };
}) {
  const Service = services.find((b) => b.serviceId === params.serviceid); //in this place seriveId ngarathu params la vara endpoint.

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
        <div className="col-span-1 text-gray-600 md:text-lg  sm:text-sm md:mr-50 md:ml-30  ">
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
            className="max-w-[900px] md:w-500 max-h-[600px] sm:w-100  min-h-[300px] object-cover rounded-3xl  mb-8 md:ml-39 sm:ml-12"
          />
        </div>
        <div className="col-span-1 gap-6  md:ml-90 sm:ml-30  ">
          <h2 className="md:text-4xl sm:text-xl text-black">General Info</h2>
          <div className="gap-13 md:mt-15 ml-2 ">
            <div className="md:mt-10 sm:mt-5 md:mb-10 md:text-xl sm:text-lg text-gray-700">
              <p>Clients</p>
              <p className="text-black">Inovis</p>
            </div>
            <div className="md:mt-10 sm:mt-5 md:mb-10 md:text-xl sm:text-lg text-gray-700">
              <p>Services</p>
              <p className="text-black">{Service.serv}</p>
            </div>
            <div className="md:mt-10 sm:mt-5 md:mb-10 md:text-xl sm:text-lg text-gray-700">
              <p>Website Link</p>
              <a href="www.google.com" className="text-black underline">
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="col-span-1 text-black"> left side</div>
        <div className="col-span-1 text-black">right side</div>
      </div>
    </div>
  );
}
