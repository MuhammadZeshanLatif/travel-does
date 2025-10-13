import './style.css'

// Tours data with categories
const tours = [
  {
    id: 1,
    title: "Hunza Valley Explorer",
    description: "Experience the majestic beauty of Hunza Valley with eco-friendly trekking and cultural immersion. Visit ancient forts, crystal-clear lakes, and traditional villages.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
    price: "PKR 45,000",
    originalPrice: "PKR 55,000",
    duration: "5 Days",
    category: "north",
    discount: "18% Off",
    rating: 4.8,
    reviews: 24,
    highlights: ["Baltit Fort", "Attabad Lake", "Local Village Visits", "Eco-friendly Accommodation"]
  },
  {
    id: 2,
    title: "Swat Heritage Tour",
    description: "Discover the rich cultural heritage and natural beauty of the Switzerland of Pakistan. Explore Buddhist ruins, pristine valleys, and traditional crafts.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
    price: "PKR 38,000",
    duration: "4 Days",
    category: "north",
    rating: 4.6,
    reviews: 18,
    highlights: ["Mingora City", "Malam Jabba", "Buddhist Stupas", "Local Handicrafts"]
  },
  {
    id: 3,
    title: "Chitral Mountain Adventure",
    description: "Trek through pristine mountain landscapes and visit remote traditional villages. Experience authentic Kalash culture and breathtaking scenery.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=300&fit=crop",
    price: "PKR 52,000",
    duration: "6 Days",
    category: "north",
    rating: 4.9,
    reviews: 32,
    highlights: ["Kalash Valley", "Tirich Mir", "Traditional Villages", "Mountain Trekking"]
  },
  {
    id: 4,
    title: "Cholistan Desert Safari",
    description: "Explore the golden dunes of Cholistan and experience authentic desert life. Camp under starlit skies and discover ancient forts.",
    image: "https://images.unsplash.com/photo-1464822759844-d150baec8a96?w=500&h=300&fit=crop",
    price: "PKR 28,000",
    duration: "3 Days",
    category: "south",
    rating: 4.5,
    reviews: 15,
    highlights: ["Desert Camping", "Derawar Fort", "Camel Safari", "Stargazing"]
  },
  {
    id: 5,
    title: "Makran Coastal Journey",
    description: "Discover Pakistan's stunning coastline with pristine beaches and marine life. Experience the unique coastal culture and untouched beauty.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=300&fit=crop",
    price: "PKR 42,000",
    duration: "5 Days",
    category: "south",
    rating: 4.7,
    reviews: 21,
    highlights: ["Pristine Beaches", "Marine Life", "Coastal Villages", "Fishing Experience"]
  },
  {
    id: 6,
    title: "Urban Nature Camp",
    description: "Perfect for families - nature experiences and environmental education for children. Learn about conservation while having fun.",
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=500&h=300&fit=crop",
    price: "PKR 8,000",
    duration: "2 Days",
    category: "urban",
    rating: 4.4,
    reviews: 12,
    highlights: ["Nature Education", "Family Activities", "Conservation Learning", "Outdoor Games"]
  }
];

// Destinations data
const destinations = [
  {
    name: "Northern Pakistan",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    tours: 12,
    description: "Hunza, Swat, Chitral - Mountains & Culture"
  },
  {
    name: "Southern Pakistan", 
    image: "https://images.unsplash.com/photo-1464822759844-d150baec8a96?w=600&h=400&fit=crop",
    tours: 8,
    description: "Cholistan, Hingol, Makran Coast - Deserts & Beaches"
  },
  {
    name: "Urban Nature Camps",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop", 
    tours: 5,
    description: "Family-friendly nature experiences"
  }
];

