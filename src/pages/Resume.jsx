import { Helmet } from 'react-helmet-async';
import DownloadCV from '../components/DownloadCV';

function Resume() {
  return (
    <>
      <Helmet>
        <title>Resume - MD. Showaib Rahman Tanveer | Aspiring Project Manager | IT Sales | Community Lead</title>
        <meta name="description" content="Resume of MD. Showaib Rahman Tanveer - Aspiring Project Manager | IT Sales | Community Lead with experience in event management, team leadership, and tech project coordination." />
        <meta name="keywords" content="Resume, CV, Aspiring Project Manager, IT Sales, Community Lead, Project Manager, Technical Project Manager, Event Management, Team Leadership, SRTANVEER, Project Coordination" />
        <link rel="canonical" href="https://srtanveer.dev/resume" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://srtanveer.dev/resume" />
        <meta property="og:title" content="Resume - MD. Showaib Rahman Tanveer | Aspiring Project Manager | IT Sales | Community Lead" />
        <meta property="og:description" content="Resume of an Aspiring Project Manager | IT Sales | Community Lead with proven experience in event management, team leadership, and tech project coordination." />
        <meta property="og:image" content="https://srtanveer.dev/assets/images/OG-Image.webp" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://srtanveer.dev/resume" />
        <meta property="twitter:title" content="Resume - MD. Showaib Rahman Tanveer | Aspiring Project Manager | IT Sales | Community Lead" />
        <meta property="twitter:description" content="Resume of an Aspiring Project Manager | IT Sales | Community Lead with proven experience in event management, team leadership, and tech project coordination." />
        <meta property="twitter:image" content="https://srtanveer.dev/assets/images/OG-Image.webp" />
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
              <span>Graduated January 2026</span>
              <p className="timeline-text">
                <a href="https://www.green.edu.bd/" target="_blank" rel="noopener noreferrer">Green University of Bangladesh</a> — Completed B.Sc. in Computer Science and Engineering with strong technical foundation in software development lifecycle, team collaboration, and project management.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">HSC in Science</h4>
              <span>2020 — GPA 4.83/5.00</span>
              <p className="timeline-text">
                <a href="https://amwcollege.edu.bd/" target="_blank" rel="noopener noreferrer">GOVT. Adamjeenagar MW College</a> — Completed Higher Secondary Certificate with a GPA of 4.83 out of 5.00, 
                demonstrating strong academic performance.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">SSC in Science</h4>
              <span>2018 — GPA 4.56/5.00</span>
              <p className="timeline-text">
                <a href="https://akschoolandcollege.edu.bd/" target="_blank" rel="noopener noreferrer">A.K. High School and College</a> — Completed Secondary School Certificate with a GPA of 4.56 out of 5.00.
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
              <h4 className="h4 timeline-item-title">IT Sales</h4>
              <span>January 2026 — Till Now · 2 months</span>
              <p className="timeline-text">
                <a href="https://www.nebs-it.com/" target="_blank" rel="noopener noreferrer">Nebs-IT Solution Ltd</a> — Engaging with clients to understand their technology needs and provide tailored IT solutions. 
                Building strong relationships to support business growth and ensure customer satisfaction.
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Frontend Developer Intern</h4>
              <span>October 2025 — December 2025 · 3 months</span>
              <p className="timeline-text">
                <a href="https://www.linkedin.com/company/digi5ltd/posts/?feedView=all" target="_blank" rel="noopener noreferrer">Digi5 Ltd</a> — Collaborated with cross-functional teams to deliver production features on schedule. 
                Gained deep understanding of development workflows, sprint planning, and technical requirement gathering.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Digital Services Provider (Self-Employed)</h4>
              <span>August 2020 — September 2025 · 5 yrs 2 mos</span>
              <p className="timeline-text">
                <a href="https://faijansolutions.vercel.app/" target="_blank" rel="noopener noreferrer">Faijan Solutions</a> — Managed end-to-end client relationships and project delivery for digital services. 
                Handled requirement gathering, timeline estimation, and quality assurance while maintaining high client satisfaction.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Web Service Management Officer</h4>
              <span>February 2023 — May 2023 · 4 months</span>
              <p className="timeline-text">
                <a href="https://rang-bd.com/" target="_blank" rel="noopener noreferrer">Rang Bangladesh Ltd.</a> — Coordinated web service operations on contractual basis, ensuring timely delivery 
                and quality standards. Managed stakeholder expectations and resource allocation.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Data Entry Specialist</h4>
              <span>April 2018 — February 2023 · 4 yrs 11 mos</span>
              <p className="timeline-text">
                <a href="https://www.upwork.com/" target="_blank" rel="noopener noreferrer">UpWork</a> — Managed multiple client projects simultaneously with strict deadlines. Developed strong time management, 
                client communication, and quality control skills while maintaining excellent satisfaction ratings.
              </p>
            </li>
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="people-outline"></ion-icon>
            </div>
            <h3 className="h3">Leadership & Project Management Experience</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">President</h4>
              <span>2025 — Present</span>
              <p className="timeline-text">
                <a href="https://gucc.green.edu.bd/" target="_blank" rel="noopener noreferrer">Green University Computer Club (GUCC)</a> — Leading university-wide tech club with full responsibility for strategic planning, 
                policy making, and operational oversight. Managing executive team, coordinating multiple concurrent events, and driving community growth initiatives.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Lead Organizer - Inter-University Hackathon</h4>
              <span>September 2025</span>
              <p className="timeline-text">
                <a href="https://hacktheai.vercel.app/" target="_blank" rel="noopener noreferrer">HackTheAI</a> — Spearheaded end-to-end project management for 200+ participant hackathon. Coordinated with sponsors, 
                vendors, and university administration. Managed budget, timeline, marketing campaigns, and volunteer teams to deliver successful event.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Lead Volunteer - Department Carnival</h4>
              <span>October 2024</span>
              <p className="timeline-text">
                <a href="https://gucc.green.edu.bd/events/gub-cse-carnival-2024-closing-award-ceremony-cultural-events-and-concert" target="_blank" rel="noopener noreferrer">GUB CSE Carnival 2024</a> — Led volunteer coordination for large-scale department event. Managed task delegation, 
                schedule coordination, and on-ground execution with cross-functional teams.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Event Organizer - Programming Competitions</h4>
              <span>2024</span>
              <p className="timeline-text">
                <a href="https://gucc.green.edu.bd/events/inter-department-programming-contest-idpc-spring-2024" target="_blank" rel="noopener noreferrer">Inter Department Programming Competition (IDPC)</a> — Organized competitive programming events from concept to completion. 
                Handled logistics, participant management, judging coordination, and post-event reporting.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Intern Data Collector</h4>
              <span>2024</span>
              <p className="timeline-text">
                <a href="https://www.facebook.com/GreenUnivCiA" target="_blank" rel="noopener noreferrer">Green University Center for International Affairs (GCIA)</a> — Collected and organized data for international university partnerships. 
                Contributed to MOU preparation and documentation management for international collaborations.
              </p>
            </li>
          </ol>
        </section>

        <section className="skill">
          <h3 className="h3 skills-title">Skills Summary</h3>

          <div className="skills-summary-container">
            {/* Frontend Development Skills */}
            <div className="skill-category">
              <div className="skill-category-header">
                <ion-icon name="code-slash-outline"></ion-icon>
                <h4 className="h4">Frontend Development:</h4>
              </div>
              <p className="skill-list-text">React.js, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Responsive Design, Git/GitHub, npm, Vite, UI/UX Implementation, Component Architecture, State Management</p>
            </div>

            {/* Technical & Business Skills */}
            <div className="skill-category">
              <div className="skill-category-header">
                <ion-icon name="briefcase-outline"></ion-icon>
                <h4 className="h4">Technical & Business Skills:</h4>
              </div>
              <p className="skill-list-text">Business Development, Client Relations, Solution Consulting, Market Research, CRM Management, Proposal Writing, Communication Skills</p>
            </div>

            {/* Project Management Skills */}
            <div className="skill-category">
              <div className="skill-category-header">
                <ion-icon name="trending-up-outline"></ion-icon>
                <h4 className="h4">Project Management:</h4>
              </div>
              <p className="skill-list-text">Event Management, Strategic Planning, Stakeholder Coordination, Budget Management, Timeline Planning, Risk Management, Agile Methodologies, Sprint Planning, Project Documentation</p>
            </div>

            {/* Leadership & Soft Skills */}
            <div className="skill-category">
              <div className="skill-category-header">
                <ion-icon name="people-outline"></ion-icon>
                <h4 className="h4">Leadership & Soft Skills:</h4>
              </div>
              <p className="skill-list-text">Team Leadership, Cross-functional Collaboration, Communication, Requirement Gathering, Task Delegation, People Management, Time Management, Conflict Resolution, Public Speaking, Mentoring</p>
            </div>

            {/* Tools & Platforms */}
            <div className="skill-category">
              <div className="skill-category-header">
                <ion-icon name="construct-outline"></ion-icon>
                <h4 className="h4">Tools & Platforms:</h4>
              </div>
              <p className="skill-list-text">VS Code, Figma, Postman, GitHub/Git, Netlify, Vercel, MS Office Suite, Google Workspace, Canva, WordPress, Trello, Slack, Notion</p>
            </div>

            {/* Additional Skills */}
            <div className="skill-category">
              <div className="skill-category-header">
                <ion-icon name="analytics-outline"></ion-icon>
                <h4 className="h4">Additional Competencies:</h4>
              </div>
              <p className="skill-list-text">Technical Support, Data Analysis, Report Building, Marketing Strategy, Community Growth, Client Relations, Quality Assurance, Problem Solving, SEO Optimization, Content Management</p>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

export default Resume;
