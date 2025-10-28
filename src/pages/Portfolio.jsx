import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

function Portfolio() {
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: 'Rocketflow',
      image: '/assets/images/Rocketflow.webp',
      liveUrl: 'https://beta.rocketflow.biz/',
      githubUrl: 'https://github.com/srtanveer/rocketflow',
      technologies: ['Next.js', 'React', 'Tailwind CSS'],
    },
    {
      id: 2,
      title: 'Hack The AI',
      image: '/assets/images/hacktheai.webp',
      liveUrl: 'https://hacktheai.smythos.com/',
      githubUrl: 'https://github.com/srtanveer/hacktheai-website',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 3,
      title: 'GUCC Website',
      image: '/assets/images/gucc-website.webp',
      liveUrl: 'https://gucc.green.edu.bd/',
      githubUrl: 'https://github.com/GreenUniversityComputerClub/gucc',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      id: 4,
      title: 'July-24',
      image: '/assets/images/july24bd.webp',
      liveUrl: 'https://july24bd.vercel.app',
      githubUrl: 'https://github.com/srtanveer/JULY-24',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      id: 5,
      title: 'Faijan Solution',
      image: '/assets/images/faijan solutions.webp',
      liveUrl: 'https://faijansolutions.vercel.app',
      githubUrl: 'https://github.com/srtanveer/Faijan-Solution',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
    },
    {
      id: 6,
      title: 'Perfect Pathway',
      image: '/assets/images/Perfect Pathway.webp',
      liveUrl: 'https://perfect-pathway.vercel.app',
      githubUrl: 'https://github.com/srtanveer/perfect-pathway',
      technologies: ['Python', 'Algorithms', 'Data Structures'],
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const searchLower = searchTerm.toLowerCase();
    const titleMatch = project.title.toLowerCase().includes(searchLower);
    const techMatch = project.technologies.some((tech) =>
      tech.toLowerCase().includes(searchLower)
    );
    return titleMatch || techMatch;
  });

  const handleShowMore = () => {
    window.open('https://github.com/srtanveer?tab=repositories', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Portfolio - MD. Showaib Rahman Tanveer</title>
        <meta name="description" content="Portfolio and projects by MD. Showaib Rahman Tanveer - Web applications built with React, Next.js, and modern technologies" />
        <meta name="keywords" content="Portfolio, Web Development Projects, React Projects, Next.js Projects, Frontend Development, SRTANVEER Projects" />
        <link rel="canonical" href="https://srtanveer.dev/portfolio" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://srtanveer.dev/portfolio" />
        <meta property="og:title" content="Portfolio - MD. Showaib Rahman Tanveer" />
        <meta property="og:description" content="Portfolio and projects by MD. Showaib Rahman Tanveer - Web applications built with React, Next.js, and modern technologies" />
        <meta property="og:image" content="https://srtanveer.dev/assets/images/og-image.jpg" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://srtanveer.dev/portfolio" />
        <meta property="twitter:title" content="Portfolio - MD. Showaib Rahman Tanveer" />
        <meta property="twitter:description" content="Portfolio and projects by MD. Showaib Rahman Tanveer - Web applications built with React, Next.js, and modern technologies" />
        <meta property="twitter:image" content="https://srtanveer.dev/assets/images/og-image.jpg" />
      </Helmet>

      <article className="portfolio active" data-page="portfolio">
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        <section className="projects">
          {/* Search Box */}
          <div className="search-box">
            <input
              type="text"
              id="projectSearch"
              className="search-input"
              placeholder="Search by project name or technology (React, Next.js, etc.)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ion-icon name="search-outline" className="search-icon"></ion-icon>
          </div>

          <ul className="project-list">
            {filteredProjects.map((project) => (
              <li
                key={project.id}
                className="project-item active"
                data-filter-item
              >
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-link"
                      title="Live Preview"
                    >
                      <ion-icon name="eye-outline"></ion-icon>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-link"
                      title="Source Code"
                    >
                      <ion-icon name="logo-github"></ion-icon>
                    </a>
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tech-stack">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          <div className="show-more-container">
            <button className="show-more-btn" id="showMoreBtn" onClick={handleShowMore}>
              <span>Show More Projects</span>
              <ion-icon name="chevron-down-outline"></ion-icon>
            </button>
          </div>
        </section>
      </article>
    </>
  );
}

export default Portfolio;
