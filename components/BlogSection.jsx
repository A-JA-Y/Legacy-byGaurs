"use client"
import Image from "next/image";
import { blogData } from "@/data/blogData";
import { useRouter } from "next/navigation";
import Reveal from "./Reveal";

export default function BlogSection() {
  const router = useRouter();

  const latestBlogs = [...blogData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className="w-full bg-white py-16 px-6" id="blog">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* Heading */}
        <Reveal className="text-center">
          <h6 className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3">
            Our Blog
          </h6>
          <h2 className="text-3xl font-bold text-gray-900">
            Insights & Investment Guides
          </h2>
        </Reveal>

        {/* Latest Blogs */}
        <div className="grid md:grid-cols-3 gap-6">
          {latestBlogs.map((item, i) => (
            <Reveal key={item.id} delay={i * 100}>
              <div
                onClick={() => router.push(`/blogs/${item.slug}`)}
                className="card-lift group bg-[#FAF8F4] rounded-lg overflow-hidden shadow cursor-pointer h-full"
              >
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="w-full h-[180px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-[#DCA54A] mb-2 uppercase tracking-wider">{item.category}</p>
                  <h3 className="font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-[#C49A2B]">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#C49A2B] mt-3 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    Read article <span aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Global Read More Button */}
        <Reveal className="text-center mt-6">
          <button
            onClick={() => router.push("/blogs")}
            className="btn-shine px-6 py-3 text-sm font-medium text-white bg-[#DCA54A] rounded cursor-pointer hover:bg-[#C49A2B] hover:shadow-lg hover:shadow-[#DCA54A]/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            Read More Articles
          </button>
        </Reveal>
      </div>
    </section>
  );
}
