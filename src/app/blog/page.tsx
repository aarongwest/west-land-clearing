import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles } from "../../data/articles";

export const metadata = {
  title: "Land Clearing Blog | West Land Clearing — Greater Houston",
  description: "Tips, guides, and insights on land clearing, forestry mulching, stump grinding, and site prep from West Land Clearing in Pearland, TX.",
  keywords: "land clearing blog, stump grinding tips, forestry mulching Greater Houston, site prep advice Pearland TX",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl">
        <div className="mb-6">
          <span className="inline-flex items-center text-sm text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-zinc-400 mr-2"></span>
            Land Clearing Insights
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
          Land Clearing Blog<br />
          <span className="text-zinc-400">Tips, Guides & Field Notes</span>
        </h1>

        <p className="text-lg text-zinc-400 mb-12">
          Practical advice on land clearing, forestry mulching, stump grinding, and site prep from the field — written for Greater Houston property owners, developers, and contractors.
        </p>

        {articles.length === 0 ? (
          <div className="p-8 bg-zinc-800/80 rounded-lg mb-16">
            <h2 className="text-xl font-semibold mb-4">Posts Coming Soon</h2>
            <p className="text-zinc-400 mb-4">
              We're publishing expert content on land clearing and site prep across Greater Houston. Check back soon.
            </p>
            <Link href="/contact" className="text-white hover:underline">
              Have a question? Contact us →
            </Link>
          </div>
        ) : (
          <div className="space-y-6 mb-16">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="block p-6 bg-zinc-800/50 rounded-lg border border-zinc-700 hover:border-zinc-500 transition-colors group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-semibold text-lg mb-2 group-hover:text-white transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-sm text-zinc-400 mb-3 line-clamp-2">{article.excerpt}</p>
                    <time className="text-xs text-zinc-500">
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <ArrowRight className="w-5 h-5 text-zinc-500 flex-shrink-0 mt-1 group-hover:text-white transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="p-8 bg-zinc-800/80 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Need a Land Clearing Estimate?</h2>
          <p className="text-zinc-400 mb-6">
            Tell us the acreage, type of brush or trees, and location. We'll get back to you with a real number — Pearland-based, fast scheduling across Greater Houston.
          </p>
          <Link href="/contact" className="btn-primary">
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
