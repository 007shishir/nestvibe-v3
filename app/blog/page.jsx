import { getBlogs } from "@/lib/fetchData";
import BlogGrid from "@/components/blog/BlogGrid";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

export default async function BlogPage() {
  const posts = await getBlogs();

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
            NestVibe <span className="text-[#00f0c0]">Insights</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Expert advice on the Dhaka real estate market, home decor trends, and investment tips.
          </p>
        </header>

        <BlogGrid initialPosts={posts} />
      </div>
      <Footer />
    </main>
  );
}