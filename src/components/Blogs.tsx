import type React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface BlogItem {
  id: number;
  title: string;
  description: string;
  publishedDate: string;
  readTime: string;
  tags: string[];
  mediumLink: string;
}

interface RSSItem {
  title: string;
  pubDate: string;
  link: string;
  description: string;
  categories: string[];
}

interface RSSResponse {
  status: string;
  items: RSSItem[];
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const extractReadTime = (description: string): string => {
    // Simple estimation: ~200 words per minute
    const wordCount = description.replace(/<[^>]*>/g, '').split(' ').length;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));
    return `${readTime} min read`;
  };

  const extractDescription = (htmlDescription: string): string => {
    // Remove HTML tags and get first paragraph
    const textContent = htmlDescription.replace(/<[^>]*>/g, '');
    const sentences = textContent.split('.').slice(0, 2).join('.');
    return sentences.length > 150 ? sentences.substring(0, 150) + '...' : sentences + '.';
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@omtita.codes');
        
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }

        const data: RSSResponse = await response.json();
        
        if (data.status !== 'ok') {
          throw new Error('RSS API returned error status');
        }

        const formattedBlogs: BlogItem[] = data.items.map((item, index) => ({
          id: index + 1,
          title: item.title,
          description: extractDescription(item.description),
          publishedDate: formatDate(item.pubDate),
          readTime: extractReadTime(item.description),
          tags: item.categories || [],
          mediumLink: item.link
        }));

        setBlogs(formattedBlogs);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <section id="blogs" className="py-20 bg-gradient-to-b from-muted/20 via-background to-background dark:from-background dark:via-background dark:to-muted/10">
        <div className="container mx-auto px-4 md:px-8 space-y-12">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-6 bg-muted rounded w-32 mx-auto mb-4"></div>
              <div className="h-8 bg-muted rounded w-64 mx-auto mb-2"></div>
              <div className="h-4 bg-muted rounded w-96 mx-auto"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="rounded-2xl border border-border/70 bg-card/60 p-6 h-80">
                  <div className="h-4 bg-muted rounded w-24 mb-4"></div>
                  <div className="h-6 bg-muted rounded w-full mb-2"></div>
                  <div className="h-4 bg-muted rounded w-full mb-4"></div>
                  <div className="flex gap-2 mb-6">
                    <div className="h-6 bg-muted rounded w-16"></div>
                    <div className="h-6 bg-muted rounded w-20"></div>
                  </div>
                  <div className="h-10 bg-muted rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="blogs" className="py-20 bg-gradient-to-b from-muted/20 via-background to-background dark:from-background dark:via-background dark:to-muted/10">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className="text-red-500 mb-4">Failed to load blogs: {error}</div>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="blogs" className="py-20 bg-gradient-to-b from-muted/20 via-background to-background dark:from-background dark:via-background dark:to-muted/10">
      <div className="container mx-auto px-4 md:px-8 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
            Latest writings
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Thoughts on development</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing insights, tutorials, and experiences from building modern web applications. 
            Published on Medium for the developer community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm shadow-[0_20px_60px_-24px_rgba(0,0,0,0.45)] hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.25)] transition-all duration-300 flex flex-col h-full"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent" />
              </div>

              <div className="relative p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{blog.publishedDate}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                  </div>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-xs font-semibold text-muted-foreground bg-background/70 shrink-0">
                    {String(blog.id).padStart(2, "0")}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                  {blog.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.tags.map((tag) => (
                    <span
                      key={`${blog.id}-${tag}`}
                      className="px-2 py-1 text-xs font-medium rounded-md bg-primary/5 text-primary border border-primary/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <a
                    href={blog.mediumLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-lg hover:bg-primary/90 w-full justify-center"
                  >
                    <span>Read on Medium</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://medium.com/@omtita.codes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
          >
            <span>View all articles on Medium</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;