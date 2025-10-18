import Image from "next/image";

const blogs = [
  {
    slug: "case-study",
    title: "Case Study: How We Helped Grow Online",
    author: "Elen Arose",
    date: "May 20, 2025",
    content:
      "This is the full content of the blog post where we explain how we helped a business grow online...",
    image: "/blog-02.png",
  },
  {
    slug: "design-mistakes",
    title: "Top Mistakes Made With Web Design Process",
    author: "Jenny Kia",
    date: "May 20, 2025",
    content:
      "In this article, we explore the biggest mistakes designers make and how to avoid them for better UX...",
    image: "/blog-07.png",
  },
];

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-600">
          404 | Blog Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 md:px-20 py-16">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-8">
        {blog.date} • {blog.author}
      </p>
      <Image
        src={blog.image}
        alt={blog.title}
        width={1000}
        height={500}
        className="w-full max-h-[500px] object-cover rounded-3xl mb-8"
      />
      <p className="text-lg text-gray-700 leading-relaxed">{blog.content}</p>
    </div>
  );
}