// Testimonials data
const testimonials = [
  {
    name: "Sarah Ahmed",
    location: "Lahore, Pakistan",
    rating: 5,
    text: "Travel Dose showed me the real Pakistan - beautiful, authentic, and sustainable. The guides were amazing and the experience was unforgettable. Highly recommended!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Ahmed Hassan",
    location: "Karachi, Pakistan", 
    rating: 5,
    text: "Finally, a travel company that cares about the environment and local communities. Every trip feels meaningful and responsible. Will definitely travel with them again!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Fatima Khan",
    location: "Islamabad, Pakistan",
    rating: 5, 
    text: "The eco-friendly approach and community support really impressed me. Travel Dose made my Hunza trip memorable with their sustainable practices and local partnerships.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Sustainable Tourism in Pakistan",
    excerpt: "Discover how Pakistan is leading the way in eco-friendly travel and what you can do to make your adventures more sustainable...",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop",
    category: "Sustainability",
    date: "January 15, 2025",
    featured: true
  },
  {
    id: 2,
    title: "Hunza Valley: A Model of Sustainable Living",
    excerpt: "Learn how the Hunza people have maintained their pristine environment for centuries...",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    category: "Destinations", 
    date: "January 10, 2025",
    featured: false
  },
  {
    id: 3,
    title: "Protecting Pakistan's Unique Wildlife",
    excerpt: "Our efforts in wildlife conservation and how travelers can contribute...",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop",
    category: "Conservation",
    date: "January 8, 2025", 
    featured: false
  }
];

// Render tours on home page
function renderFeaturedTours() {
  const toursPreview = document.querySelector('.tours-preview');
  if (!toursPreview) return;

  const featuredTours = tours.slice(0, 3);
  
  toursPreview.innerHTML = featuredTours.map(tour => `
    <div class="tour-card" data-category="${tour.category}">
      ${tour.discount ? `<div class="tour-discount">${tour.discount}</div>` : ''}
      <img src="${tour.image}" alt="${tour.title}" class="tour-image">
      <div class="tour-content">
        <div class="tour-rating">
          <span class="stars">${'★'.repeat(Math.floor(tour.rating))}</span>
          <span class="rating-text">(${tour.reviews})</span>
        </div>
        <h3 class="tour-title">${tour.title}</h3>
        <p class="tour-description">${tour.description}</p>
        <div class="tour-details">
          <div class="price-section">
            ${tour.originalPrice ? `<span class="original-price">${tour.originalPrice}</span>` : ''}
            <span class="tour-price">${tour.price}</span>
          </div>
          <span class="tour-duration">${tour.duration}</span>
        </div>
        <a href="tours.html" class="btn-primary">View Details</a>
      </div>
    </div>
  `).join('');
}

// Render all tours on tours page
function renderAllTours() {
  const toursGrid = document.getElementById('toursGrid');
  if (!toursGrid) return;

  toursGrid.innerHTML = tours.map(tour => `
    <div class="tour-card" data-category="${tour.category}">
      ${tour.discount ? `<div class="tour-discount">${tour.discount}</div>` : ''}
      <img src="${tour.image}" alt="${tour.title}" class="tour-image">
      <div class="tour-content">
        <div class="tour-rating">
          <span class="stars">${'★'.repeat(Math.floor(tour.rating))}</span>
          <span class="rating-text">(${tour.reviews})</span>
        </div>
        <h3 class="tour-title">${tour.title}</h3>
        <p class="tour-description">${tour.description}</p>
        <div class="tour-highlights">
          ${tour.highlights.slice(0, 3).map(highlight => `<span class="highlight">${highlight}</span>`).join('')}
        </div>
        <div class="tour-details">
          <div class="price-section">
            ${tour.originalPrice ? `<span class="original-price">${tour.originalPrice}</span>` : ''}
            <span class="tour-price">${tour.price}</span>
          </div>
          <span class="tour-duration">${tour.duration}</span>
        </div>
        <a href="contact.html" class="btn-primary">Book This Tour</a>
      </div>
    </div>
  `).join('');
}

