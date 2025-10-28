'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

/*-----------------------------------*\
  #PROFILE PHOTO SWAP
\*-----------------------------------*/

// Profile photo swap functionality
const profilePhoto = document.getElementById('profilePhoto');

// Detect if we're in a subdirectory (like /blog/)
const isInSubdirectory = window.location.pathname.includes('/blog/');
const pathPrefix = isInSubdirectory ? '../' : './';

const photos = [
  pathPrefix + 'assets/images/profile-photo-2.webp',
  pathPrefix + 'assets/images/profile-photo.jpg'
];
let currentPhotoIndex = 0;

// Swap photos every 10 seconds
if (profilePhoto) {
  setInterval(() => {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    profilePhoto.style.opacity = '0';
    
    setTimeout(() => {
      profilePhoto.src = photos[currentPhotoIndex];
      profilePhoto.style.opacity = '1';
    }, 300);
  }, 10000); // 10 seconds
}

/*-----------------------------------*\
  #THEME TOGGLE
\*-----------------------------------*/

// Get theme toggle button
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);

// Set icon based on current theme
themeIcon.textContent = currentTheme === 'dark' ? '🌙' : '☀️';

// Theme toggle function with pop animation
themeToggle.addEventListener('click', function() {
  const theme = document.documentElement.getAttribute('data-theme');
  const newTheme = theme === 'dark' ? 'light' : 'dark';
  
  // Add pop animation
  this.classList.add('pop');
  
  // Change theme after animation starts
  setTimeout(() => {
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeIcon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
  }, 200);
  
  // Remove animation class
  setTimeout(() => {
    this.classList.remove('pop');
  }, 400);
});

/*-----------------------------------*\
  #SIDEBAR
\*-----------------------------------*/

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

/*-----------------------------------*\
  #PROJECT SEARCH
\*-----------------------------------*/

// Project search functionality with technology filtering
const projectSearch = document.getElementById('projectSearch');
const projectItems = document.querySelectorAll('.project-item');

if (projectSearch) {
  projectSearch.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase().trim();
    
    projectItems.forEach(project => {
      // Get project title
      const title = project.querySelector('.project-title').textContent.toLowerCase();
      
      // Get category if it exists (some are commented out)
      const categoryElement = project.querySelector('.project-category');
      const category = categoryElement ? categoryElement.textContent.toLowerCase() : '';
      
      // Get all technology tags
      const techTags = Array.from(project.querySelectorAll('.tech-tag'))
        .map(tag => tag.textContent.toLowerCase())
        .join(' ');
      
      // Combine all searchable text (title, category, and technologies)
      const searchableText = `${title} ${category} ${techTags}`;
      
      // Show/hide based on search term
      if (searchTerm === '' || searchableText.includes(searchTerm)) {
        project.classList.remove('hidden');
        project.classList.add('active');
      } else {
        project.classList.add('hidden');
        project.classList.remove('active');
      }
    });
  });
}

// custom select variables (keeping for backward compatibility)
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// Only add listeners if elements exist
if (select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// EmailJS integration for contact form
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const fullname = form.querySelector('[name="fullname"]').value;
  const email = form.querySelector('[name="email"]').value;
  const message = form.querySelector('[name="message"]').value;

  // You can integrate with EmailJS or any email service here
  // For now, we'll just show an alert
  alert(`Thank you ${fullname}! Your message has been received. We'll get back to you at ${email} soon.`);

  // Reset form
  form.reset();
  formBtn.setAttribute("disabled", "");

  // If you want to use EmailJS, uncomment and configure this:
  /*
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    from_name: fullname,
    from_email: email,
    message: message,
    to_name: "MD SHOWAIB RAHMAN TANVEER"
  }).then(
    function(response) {
      alert("Message sent successfully!");
      form.reset();
      formBtn.setAttribute("disabled", "");
    },
    function(error) {
      alert("Failed to send message. Please try again.");
    }
  );
  */
});

// Multi-page navigation - active link detection
// Automatically highlights the current page in navigation
(function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/*-----------------------------------*\
  #SHOW MORE PROJECTS
\*-----------------------------------*/

// Show more projects functionality - redirect to GitHub repos
const showMoreBtn = document.getElementById('showMoreBtn');

if (showMoreBtn) {
  showMoreBtn.addEventListener('click', function() {
    // Redirect to GitHub repositories page
    window.open('https://github.com/srtanveer?tab=repositories', '_blank');
  });
}
