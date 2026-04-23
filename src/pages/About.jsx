import { Helmet } from 'react-helmet-async';

function About() {
  return (
    <>
      <Helmet>
        <title>MD. Showaib Rahman Tanveer - Aspiring Project Manager | IT Sales | Community Lead</title>
        <meta name="description" content="MD. Showaib Rahman Tanveer - Aspiring Project Manager | IT Sales | Community Lead with proven leadership in event management, team coordination, community growth, and technical execution." />
        <meta name="keywords" content="Aspiring Project Manager, IT Sales, Community Lead, Project Manager, Technical Project Manager, Event Management, Team Leadership, Stakeholder Coordination, SRTANVEER, Showaib Rahman Tanveer, GUCC President, Dhaka" />
        <link rel="canonical" href="https://srtanveer.dev/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://srtanveer.dev/" />
        <meta property="og:title" content="MD. Showaib Rahman Tanveer - Aspiring Project Manager | IT Sales | Community Lead" />
        <meta property="og:description" content="Aspiring Project Manager | IT Sales | Community Lead with proven leadership in event management, team coordination, and community growth." />
        <meta property="og:image" content="https://srtanveer.dev/assets/images/OG-Image.webp" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://srtanveer.dev/" />
        <meta property="twitter:title" content="MD. Showaib Rahman Tanveer - Aspiring Project Manager | IT Sales | Community Lead" />
        <meta property="twitter:description" content="Aspiring Project Manager | IT Sales | Community Lead with proven leadership in event management, team coordination, and community growth." />
        <meta property="twitter:image" content="https://srtanveer.dev/assets/images/OG-Image.webp" />
      </Helmet>

      <article className="about active" data-page="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p>
            I completed my 𝗕.𝗦𝗰. 𝗶𝗻 𝗖𝗼𝗺𝗽𝘂𝘁𝗲𝗿 𝗦𝗰𝗶𝗲𝗻𝗰𝗲 𝗮𝗻𝗱 𝗘𝗻𝗴𝗶𝗻𝗲𝗲𝗿𝗶𝗻𝗴 from 𝗚𝗿𝗲𝗲𝗻 𝗨𝗻𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆 𝗼𝗳 𝗕𝗮𝗻𝗴𝗹𝗮𝗱𝗲𝘀𝗵 (𝗚𝗨𝗕).
          </p>
          <p>
            Currently, I work as a 𝗝𝘂𝗻𝗶𝗼𝗿 𝗘𝘅𝗲𝗰𝘂𝘁𝗶𝘃𝗲 (𝗜𝗧) in the 𝗣𝗿𝗼𝗷𝗲𝗰𝘁 𝗠𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁 𝗗𝗲𝗽𝗮𝗿𝘁𝗺𝗲𝗻𝘁 at 𝗕𝗶𝗼𝗺𝗲𝘁𝗿𝗶𝗰𝘀.𝗕𝗗 𝗟𝗶𝗺𝗶𝘁𝗲𝗱, contributing to IT operations, client coordination, and project execution.
          </p>
          <p>
            I served as the 𝗣𝗿𝗲𝘀𝗶𝗱𝗲𝗻𝘁 of the 𝗚𝗿𝗲𝗲𝗻 𝗨𝗻𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆 𝗖𝗼𝗺𝗽𝘂𝘁𝗲𝗿 𝗖𝗹𝘂𝗯 (𝗚𝗨𝗖𝗖), leading team coordination and organizing impactful tech events.
          </p>
          <p>
            I’m focused on growing in 𝗽𝗿𝗼𝗷𝗲𝗰𝘁 𝗺𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁 and 𝘁𝗲𝗰𝗵-𝗱𝗿𝗶𝘃𝗲𝗻 𝗿𝗼𝗹𝗲𝘀.
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