// Initialize tour filtering
function initTourFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const tourCards = document.querySelectorAll('.tour-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      tourCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          card.style.animation = 'fadeInUp 0.5s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Initialize gallery filtering
function initGalleryFilter() {
  const filterButtons = document.querySelectorAll('.gallery-filter .filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      galleryItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
          item.style.animation = 'fadeInUp 0.5s ease';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// Mobile menu functionality
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });

    // Close menu when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
      }
    });
  }
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80;
        const targetPosition = target.offsetTop - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Booking form submission with Google Sheets
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      travelers: document.getElementById('travelers').value,
      destination: document.getElementById('destination').value,
      date: document.getElementById('date').value,
      duration: document.getElementById('duration')?.value || '',
      message: document.getElementById('message').value,
      newsletter: document.getElementById('newsletter')?.checked || false,
      timestamp: new Date().toISOString(),
      source: 'website_contact_form'
    };

    const formMessage = document.getElementById('formMessage');

    try {
      // Show loading state
      formMessage.textContent = 'Submitting your request...';
      formMessage.className = 'form-message loading';
      formMessage.style.display = 'block';

      const response = await submitToGoogleSheets(formData);

      if (response.ok) {
        formMessage.textContent = 'Thank you! Your booking request has been submitted. We will contact you within 24 hours.';
        formMessage.className = 'form-message success';
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      formMessage.textContent = 'There was an error submitting your request. Please try again or contact us directly at info@traveldose.pk or WhatsApp +92 300 1234567';
      formMessage.className = 'form-message error';
    }

    // Hide message after 8 seconds
    setTimeout(() => {
      formMessage.style.display = 'none';
    }, 8000);
  });
}

// Google Sheets submission function
async function submitToGoogleSheets(formData) {
  // Replace with your actual Google Apps Script URL
  const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
  
  // For demo purposes, we'll simulate a successful submission
  // In production, replace this with actual fetch call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Form data would be submitted:', formData);
      resolve({ ok: true });
    }, 1000);
  });

  /* Uncomment this for actual Google Sheets integration:
  return fetch(scriptURL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  });
  */
}

// Newsletter subscription
function initNewsletter() {
  const newsletterForm = document.querySelector('.newsletter-form');
  if (!newsletterForm) return;

  newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = newsletterForm.querySelector('input[type="email"]').value;
    
    try {
      // Here you would submit to your newsletter service
      console.log('Newsletter subscription:', email);
      alert('Thank you for subscribing to our newsletter!');
      newsletterForm.reset();
    } catch (error) {
      alert('There was an error subscribing. Please try again.');
    }
  });
}

// Navbar scroll effect
function initNavbarScroll() {
  let lastScroll = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
  });
}

// Counter animation for stats
function initCounterAnimation() {
  const counters = document.querySelectorAll('.stat h3');
  
  const animateCounter = (counter) => {
    const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
    const increment = target / 100;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      
      if (counter.textContent.includes('PKR')) {
        counter.textContent = `${Math.floor(current).toLocaleString()} PKR`;
      } else if (counter.textContent.includes('%')) {
        counter.textContent = `${Math.floor(current)}%`;
      } else {
        counter.textContent = Math.floor(current);
      }
    }, 20);
  };

  // Intersection Observer for counter animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });

  counters.forEach(counter => {
    observer.observe(counter);
  });
}

// Initialize all functionality
function init() {
  // Page-specific initializations
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  switch (currentPage) {
    case 'index.html':
    case '':
      renderFeaturedTours();
      initCounterAnimation();
      break;
    case 'tours.html':
      renderAllTours();
      initTourFilter();
      break;
    case 'gallery.html':
      initGalleryFilter();
      break;
    case 'contact.html':
      initBookingForm();
      break;
    case 'blog.html':
      initNewsletter();
      break;
  }

  // Common initializations for all pages
  initMobileMenu();
  initSmoothScroll();
  initNavbarScroll();
  
  // Initialize booking form if present on any page
  if (document.getElementById('bookingForm')) {
    initBookingForm();
  }
  
  // Initialize newsletter if present
  if (document.querySelector('.newsletter-form')) {
    initNewsletter();
  }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export functions for use in other files
export { tours, destinations, testimonials, blogPosts };



document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initSmoothScroll();
  initNavbarScroll();
  initTourFilter();
  initGalleryFilter();
  initBookingForm();
  initCounterAnimation();
});

