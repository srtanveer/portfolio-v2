import { useState, useEffect } from 'react';

function Sidebar() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [photoOpacity, setPhotoOpacity] = useState(1);

  const photos = [
    '/assets/images/profile-photo-2.webp',
    '/assets/images/profile-photo.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPhotoOpacity(0);
      
      setTimeout(() => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
        setPhotoOpacity(1);
      }, 300);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <aside className={`sidebar ${isSidebarActive ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img 
            src={photos[currentPhotoIndex]} 
            alt="MD. SHOWAIB RAHMAN TANVEER" 
            id="profilePhoto"
            style={{ opacity: photoOpacity, transition: 'opacity 0.3s ease' }}
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="MD. SHOWAIB RAHMAN TANVEER">MD. SHOWAIB RAHMAN TANVEER</h1>
          <p className="title">Organizer | Frontend Developer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn onClick={toggleSidebar}>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:srtanveer.cse@gmail.com" className="contact-link">srtanveer.cse@gmail.com</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+8801569104401" className="contact-link">+880 1569-104401</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="briefcase-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Working at</p>
              <p className="contact-link">FrontEnd Developer Intern at Digi5 LTD</p>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Dhaka, Bangladesh</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="https://github.com/srtanveer" className="social-link" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://www.linkedin.com/in/srtanveer" className="social-link" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://codeforces.com/profile/i_dont_byte" className="social-link" target="_blank" rel="noopener noreferrer" title="Codeforces">
              <svg className="codeforces-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5S3 20.328 3 19.5V9c0-.828.672-1.5 1.5-1.5zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5S12 20.328 12 19.5v-15c0-.828.672-1.5 1.5-1.5zm6 3c.828 0 1.5.672 1.5 1.5v12c0 .828-.672 1.5-1.5 1.5S18 20.328 18 19.5v-12c0-.828.672-1.5 1.5-1.5z"/>
              </svg>
            </a>
          </li>

          <li className="social-item">
            <a href="https://www.facebook.com/srtanveerr/" className="social-link" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://www.instagram.com/srtanveerr/" className="social-link" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
