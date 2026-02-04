// ===== Page Loader =====
window.addEventListener('load', () => {
  const pageLoader = document.getElementById('pageLoader');
  if (pageLoader) {
    setTimeout(() => {
      pageLoader.classList.add('hide');
    }, 500);
  }
});

// ===== Back-to-Top Button Functionality =====
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ===== Navbar Scroll Effect =====
const header = document.querySelector('header');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===== Contact Form Validation =====
function validateContactForm() {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const messageInput = document.getElementById('contactMessage');
  
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  
  let isValid = true;

  // Clear previous errors
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  nameInput.classList.remove('error');
  emailInput.classList.remove('error');
  messageInput.classList.remove('error');
  nameError.classList.remove('show');
  emailError.classList.remove('show');
  messageError.classList.remove('show');

  // Validate Name
  if (nameInput.value.trim() === '') {
    nameError.textContent = '⚠ Please enter your name';
    nameError.classList.add('show');
    nameInput.classList.add('error');
    isValid = false;
  } else if (nameInput.value.trim().length < 2) {
    nameError.textContent = '⚠ Name must be at least 2 characters';
    nameError.classList.add('show');
    nameInput.classList.add('error');
    isValid = false;
  }

  // Validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value.trim() === '') {
    emailError.textContent = '⚠ Please enter your email';
    emailError.classList.add('show');
    emailInput.classList.add('error');
    isValid = false;
  } else if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = '⚠ Please enter a valid email';
    emailError.classList.add('show');
    emailInput.classList.add('error');
    isValid = false;
  }

  // Validate Message
  if (messageInput.value.trim() === '') {
    messageError.textContent = '⚠ Please enter your message';
    messageError.classList.add('show');
    messageInput.classList.add('error');
    isValid = false;
  } else if (messageInput.value.trim().length < 10) {
    messageError.textContent = '⚠ Message must be at least 10 characters';
    messageError.classList.add('show');
    messageInput.classList.add('error');
    isValid = false;
  }

  return isValid;
}

// Handle Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Validate form
  if (!validateContactForm()) {
    return;
  }

  // Show success message
  this.reset();
  document.getElementById('thankYouMsg').style.display = 'block';
  
  // Clear success message after 5 seconds
  setTimeout(() => {
    document.getElementById('thankYouMsg').style.display = 'none';
  }, 5000);

  // Clear error states
  document.getElementById('contactName').classList.remove('error');
  document.getElementById('contactEmail').classList.remove('error');
  document.getElementById('contactMessage').classList.remove('error');
});

// Real-time validation on input
document.getElementById('contactName').addEventListener('blur', function() {
  if (this.value.trim() === '') {
    document.getElementById('nameError').textContent = '⚠ Please enter your name';
    document.getElementById('nameError').classList.add('show');
    this.classList.add('error');
  } else if (this.value.trim().length < 2) {
    document.getElementById('nameError').textContent = '⚠ Name must be at least 2 characters';
    document.getElementById('nameError').classList.add('show');
    this.classList.add('error');
  } else {
    document.getElementById('nameError').classList.remove('show');
    this.classList.remove('error');
  }
});

document.getElementById('contactEmail').addEventListener('blur', function() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (this.value.trim() === '') {
    document.getElementById('emailError').textContent = '⚠ Please enter your email';
    document.getElementById('emailError').classList.add('show');
    this.classList.add('error');
  } else if (!emailRegex.test(this.value.trim())) {
    document.getElementById('emailError').textContent = '⚠ Please enter a valid email';
    document.getElementById('emailError').classList.add('show');
    this.classList.add('error');
  } else {
    document.getElementById('emailError').classList.remove('show');
    this.classList.remove('error');
  }
});

document.getElementById('contactMessage').addEventListener('blur', function() {
  if (this.value.trim() === '') {
    document.getElementById('messageError').textContent = '⚠ Please enter your message';
    document.getElementById('messageError').classList.add('show');
    this.classList.add('error');
  } else if (this.value.trim().length < 10) {
    document.getElementById('messageError').textContent = '⚠ Message must be at least 10 characters';
    document.getElementById('messageError').classList.add('show');
    this.classList.add('error');
  } else {
    document.getElementById('messageError').classList.remove('show');
    this.classList.remove('error');
  }
});

// ===== Scroll Reveal Animation =====
function revealOnScroll() {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    
    // Trigger reveal when element is 100px from bottom of viewport
    if (elementTop < windowHeight - 100 && elementBottom > 0) {
      element.classList.add('active');
    }
  });
}

// Trigger on scroll
window.addEventListener('scroll', revealOnScroll);
// Trigger on page load
window.addEventListener('load', revealOnScroll);

// ===== Typing Effect in Hero Text =====
function typeWriter(element, text, speed = 80) {
  let index = 0;
  element.textContent = '';
  
  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Start typing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
  const typingElement = document.getElementById('typing-text');
  if (typingElement) {
    const fullText = 'Associate Developer | AI / ML Developer | Computer Vision';
    typeWriter(typingElement, fullText, 60);
  }
  highlightActiveSection();
  revealOnScroll(); // Trigger reveal for elements already in view
});

// ===== Smooth Navigation Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      // Close mobile menu if open
      const navLinks = document.getElementById('nav-links');
      if (navLinks) {
        navLinks.classList.remove('active');
      }
      
      // Smooth scroll to target
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== Active Section Highlight on Scroll =====
function highlightActiveSection() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    // Check if section is in viewport
    if (window.scrollY >= sectionTop - 200) {
      currentSection = section.getAttribute('id');
    }
  });
  
  // Remove active class from all links
  navLinks.forEach(link => {
    link.classList.remove('active-link');
  });
  
  // Add active class to current section link
  if (currentSection) {
    const activeLink = document.querySelector(`.nav-links a[href="#${currentSection}"]`);
    if (activeLink) {
      activeLink.classList.add('active-link');
    }
  }
}

// Highlight section on scroll
window.addEventListener('scroll', highlightActiveSection);
