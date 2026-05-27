import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles } from "../../../data/articles";
import { Metadata } from "next";

export const dynamicParams = true;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) {
    return { title: "Article Not Found | West Land Clearing" };
  }
  return {
    title: `${article.title} | West Land Clearing`,
    description: article.excerpt,
    keywords: `${article.title.toLowerCase()}, land clearing Greater Houston, forestry mulching Pearland TX, stump grinding`,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
    },
    alternates: {
      canonical: `https://westlandclearing.com/blog/${article.slug}`,
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <p className="text-zinc-400 mb-8">The article you're looking for could not be found.</p>
        <Link href="/blog" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const related = articles
    .filter((a) => a.slug !== article.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: "Aaron West",
      url: "https://west.industries",
    },
    publisher: {
      "@type": "Organization",
      name: "West Land Clearing",
      url: "https://westlandclearing.com",
    },
    url: `https://westlandclearing.com/blog/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <div className="mb-4">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
              ← Blog
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">{article.title}</h1>
          <time className="block text-sm text-zinc-500 mb-4">
            {new Date(article.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <p className="text-zinc-400 mb-8">{article.excerpt}</p>

          <div
            className="prose prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-10 p-6 bg-zinc-800/50 border border-zinc-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Need a Land Clearing Estimate?</h3>
            <p className="text-zinc-400 mb-4 text-sm">
              West Land Clearing serves Greater Houston — Brazoria, Fort Bend, and Harris County. Pearland-based, fast scheduling.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 btn-primary text-sm">
              Request a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {related.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">More Articles</h3>
              <div className="space-y-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="block p-5 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:border-zinc-500 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-sm group-hover:text-white transition-colors mb-1">{r.title}</h4>
                        <p className="text-xs text-zinc-500 line-clamp-1">{r.excerpt}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-zinc-500 ml-4 flex-shrink-0 group-hover:text-white transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
