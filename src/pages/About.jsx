import { Helmet } from 'react-helmet-async';

function About() {
  return (
    <>
      <Helmet>
        <title>MD. Showaib Rahman Tanveer - Aspiring Project Manager | Technical Background</title>
        <meta name="description" content="Aspiring Project Manager with technical expertise in web development. Proven leadership in event management, team coordination, and community growth. President of GUCC with experience managing large-scale tech initiatives." />
        <meta name="keywords" content="Project Manager, Technical Project Manager, Event Management, Team Leadership, Community Lead, Stakeholder Coordination, Project Coordination, SRTANVEER, Showaib Rahman Tanveer, GUCC President, University Club Management, Tech Event Organizer, Community Growth, Dhaka" />
        <link rel="canonical" href="https://srtanveer.dev/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://srtanveer.dev/" />
        <meta property="og:title" content="MD. Showaib Rahman Tanveer - Aspiring Project Manager | Technical Background" />
        <meta property="og:description" content="Aspiring Project Manager with technical expertise. Proven leadership in event management, team coordination, and community growth." />
        <meta property="og:image" content="https://srtanveer.dev/assets/images/og-image.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://srtanveer.dev/" />
        <meta property="twitter:title" content="MD Showaib Rahman Tanveer - Aspiring Project Manager | Technical Background" />
        <meta property="twitter:description" content="Aspiring Project Manager with technical expertise. Proven leadership in event management, team coordination, and community growth." />
        <meta property="twitter:image" content="https://srtanveer.dev/assets/images/og-image.jpg" />
      </Helmet>

      <article className="about active" data-page="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p>
            I'm an <b>aspiring Project Manager</b> with a strong technical foundation, passionate about leading teams and delivering impactful projects.
            As a <b>Computer Science student at Green University of Bangladesh</b> and former <b>Frontend Developer Intern at Digi5 Ltd</b>,
            I combine technical understanding with proven leadership capabilities to drive successful project outcomes.
          </p>
          <p>
            Currently serving as <b>President of Green University Computer Club (GUCC)</b>, I lead <b>strategic planning, team coordination, and large-scale event execution</b>.
            I've successfully managed major initiatives including inter-university hackathons, department carnivals, and programming competitions,
            demonstrating expertise in <b>stakeholder management, budget coordination, and cross-functional team leadership</b>. My goal is to leverage my technical background
            and organizational skills to excel in project management roles.
          </p>
        </section>

        {/* Service */}
        <section className="service">
          <h3 className="h3 service-title">What I'm doing</h3>

          <ul className="service-list">
            <li className="service-item">
              <div className="service-icon-box">
                <ion-icon name="rocket-outline"></ion-icon>
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Project Management</h4>
                <p className="service-item-text">
                  Leading and coordinating tech projects from conception to delivery. Managing timelines, resources, stakeholders, and team dynamics to ensure successful outcomes.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <ion-icon name="people-outline"></ion-icon>
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Team Leadership</h4>
                <p className="service-item-text">
                  Building and leading high-performing teams. Fostering collaboration, delegating effectively, and driving team members toward shared goals with clear communication.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <ion-icon name="file-tray-full-outline"></ion-icon>
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Event Management</h4>
                <p className="service-item-text">
                  Planning and executing large-scale university events including hackathons, carnivals, and competitions. Managing budgets, vendors, sponsors, and cross-functional coordination.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <ion-icon name="desktop-outline"></ion-icon>
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Technical Understanding</h4>
                <p className="service-item-text">
                  Leveraging hands-on software development experience to effectively communicate with technical teams, understand technical requirements, and make informed project decisions.
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* Research */}
        <section className="research">
          <h3 className="h3 research-title">Research</h3>
          <div className="research-content">
            <h4 className="h4 research-item-title">Sarcasm Analysis on Short Text (Ongoing Academic Thesis)</h4>
            <p className="research-supervisor">Supervised by Dr. Md. Saiful Azad, Dean FSE & Director IQAC, Green University of Bangladesh</p>
            <p className="research-text">
              Sarcasm Analysis is a challenging area within Natural Language Processing (NLP) and Sentiment Analysis.
              It focuses on identifying instances where text uses positive language to convey a negative or mocking sentiment.
              This research explores techniques to accurately detect sarcasm, which is crucial for understanding the true intent
              behind online communications and improving applications like opinion mining and social media analysis.
            </p>
          </div>
        </section>

        {/* Leadership */}
        <section className="leadership">
          <h3 className="h3 leadership-title">Current Leadership Role</h3>
          <ul className="leadership-list">
            <li className="leadership-item">
              <h4 className="h4 leadership-item-title">President - GUCC</h4>
              <p className="leadership-org">Green University Computer Club, 2025 - Present</p>
              <p className="leadership-text">Leading strategic planning, policy making, team leadership, budget management, and event coordination for the university's premier tech club. Managing multiple concurrent projects and driving community growth initiatives.</p>
            </li>
          </ul>
        </section>

        {/* Awards & Honors */}
        <section className="awards">
          <h3 className="h3 awards-title">Key Achievements</h3>
          <ul className="awards-list">
            <li className="award-item">
              <h4 className="h4 award-item-title">Best Intern in Dev Team</h4>
              <p className="award-description">Digi5 Ltd, October 2025</p>
            </li>
            <li className="award-item">
              <h4 className="h4 award-item-title">Lead Organizer</h4>
              <p className="award-description">HackTheAI - Inter-University Hackathon, September 2025</p>
            </li>
            <li className="award-item">
              <h4 className="h4 award-item-title">Best Project Award</h4>
              <p className="award-description">Integrated Design Project Poster Presentation, Fall 2024</p>
            </li>
          </ul>
        </section>

        {/* Training & Certification */}
        <section className="certifications">
          <h3 className="h3 certifications-title">Training & Certification</h3>
          <ul className="certifications-list">
            <li className="certification-item">
              <h4 className="h4 certification-item-title">HackerRank</h4>
              <p className="certification-description">Problem Solving (Basic) Certificate</p>
            </li>
            <li className="certification-item">
              <h4 className="h4 certification-item-title">Corporate Readiness Program</h4>
              <p className="certification-description">By UTC Global Academy</p>
            </li>
            {/* <li className="certification-item">
              <h4 className="h4 certification-item-title">Python Programming in a Pragmatic Approach</h4>
              <p className="certification-description">Workshop on Python</p>
            </li> */}
            <li className="certification-item">
              <h4 className="h4 certification-item-title">JavaScript Algorithms and Data Structures</h4>
              <p className="certification-description">issued by freeCodeCamp on July, 2020</p>
            </li>
            <li className="certification-item">
              <h4 className="h4 certification-item-title">Responsive Web Design</h4>
              <p className="certification-description">issued by freeCodeCamp on June, 2020</p>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}

export default About;
