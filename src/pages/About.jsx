import { Helmet } from 'react-helmet-async';

function About() {
  return (
    <>
      <Helmet>
        <title>MD. Showaib Rahman Tanveer - Frontend Developer | Aspiring Project Manager | Community Lead</title>
        <meta name="description" content="Frontend Developer with expertise in web development. Aspiring Project Manager with proven leadership in event management, team coordination, and community growth. President of GUCC with experience managing large-scale tech initiatives." />
        <meta name="keywords" content="Frontend Developer, Project Manager, Technical Project Manager, Event Management, Team Leadership, Community Lead, Web Developer, React Developer, Stakeholder Coordination, SRTANVEER, Showaib Rahman Tanveer, GUCC President, Dhaka" />
        <link rel="canonical" href="https://srtanveer.dev/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://srtanveer.dev/" />
        <meta property="og:title" content="MD. Showaib Rahman Tanveer - Frontend Developer | Aspiring Project Manager | Community Lead" />
        <meta property="og:description" content="Frontend Developer and Aspiring Project Manager with proven leadership in event management, team coordination, and community growth." />
        <meta property="og:image" content="https://srtanveer.dev/assets/images/.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://srtanveer.dev/" />
        <meta property="twitter:title" content="MD Showaib Rahman Tanveer - Frontend Developer | Aspiring Project Manager | Community Lead" />
        <meta property="twitter:description" content="Frontend Developer and Aspiring Project Manager with proven leadership in event management, team coordination, and community growth." />
        <meta property="twitter:image" content="https://srtanveer.dev/assets/images/OG-Image.webp" />
      </Helmet>

      <article className="about active" data-page="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p>
            I'm a <b>Frontend Developer</b> with a passion for building user-centric web applications.
            I recently completed my <b>B.Sc. in Computer Science and Engineering from Green University of Bangladesh (GUB)</b> and worked as a <b>Frontend Developer Intern at Digi5 Ltd</b>,
            where I gained hands-on development experience and leadership capabilities to deliver comprehensive solutions.
          </p>
          <p>
            Currently serving as <b>President of Green University Computer Club (GUCC)</b>, I lead <b>strategic planning, team coordination, and large-scale event execution</b>.
            My diverse skill set spans <b>frontend development with React and project management</b>.
            I've successfully managed major initiatives including inter-university hackathons, department carnivals, and programming competitions,
            demonstrating expertise in <b>stakeholder management and cross-functional team leadership</b>. My goal is to leverage my technical background
            and organizational skills to deliver impactful solutions and excel in project management roles.
          </p>
        </section>

        {/* Service */}
        <section className="service">
          <h3 className="h3 service-title">What I'm doing</h3>

          <ul className="service-list">
            <li className="service-item">
              <div className="service-icon-box">
                <ion-icon name="code-slash-outline"></ion-icon>
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Frontend Development</h4>
                <p className="service-item-text">
                  Building responsive and user-friendly web applications using React, JavaScript, HTML, and CSS. Creating seamless user experiences with modern frontend technologies and best practices.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <ion-icon name="briefcase-outline"></ion-icon>
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Technical Problem Solving</h4>
                <p className="service-item-text">
                  Analyzing complex technical challenges and developing effective solutions. Applying analytical thinking and technical knowledge to solve real-world problems efficiently.
                </p>
              </div>
            </li>

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
                <h4 className="h4 service-item-title">Community Leadership</h4>
                <p className="service-item-text">
                  Building and leading high-performing teams and tech communities. Planning large-scale events, fostering collaboration, and driving members toward shared goals with clear communication.
                </p>
              </div>
            </li>
          </ul>
        </section>
        

        {/* Research */}
        <section className="research">
          <h3 className="h3 research-title">Research</h3>
          <div className="research-content">
            <h4 className="h4 research-item-title">Incongruity-Aware Sarcasm Detection</h4>
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
              <p className="leadership-org"><a href="https://gucc.green.edu.bd/" target="_blank" rel="noopener noreferrer">Green University Computer Club, 2025 - Present</a></p>
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
