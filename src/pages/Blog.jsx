import { Helmet } from 'react-helmet-async';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      image: '/assets/images/Blog Default.jpg',
      category: 'Updates',
      date: '2025-10-26',
      dateText: 'Oct 26, 2025',
      title: 'Exciting Things Coming Soon',
      excerpt: 'Busy with study, will come up with exciting things very soon.',
      link: '#',
    },
    {
      id: 2,
      image: '/assets/images/Blog Default.jpg',
      category: 'Portfolio',
      date: '2025-10-26',
      dateText: 'Oct 26, 2025',
      title: 'Stay Tuned',
      excerpt: 'Busy with study, will come up with exciting things very soon.',
      link: '#',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Blog - MD. Showaib Rahman Tanveer</title>
        <meta name="description" content="Blog posts and articles by MD. Showaib Rahman Tanveer about web development, event organization, and technology" />
        <meta name="keywords" content="Blog, Articles, Web Development, Event Organization, Technology, SRTANVEER Blog" />
        <link rel="canonical" href="https://srtanveer.dev/blog" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://srtanveer.dev/blog" />
        <meta property="og:title" content="Blog - MD. Showaib Rahman Tanveer" />
        <meta property="og:description" content="Blog posts and articles by MD. Showaib Rahman Tanveer about web development, event organization, and technology" />
        <meta property="og:image" content="https://srtanveer.dev/assets/images/og-image.jpg" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://srtanveer.dev/blog" />
        <meta property="twitter:title" content="Blog - MD. Showaib Rahman Tanveer" />
        <meta property="twitter:description" content="Blog posts and articles by MD. Showaib Rahman Tanveer about web development, event organization, and technology" />
        <meta property="twitter:image" content="https://srtanveer.dev/assets/images/og-image.jpg" />
      </Helmet>

      <article className="blog active" data-page="blog">
        <header>
          <h2 className="h2 article-title">Blog</h2>
        </header>

        <section className="blog-posts">
          <ul className="blog-posts-list">
            {blogPosts.map((post) => (
              <li key={post.id} className="blog-post-item">
                <a href={post.link}>
                  <figure className="blog-banner-box">
                    <img src={post.image} alt={post.title} loading="lazy" />
                  </figure>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">{post.category}</p>
                      <span className="dot"></span>
                      <time dateTime={post.date}>{post.dateText}</time>
                    </div>
                    <h3 className="h3 blog-item-title">{post.title}</h3>
                    <p className="blog-text">{post.excerpt}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}

export default Blog;
