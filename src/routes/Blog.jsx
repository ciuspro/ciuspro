import { blogPosts } from '../data/faqs'

const Blog = () => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            CiusPro <span className="text-accent">Blog</span>
          </h1>
          <p className="text-xl text-muted">
            Gaming tips, strategies, and industry insights
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="card p-8 hover:scale-[1.02] transition-transform duration-300">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center md:text-left">
                  <div className="text-6xl mb-4">{post.image}</div>
                </div>
                
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-4 text-sm text-muted mb-3">
                    <span>{formatDate(post.date)}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4 hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <button className="ghost-btn">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted mb-6">
              Get the latest gaming tips, strategies, and CiusPro updates delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-surface border border-surface-2 rounded-lg text-text placeholder-muted focus:outline-none focus:border-accent"
              />
              <button className="cta text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
