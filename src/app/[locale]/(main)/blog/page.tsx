import { PageHeader } from "@/components/ui/PageHeader";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { BlogCategories } from "@/components/blog/BlogCategories";
import { BlogSearch } from "@/components/blog/BlogSearch";

export const metadata = {
  title: "Blog - Company Profile",
  description: "Read our latest articles and insights",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-16 md:pt-20">
      <PageHeader
        title="Blog"
        description="Insights, news, and updates from our team"
        heroImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=80"
      />
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <BlogSearch />
              <BlogCategories />
            </aside>
            <div className="lg:col-span-3">
              <BlogGrid />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