// Mobile menu functionality
function initMobileMenu() {
  const mobileToggle = document.querySelector('.navbar-toggler');
  const navMenu = document.querySelector('.navbar-collapse');

  if (mobileToggle && navMenu) {
      mobileToggle.addEventListener('click', () => {
          navMenu.classList.toggle('show');
      });

      // Close menu when clicking on nav links
      document.querySelectorAll('.nav-link').forEach(link => {
          link.addEventListener('click', () => {
              navMenu.classList.remove('show');
          });
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
          if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
              navMenu.classList.remove('show');
          }
      });
  }
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              const offset = 100;
              const targetPosition = target.offsetTop - offset;
              window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
              });
          }
      });
  });
}

// Navbar scroll effect
function initNavbarScroll() {
  let lastScroll = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
          navbar.style.background = 'rgba(255, 255, 255, 0.98)';
          navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
      } else {
          navbar.style.background = 'rgba(255, 255, 255, 0.95)';
          navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
      }

      lastScroll = currentScroll;
  });
}

// Tour filtering
function initTourFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const tourCards = document.querySelectorAll('.tour-card');

  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          // Add active class to clicked button
          button.classList.add('active');

          const filter = button.getAttribute('data-filter');

          tourCards.forEach(card => {
              if (filter === 'all' || card.getAttribute('data-category') === filter) {
                  card.style.display = 'block';
                  card.style.animation = 'fadeInUp 0.5s ease';
              } else {
                  card.style.display = 'none';
              }
          });
      });
  });
}

// Gallery filtering
function initGalleryFilter() {
  const filterButtons = document.querySelectorAll('.gallery-filter .filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');

          const filter = button.getAttribute('data-filter');

          galleryItems.forEach(item => {
              if (filter === 'all' || item.getAttribute('data-category') === filter) {
                  item.style.display = 'block';
                  item.style.animation = 'fadeInUp 0.5s ease';
              } else {
                  item.style.display = 'none';
              }
          });
      });
  });
}

// Booking form submission
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          phone: document.getElementById('phone').value,
          travelers: document.getElementById('travelers').value,
          destination: document.getElementById('destination').value,
          date: document.getElementById('date').value,
          duration: document.getElementById('duration')?.value || '',
          budget: document.getElementById('budget')?.value || '',
          message: document.getElementById('message').value,
          newsletter: document.getElementById('newsletter')?.checked || false,
          timestamp: new Date().toISOString(),
          source: 'website_contact_form'
      };

      const formMessage = document.getElementById('formMessage');

      try {
          // Show loading state
          formMessage.innerHTML = '<div class="alert alert-info">Submitting your request...</div>';
          formMessage.style.display = 'block';

          // Simulate form submission (replace with actual API call)
          await new Promise(resolve => setTimeout(resolve, 2000));

          formMessage.innerHTML = '<div class="alert alert-success">Thank you! Your booking request has been submitted. We will contact you within 24 hours.</div>';
          form.reset();
      } catch (error) {
          console.error('Form submission error:', error);
          formMessage.innerHTML = '<div class="alert alert-danger">There was an error submitting your request. Please try again or contact us directly at info@traveldose.pk or WhatsApp +92 300 1234567</div>';
      }

      // Hide message after 8 seconds
      setTimeout(() => {
          formMessage.style.display = 'none';
      }, 8000);
  });
}

