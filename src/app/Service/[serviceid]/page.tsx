import Image from "next/image";

const services = [
  {
    serviceId: "ui-ux",
    title: "UIUX Project 1",
    author: "Elen Arose",
    date: "May 20, 2025",
    content:
      "This is the full content of the blog post where we explain how we helped a business grow online...",
    image: "/blog-02.png",
  },
];

export default function serviceId({ params }: { params: { serviceid: "string" } }) {
  const Service = services.find((b) => b.serviceId === params.serviceid);

  if (!Service) {
    return <div>SErvice not found</div>;
  }
  return (
    <div className="min-h-screen px-6 md:px-20 py-16">
      <h1 className="text-4xl font-bold mb-4">{Service.title}</h1>
      <p className="text-gray-500 mb-8">
        {Service.date} • {Service.author}
      </p>
      <Image
        src={Service.image}
        alt={Service.title}
        width={1000}
        height={500}
        className="w-full max-h-[500px] object-cover rounded-3xl mb-8"
      />
      <p className="text-lg text-gray-700 leading-relaxed">{Service.content}</p>
    </div>
  );
}
