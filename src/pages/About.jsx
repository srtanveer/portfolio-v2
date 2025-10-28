import { Helmet } from 'react-helmet-async';

function About() {
  return (
    <>
      <Helmet>
        <title>MD. Showaib Rahman Tanveer - Organizer | Frontend Developer | Event Management & Web Development</title>
        <meta name="description" content="Experienced Organizer & Frontend Developer specializing in event management, community growth, marketing, and web development. President of GUCC, skilled in React, Next.js, and team coordination." />
        <meta name="keywords" content="Event Organizer, Project Manager, Community Builder, Frontend Developer, React Developer, Next.js Developer, Marketing Specialist, Growth Strategist, Event Management, Team Coordination, SRTANVEER, Showaib Rahman Tanveer, GUCC President, University Club Management, Web Developer Bangladesh, Tech Event Organizer, Community Growth, Dhaka Developer" />
        <link rel="canonical" href="https://srtanveer.dev/" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://srtanveer.dev/" />
        <meta property="og:title" content="MD. Showaib Rahman Tanveer - Organizer | Frontend Developer" />
        <meta property="og:description" content="Experienced Organizer & Frontend Developer. Expert in event management, community growth, marketing, and modern web development." />
        <meta property="og:image" content="https://srtanveer.dev/assets/images/og-image.jpg" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://srtanveer.dev/" />
        <meta property="twitter:title" content="MD Showaib Rahman Tanveer - Organizer | Frontend Developer" />
        <meta property="twitter:description" content="Experienced Organizer & Frontend Developer. Expert in event management, community growth, marketing, and modern web development." />
        <meta property="twitter:image" content="https://srtanveer.dev/assets/images/og-image.jpg" />
      </Helmet>

      <article className="about active" data-page="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p>
            Hey! I'm an experienced <b>Organizer and Frontend Developer</b> with a passion for bringing people together and building 
            digital solutions. As <b>President of Green University Computer Club (GUCC)</b>, I specialize in <b>event management, 
            community growth, marketing, and team coordination</b>. I've successfully organized major tech events including HackTheAI 
            (Inter-University Hackathon), CSE Carnival 2024, and multiple programming competitions, managing teams and delivering 
            exceptional experiences.
          </p>
          <p>
            Beyond organizing, I'm a <b>Computer Science student at Green University of Bangladesh</b> and <b>Frontend Developer Intern 
            at Digi5 Ltd</b>, building modern web applications with React, Next.js, and Tailwind CSS. I excel at <b>project management, 
            stakeholder coordination, strategic planning, and growth initiatives</b>. Whether it's organizing events, managing communities, 
            driving marketing campaigns, or developing web solutions, I bring creativity, leadership, and execution to every project. 
            Let's collaborate to grow your community, organize impactful events, or build something amazing together!
          </p>
        </section>

        {/* Service */}
        <section className="service">
          <h3 className="h3 service-title">What I'm doing</h3>

          <ul className="service-list">
            <li className="service-item">
              <div className="service-icon-box">
                <ion-icon name="flask-outline"></ion-icon>
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Researching</h4>
                <p className="service-item-text">
                  Conducting academic research in NLP, focusing on Sarcasm Analysis and sentiment detection in social media text.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <ion-icon name="desktop-outline"></ion-icon>
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Software Engineering</h4>
                <p className="service-item-text">
                  Building responsive and interactive user interfaces with React, Next.js, and Tailwind CSS. Experienced in developing modern web applications with clean, maintainable code.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <ion-icon name="file-tray-full-outline"></ion-icon>
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Organizing</h4>
                <p className="service-item-text">
                  Leading and organizing university club activities, managing teams, and coordinating events with strong project management and organizational skills.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <ion-icon name="bulb-outline"></ion-icon>
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Problem Solving</h4>
                <p className="service-item-text">
                  Strong algorithmic thinking and problem-solving skills, with experience implementing efficient solutions to complex challenges.
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* Research */}
        <section className="research">
          <h3 className="h3 research-title">Research</h3>
          <div className="research-content">
            <h4 className="h4 research-item-title">Sarcasm Analysis (Ongoing Academic Thesis)</h4>
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
          <h3 className="h3 leadership-title">Leadership & Activities</h3>
          <ul className="leadership-list">
            <li className="leadership-item">
              <h4 className="h4 leadership-item-title">President</h4>
              <p className="leadership-org">Green University Computer Club (GUCC), 2025</p>
              <p className="leadership-text">Leadership & Policy Making</p>
            </li>
            <li className="leadership-item">
              <h4 className="h4 leadership-item-title">Intern Data Collector</h4>
              <p className="leadership-org">Green University Center for International Affairs – GCIA</p>
              <p className="leadership-text">Collecting data of Foreign Universities & Organizing MOU</p>
            </li>
          </ul>
        </section>

        {/* Awards & Honors */}
        <section className="awards">
          <h3 className="h3 awards-title">Awards & Honors</h3>
          <ul className="awards-list">
            <li className="award-item">
              <h4 className="h4 award-item-title">Best Project Award</h4>
              <p className="award-description">Integrated Design Project Poster Presentation, Fall 2024 Dept of CSE, GUB</p>
            </li>
            <li className="award-item">
              <h4 className="h4 award-item-title">Lead Organizer</h4>
              <p className="award-description">HackTheAI - Inter University Hackathon</p>
            </li>
            <li className="award-item">
              <h4 className="h4 award-item-title">Lead Volunteer</h4>
              <p className="award-description">GUB CSE CARNIVAL 2024</p>
            </li>
            <li className="award-item">
              <h4 className="h4 award-item-title">Volunteer</h4>
              <p className="award-description">2024 International Conference On Sustainable Technologies For Industry 5.0 (STI 2024)</p>
            </li>
            <li className="award-item">
              <h4 className="h4 award-item-title">Preliminary Participant</h4>
              <p className="award-description">ICPC 2022 Asia Dhaka Regional Site online Preliminary Contest</p>
            </li>
            <li className="award-item">
              <h4 className="h4 award-item-title">Executive Member</h4>
              <p className="award-description">GUCC PC 2022-23</p>
            </li>
            <li className="award-item">
              <h4 className="h4 award-item-title">Lead Volunteer</h4>
              <p className="award-description">Inter Department Gaming Competition (IDGC 2025)</p>
            </li>
            <li className="award-item">
              <h4 className="h4 award-item-title">Organizer</h4>
              <p className="award-description">Inter Department Programming Competition (IDPC 2024)</p>
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
            <li className="certification-item">
              <h4 className="h4 certification-item-title">Python Programming in a Pragmatic Approach</h4>
              <p className="certification-description">Workshop on Python</p>
            </li>
            <li className="certification-item">
              <h4 className="h4 certification-item-title">Cholera Vaccination</h4>
              <p className="certification-description">organized by icddr,b, 2022</p>
            </li>
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
