import { Helmet } from 'react-helmet-async';
import DownloadCV from '../components/DownloadCV';

function Resume() {
  return (
    <>
      <Helmet>
        <title>Resume - MD. Showaib Rahman Tanveer</title>
        <meta name="description" content="Education, experience, and skills of MD. Showaib Rahman Tanveer - Software Engineer and Community Lead" />
        <meta name="keywords" content="Resume, CV, Education, Experience, Skills, Software Engineer, Community Lead, SRTANVEER" />
        <link rel="canonical" href="https://srtanveer.dev/resume" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://srtanveer.dev/resume" />
        <meta property="og:title" content="Resume - MD. Showaib Rahman Tanveer" />
        <meta property="og:description" content="Education, experience, and skills of MD. Showaib Rahman Tanveer - Frontend Developer and Community Lead" />
        <meta property="og:image" content="https://srtanveer.dev/assets/images/og-image.jpg" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://srtanveer.dev/resume" />
        <meta property="twitter:title" content="Resume - MD. Showaib Rahman Tanveer" />
        <meta property="twitter:description" content="Education, experience, and skills of MD. Showaib Rahman Tanveer - Frontend Developer and Community Lead" />
        <meta property="twitter:image" content="https://srtanveer.dev/assets/images/og-image.jpg" />
      </Helmet>

      <article className="resume active" data-page="resume">
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>

        {/* Download CV Button */}
        <DownloadCV />

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>
            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">B.Sc. in Computer Science and Engineering</h4>
              <span>Expected January, 2026</span>
              <p className="timeline-text">
                Green University of Bangladesh — Currently pursuing a Bachelor's degree in Computer Science and Engineering 
                with focus on software development, algorithms, and data structures.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">HSC in Science</h4>
              <span>2020 — GPA 4.83/5.00</span>
              <p className="timeline-text">
                GOVT. Adamjeenagar MW College — Completed Higher Secondary Certificate with a GPA of 4.83 out of 5.00, 
                demonstrating strong academic performance.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">SSC in Science</h4>
              <span>2018 — GPA 4.56/5.00</span>
              <p className="timeline-text">
                A.K. High School and College — Completed Secondary School Certificate with a GPA of 4.56 out of 5.00.
              </p>
            </li>
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="briefcase-outline"></ion-icon>
            </div>
            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Frontend Developer</h4>
              <span>October 2025 — Present</span>
              <p className="timeline-text">
                Digi5 Ltd — Working as a Frontend Developer Intern, building modern web applications using React, 
                Next.js, and Tailwind CSS.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Computer Operator</h4>
              <span>August 2020 — September 2025</span>
              <p className="timeline-text">
                Faijan Solutions — Self-employed computer operator providing various digital services including 
                documentation, design, and technical support.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Web Service Management Officer</h4>
              <span>February 2023 — May 2023</span>
              <p className="timeline-text">
                Rang Bangladesh Ltd. — Managed web services on a contractual basis, 
                ensuring accuracy and efficiency in all data management tasks.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Freelance Data Entry Specialist</h4>
              <span>April 2018 — February 2023</span>
              <p className="timeline-text">
                UpWork — Handled various projects with high accuracy and efficiency, maintaining excellent client satisfaction ratings.
              </p>
            </li>
          </ol>
        </section>

        <section className="skill">
          <h3 className="h3 skills-title">Skills Summary</h3>

          <div className="skills-summary-container">
            {/* Languages */}
            <div className="skill-category">
              <div className="skill-category-header">
                <ion-icon name="code-slash-outline"></ion-icon>
                <h4 className="h4">Languages:</h4>
              </div>
              <p className="skill-list-text">Python, C++, JavaScript</p>
            </div>

            {/* Frontend Technologies */}
            <div className="skill-category">
              <div className="skill-category-header">
                <ion-icon name="browsers-outline"></ion-icon>
                <h4 className="h4">Frontend:</h4>
              </div>
              <p className="skill-list-text">React.js, Next.js, HTML5, CSS3, Tailwind CSS, JavaScript (ES6+)</p>
            </div>

            {/* Tools */}
            <div className="skill-category">
              <div className="skill-category-header">
                <ion-icon name="construct-outline"></ion-icon>
                <h4 className="h4">Tools:</h4>
              </div>
              <p className="skill-list-text">MS Office Suite, Google Workspace, Canva</p>
            </div>

            {/* Platforms */}
            <div className="skill-category">
              <div className="skill-category-header">
                <ion-icon name="desktop-outline"></ion-icon>
                <h4 className="h4">Platforms:</h4>
              </div>
              <p className="skill-list-text">Kaggle, Jupyter Notebook, VS Code, IntelliJ IDEA, WordPress</p>
            </div>

            {/* Soft Skills */}
            <div className="skill-category">
              <div className="skill-category-header">
                <ion-icon name="people-outline"></ion-icon>
                <h4 className="h4">Soft Skills:</h4>
              </div>
              <p className="skill-list-text">Teamwork, Communication, Requirement Gathering, Task Scheduling, Report Building, People & Time Management</p>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

export default Resume;
