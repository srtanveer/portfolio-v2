import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './CoverLetterGenerator.css';

function CoverLetterGenerator() {
  const [jobPosting, setJobPosting] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');

  // Personal information from the portfolio
  const personalInfo = {
    name: "MD. Showaib Rahman Tanveer",
    email: "contact@srtanveer.dev",
    phone: "+880 1521 437 567",
    location: "Dhaka, Bangladesh",
    currentRole: "Frontend Developer Intern at Digi5 Ltd",
    education: "B.Sc. in Computer Science and Engineering (Expected January, 2026) from Green University of Bangladesh",
    skills: {
      languages: "Python, C++, JavaScript",
      frontend: "React.js, Next.js, HTML5, CSS3, Tailwind CSS, JavaScript (ES6+)",
      tools: "MS Office Suite, Google Workspace, Canva",
      platforms: "Kaggle, Jupyter Notebook, VS Code, IntelliJ IDEA, WordPress",
      soft: "Teamwork, Communication, Requirement Gathering, Task Scheduling, Report Building, People & Time Management"
    },
    experience: [
      "Frontend Developer Intern at Digi5 Ltd (October 2025 - Present): Building modern web applications using React, Next.js, and Tailwind CSS",
      "Computer Operator at Faijan Solutions (August 2020 - September 2025): Self-employed providing various digital services",
      "Web Service Management Officer at Rang Bangladesh Ltd. (February 2023 - May 2023): Managed web services",
      "Freelance Data Entry Specialist on UpWork (April 2018 - February 2023): Handled various projects with high accuracy"
    ],
    leadership: [
      "President of Green University Computer Club (GUCC), 2025: Leadership & Policy Making",
      "Lead Organizer of HackTheAI - Inter University Hackathon",
      "Lead Volunteer at GUB CSE CARNIVAL 2024 & IDGC 2025"
    ],
    research: "Working on Sarcasm Analysis in NLP, supervised by Dr. Md. Saiful Azad",
    website: "https://srtanveer.dev"
  };

  const generateCoverLetter = async () => {
    if (!jobPosting.trim() || !companyName.trim() || !jobTitle.trim()) {
      setError('Please fill in all fields');
      return;
    }

    setIsGenerating(true);
    setError('');
    setCoverLetter('');

    try {
      // Prepare the prompt for AI
      const prompt = `Write a professional cover letter for the following job posting. Use the candidate's information to create a compelling, personalized cover letter.

CANDIDATE INFORMATION:
Name: ${personalInfo.name}
Current Role: ${personalInfo.currentRole}
Education: ${personalInfo.education}
Skills: 
- Languages: ${personalInfo.skills.languages}
- Frontend: ${personalInfo.skills.frontend}
- Tools: ${personalInfo.skills.tools}
- Soft Skills: ${personalInfo.skills.soft}

Key Experience:
${personalInfo.experience.map((exp, idx) => `${idx + 1}. ${exp}`).join('\n')}

Leadership & Activities:
${personalInfo.leadership.map((lead, idx) => `${idx + 1}. ${lead}`).join('\n')}

Research: ${personalInfo.research}

JOB DETAILS:
Company: ${companyName}
Position: ${jobTitle}
Job Description: ${jobPosting}

Write a professional cover letter that:
1. Addresses the hiring manager at ${companyName}
2. Expresses enthusiasm for the ${jobTitle} position
3. Highlights relevant skills and experiences that match the job requirements
4. Shows how the candidate's background aligns with the role
5. Demonstrates knowledge of the company and position
6. Maintains a professional yet personable tone
7. Includes contact information
8. Is concise (3-4 paragraphs)

Cover Letter:`;

      // Using Hugging Face Inference API (Free tier)
      // You can also use other free APIs like:
      // - OpenRouter (https://openrouter.ai/) with free models
      // - Together AI (https://together.ai/) free tier
      // - Groq (https://groq.com/) free tier with Llama models

      const response = await fetch(
        "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${import.meta.env.VITE_HUGGINGFACE_TOKEN}`
          },
          body: JSON.stringify({
            inputs: prompt,
            parameters: {
              max_new_tokens: 800,
              temperature: 0.7,
              top_p: 0.95,
              return_full_text: false
            }
          })
        }
      );

      if (!response.ok) {
        // Fallback: Generate a template-based cover letter if API fails
        throw new Error('API request failed, using template');
      }

      const result = await response.json();
      let generatedText = '';

      if (Array.isArray(result) && result[0]?.generated_text) {
        generatedText = result[0].generated_text;
      } else {
        throw new Error('Unexpected API response format');
      }

      setCoverLetter(generatedText.trim());
    } catch (err) {
      console.error('Error generating cover letter:', err);
      
      // Fallback: Generate a template-based cover letter
      const templateCoverLetter = generateTemplateCoverLetter();
      setCoverLetter(templateCoverLetter);
      setError('Using template generation. For AI-powered results, please add your Hugging Face API token.');
    } finally {
      setIsGenerating(false);
    }
  };

  const generateTemplateCoverLetter = () => {
    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    
    return `${personalInfo.name}
${personalInfo.email} | ${personalInfo.phone}
${personalInfo.location}
${personalInfo.website}

${today}

Hiring Manager
${companyName}

Dear Hiring Manager,

I am writing to express my strong interest in the ${jobTitle} position at ${companyName}. As a ${personalInfo.currentRole} with a background in ${personalInfo.education.split(' from ')[0]}, I am excited about the opportunity to contribute to your team.

Currently, I am working as a Frontend Developer Intern at Digi5 Ltd, where I build modern web applications using React, Next.js, and Tailwind CSS. My technical skills include ${personalInfo.skills.languages}, along with expertise in ${personalInfo.skills.frontend}. These skills align well with the requirements mentioned in your job posting.

Beyond my technical capabilities, I bring strong leadership experience as the President of Green University Computer Club (GUCC), where I have successfully organized major tech events including HackTheAI (Inter-University Hackathon) and CSE Carnival 2024. This role has honed my ${personalInfo.skills.soft}, which I believe are crucial for success in the ${jobTitle} position.

I am particularly drawn to ${companyName} because of your commitment to innovation and excellence. I am eager to bring my unique combination of technical skills, leadership experience, and passion for technology to your team. I would welcome the opportunity to discuss how my background and skills would be a great fit for this role.

Thank you for considering my application. I look forward to the opportunity to speak with you about this position.

Sincerely,
${personalInfo.name}`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(coverLetter);
    alert('Cover letter copied to clipboard!');
  };

  const downloadCoverLetter = () => {
    const element = document.createElement('a');
    const file = new Blob([coverLetter], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${companyName.replace(/\s+/g, '_')}_CoverLetter_${personalInfo.name.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <>
      <Helmet>
        <title>Cover Letter Generator - MD. Showaib Rahman Tanveer</title>
        <meta name="description" content="Generate personalized cover letters using AI based on job postings and professional background" />
        <meta name="keywords" content="Cover Letter Generator, AI Cover Letter, Job Application, SRTANVEER" />
        <link rel="canonical" href="https://srtanveer.dev/cover-letter-generator" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://srtanveer.dev/cover-letter-generator" />
        <meta property="og:title" content="Cover Letter Generator - MD. Showaib Rahman Tanveer" />
        <meta property="og:description" content="Generate personalized cover letters using AI based on job postings and professional background" />
        <meta property="og:image" content="https://srtanveer.dev/assets/images/og-image.jpg" />
      </Helmet>

      <article className="cover-letter-generator active" data-page="cover-letter-generator">
        <header>
          <h2 className="h2 article-title">Cover Letter Generator</h2>
        </header>

        <section className="cover-letter-form">
          <p className="form-description">
            Generate a personalized cover letter based on your job posting. The generator uses your 
            professional information from this portfolio and AI to create a compelling cover letter.
          </p>

          <div className="form-container">
            <div className="input-group">
              <label htmlFor="companyName" className="form-label">Company Name *</label>
              <input
                type="text"
                id="companyName"
                className="form-input"
                placeholder="e.g., Google, Microsoft, etc."
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="jobTitle" className="form-label">Job Title *</label>
              <input
                type="text"
                id="jobTitle"
                className="form-input"
                placeholder="e.g., Frontend Developer, Software Engineer, etc."
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="jobPosting" className="form-label">Job Posting / Description *</label>
              <textarea
                id="jobPosting"
                className="form-textarea"
                placeholder="Paste the full job posting or description here..."
                rows="10"
                value={jobPosting}
                onChange={(e) => setJobPosting(e.target.value)}
              />
            </div>

            {error && (
              <div className="error-message">
                <ion-icon name="alert-circle-outline"></ion-icon>
                <span>{error}</span>
              </div>
            )}

            <button
              className="form-btn"
              onClick={generateCoverLetter}
              disabled={isGenerating}
            >
              <ion-icon name="create-outline"></ion-icon>
              <span>{isGenerating ? 'Generating...' : 'Generate Cover Letter'}</span>
            </button>
          </div>
        </section>

        {coverLetter && (
          <section className="cover-letter-output">
            <div className="output-header">
              <h3 className="h3">Generated Cover Letter</h3>
              <div className="output-actions">
                <button className="action-btn" onClick={copyToClipboard} title="Copy to clipboard">
                  <ion-icon name="copy-outline"></ion-icon>
                  <span>Copy</span>
                </button>
                <button className="action-btn" onClick={downloadCoverLetter} title="Download as text file">
                  <ion-icon name="download-outline"></ion-icon>
                  <span>Download</span>
                </button>
              </div>
            </div>

            <div className="output-content">
              <pre className="cover-letter-text">{coverLetter}</pre>
            </div>

            <div className="output-note">
              <ion-icon name="information-circle-outline"></ion-icon>
              <p>
                <strong>Note:</strong> Please review and customize the generated cover letter before using it. 
                Make sure it accurately reflects your experience and aligns with the specific job requirements.
              </p>
            </div>
          </section>
        )}

        {/* <section className="setup-instructions">
          <h3 className="h3">Setup Instructions (Optional - For AI Enhancement)</h3>
          <div className="instructions-content">
            <p>
              For better AI-powered cover letters, you can add your own free Hugging Face API token:
            </p>
            <ol className="instructions-list">
              <li>Visit <a href="https://huggingface.co/join" target="_blank" rel="noopener noreferrer">Hugging Face</a> and create a free account</li>
              <li>Go to your <a href="https://huggingface.co/settings/tokens" target="_blank" rel="noopener noreferrer">Settings → Access Tokens</a></li>
              <li>Create a new token with "Read" permissions</li>
              <li>Open the file <code>src/pages/CoverLetterGenerator.jsx</code></li>
              <li>Replace <code>hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</code> with your token in the Authorization header</li>
            </ol>
            <p>
              <strong>Alternative Free APIs:</strong> You can also use Groq (groq.com), OpenRouter (openrouter.ai), 
              or Together AI (together.ai) which offer free tiers with faster response times.
            </p>
          </div>
        </section> */}
      </article>
    </>
  );
}

export default CoverLetterGenerator;