// Counter animation for stats
function initCounterAnimation() {
  const counters = document.querySelectorAll('.stat h3');
  
  const animateCounter = (counter) => {
      const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
      const increment = target / 100;
      let current = 0;
      
      const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
              current = target;
              clearInterval(timer);
          }
          
          if (counter.textContent.includes('PKR')) {
              counter.textContent = `${Math.floor(current).toLocaleString()} PKR`;
          } else if (counter.textContent.includes('%')) {
              counter.textContent = `${Math.floor(current)}%`;
          } else if (counter.textContent.includes('K')) {
              counter.textContent = `${Math.floor(current)}K+`;
          } else {
              counter.textContent = Math.floor(current);
          }
      }, 20);
  };

  // Intersection Observer for counter animation
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateCounter(entry.target);
              observer.unobserve(entry.target);
          }
      });
  });

  counters.forEach(counter => {
      observer.observe(counter);
  });
}

// Add fade-in animation to elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
      }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Gallery lightbox functionality
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
      item.addEventListener('click', () => {
          const img = item.querySelector('img');
          const title = item.querySelector('h5').textContent;
          const description = item.querySelector('p').textContent;
          
          // Create lightbox
          const lightbox = document.createElement('div');
          lightbox.className = 'lightbox active';
          lightbox.innerHTML = `
              <div class="lightbox-content">
                  <span class="lightbox-close">&times;</span>
                  <img src="${img.src}" alt="${title}" class="lightbox-image">
                  <div class="lightbox-info">
                      <h3>${title}</h3>
                      <p>${description}</p>
                  </div>
              </div>
          `;
          
          document.body.appendChild(lightbox);
          
          // Close lightbox
          lightbox.addEventListener('click', (e) => {
              if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
                  document.body.removeChild(lightbox);
              }
          });
      });
  });
}

// Initialize gallery lightbox on gallery page
if (window.location.pathname.includes('gallery.html')) {
  initGalleryLightbox();
}

// WhatsApp integration
function initWhatsApp() {
  const whatsappButtons = document.querySelectorAll('[href*="wa.me"]');
  
  whatsappButtons.forEach(button => {
      button.addEventListener('click', (e) => {
          // Track WhatsApp clicks for analytics
          console.log('WhatsApp button clicked');
      });
  });
}

initWhatsApp();

let currentFilter = 'all';
let visibleItems = 15; // Initial visible items (5 rows x 3 columns)
const itemsPerLoad = 9; // Load 9 more items each time (3 rows x 3 columns)

function initGallery() {
    if (!document.getElementById('galleryGrid')) return;
    
    // Hide all items initially except first 15
    hideInitialItems();
    
    initGalleryFilter();
    initGalleryLightbox();
    initLoadMore();
    initGalleryAnimations();
}

// Hide initial items (show only first 15)
function hideInitialItems() {
    const allItems = document.querySelectorAll('.gallery-item');
    allItems.forEach((item, index) => {
        if (index < visibleItems) {
            item.classList.add('visible');
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
            item.classList.remove('visible');
        }
    });
}

// Enhanced Gallery filtering
function initGalleryFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const allGalleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            currentFilter = button.getAttribute('data-filter');
            
            // Reset visible items counter
            visibleItems = 15;
            
            // Filter and show items
            filterAndShowItems(allGalleryItems);
        });
    });
}

// Filter and show items based on current filter
function filterAndShowItems(allItems) {
    let visibleCount = 0;
    
    allItems.forEach((item, index) => {
        const category = item.getAttribute('data-category');
        const shouldShow = currentFilter === 'all' || category === currentFilter;
        
        if (shouldShow && visibleCount < visibleItems) {
            item.style.display = 'block';
            item.classList.add('visible');
            item.classList.remove('hidden');
            visibleCount++;
        } else {
            item.style.display = 'none';
            item.classList.add('hidden');
            item.classList.remove('visible');
        }
    });
    
    // Update load more button visibility
    updateLoadMoreButton(allItems);
}

// Update load more button based on available items
function updateLoadMoreButton(allItems) {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const filteredItems = Array.from(allItems).filter(item => {
        const category = item.getAttribute('data-category');
        return currentFilter === 'all' || category === currentFilter;
    });
    
    if (visibleItems >= filteredItems.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

// Enhanced Lightbox functionality
function initGalleryLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDescription = document.getElementById('lightboxDescription');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    
    let currentImages = [];
    let currentIndex = 0;

    // Get all visible gallery items
    const getAllVisibleItems = () => {
        return Array.from(document.querySelectorAll('.gallery-item.visible')).filter(item => 
            item.style.display !== 'none'
        );
    };

    // Open lightbox
    document.addEventListener('click', (e) => {
        const galleryItem = e.target.closest('.gallery-item');
        if (galleryItem && galleryItem.classList.contains('visible')) {
            const img = galleryItem.querySelector('img');
            const title = galleryItem.querySelector('h5').textContent;
            const description = galleryItem.querySelector('p').textContent;
            
            // Get current filtered images
            const visibleItems = getAllVisibleItems();
            
            currentImages = visibleItems.map(item => {
                const itemImg = item.querySelector('img');
                const itemTitle = item.querySelector('h5').textContent;
                const itemDescription = item.querySelector('p').textContent;
                
                return {
                    src: itemImg.src,
                    alt: itemImg.alt,
                    title: itemTitle,
                    description: itemDescription
                };
            });
            
            // Find current index
            currentIndex = currentImages.findIndex(imgData => imgData.src === img.src);
            if (currentIndex === -1) currentIndex = 0;
            
            showLightbox(currentImages[currentIndex]);
        }
    });

    // Show lightbox
    function showLightbox(image) {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightboxTitle.textContent = image.title;
        lightboxDescription.textContent = image.description;
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Hide lightbox
    function hideLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Close lightbox
    lightboxClose.addEventListener('click', hideLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            hideLightbox();
        }
    });

    // Previous image
    lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        showLightbox(currentImages[currentIndex]);
    });

    // Next image
    lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % currentImages.length;
        showLightbox(currentImages[currentIndex]);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                hideLightbox();
                break;
            case 'ArrowLeft':
                currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
                showLightbox(currentImages[currentIndex]);
                break;
            case 'ArrowRight':
                currentIndex = (currentIndex + 1) % currentImages.length;
                showLightbox(currentImages[currentIndex]);
                break;
        }
    });
}

// Load more functionality
function initLoadMore() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const allGalleryItems = document.querySelectorAll('.gallery-item');
    
    if (!loadMoreBtn || !allGalleryItems.length) return;
    
    loadMoreBtn.addEventListener('click', () => {
        loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Loading...';
        loadMoreBtn.disabled = true;
        
        // Simulate loading delay
        setTimeout(() => {
            // Increase visible items count
            visibleItems += itemsPerLoad;
            
            // Filter and show items
            filterAndShowItems(allGalleryItems);
            
            // Reset button
            loadMoreBtn.innerHTML = '<i class="fas fa-plus me-2"></i>Load More Photos';
            loadMoreBtn.disabled = false;
            
            // Reinitialize lightbox for new items
            initGalleryLightbox();
            
        }, 1000);
    });
}

// Gallery animations
function initGalleryAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);

    // Observe all visible gallery items
    document.querySelectorAll('.gallery-item.visible').forEach(item => {
        observer.observe(item);
    });
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on gallery page
    if (window.location.pathname.includes('gallery.html') || 
        document.getElementById('galleryGrid')) {
        initGallery();
    }
    
    // Initialize other common functions
    initMobileMenu();
    initSmoothScroll();
    initNavbarScroll();
});

// Rest of your existing functions...
function initMobileMenu() {
    const mobileToggle = document.querySelector('.navbar-toggler');
    const navMenu = document.querySelector('.navbar-collapse');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show');
            });
        });

        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                navMenu.classList.remove('show');
            }
        });
    }
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 100;
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initNavbarScroll() {
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });
}