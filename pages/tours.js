import { tours } from './main.js';

// Initialize tours page
function initToursPage() {
  renderAllTours();
  initTourFilter();
  initSearchFunctionality();
}

// Render all tours with enhanced features
function renderAllTours() {
  const toursGrid = document.getElementById('toursGrid');
  if (!toursGrid) return;

  toursGrid.innerHTML = tours.map(tour => `
    <div class="tour-card" data-category="${tour.category}" data-price="${tour.price.replace(/[^\d]/g, '')}">
      ${tour.discount ? `<div class="tour-discount">${tour.discount}</div>` : ''}
      <img src="${tour.image}" alt="${tour.title}" class="tour-image">
      <div class="tour-content">
        <div class="tour-rating">
          <span class="stars">${'★'.repeat(Math.floor(tour.rating))}${'☆'.repeat(5 - Math.floor(tour.rating))}</span>
          <span class="rating-text">${tour.rating} (${tour.reviews} reviews)</span>
        </div>
        <h3 class="tour-title">${tour.title}</h3>
        <p class="tour-description">${tour.description}</p>
        <div class="tour-highlights">
          ${tour.highlights.slice(0, 4).map(highlight => `<span class="highlight">${highlight}</span>`).join('')}
        </div>
        <div class="tour-details">
          <div class="price-section">
            ${tour.originalPrice ? `<span class="original-price">${tour.originalPrice}</span>` : ''}
            <span class="tour-price">${tour.price}</span>
          </div>
          <span class="tour-duration">${tour.duration}</span>
        </div>
        <div class="tour-actions">
          <a href="contact.html?tour=${tour.id}" class="btn-primary">Book Now</a>
          <a href="gallery.html" class="btn-secondary">View Gallery</a>
        </div>
      </div>
    </div>
  `).join('');
}

// Enhanced tour filtering
function initTourFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const tourCards = document.querySelectorAll('.tour-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');
      let visibleCount = 0;

      tourCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const shouldShow = filter === 'all' || category === filter;
        
        if (shouldShow) {
          card.style.display = 'block';
          card.style.animation = 'fadeInUp 0.5s ease';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      // Update results count
      updateResultsCount(visibleCount);
    });
  });
}

// Search functionality
function initSearchFunctionality() {
  // Add search input if it doesn't exist
  const toursSection = document.querySelector('.tours');
  if (toursSection && !document.querySelector('.tours-search')) {
    const searchHTML = `
      <div class="tours-search">
        <div class="search-input">
          <input type="text" id="tourSearch" placeholder="Search tours...">
          <span class="search-icon">🔍</span>
        </div>
      </div>
    `;
    
    const filterSection = toursSection.querySelector('.tours-filter');
    if (filterSection) {
      filterSection.insertAdjacentHTML('afterend', searchHTML);
      
      const searchInput = document.getElementById('tourSearch');
      if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
      }
    }
  }
}

// Handle search input
function handleSearch(e) {
  const searchTerm = e.target.value.toLowerCase();
  const tourCards = document.querySelectorAll('.tour-card');
  let visibleCount = 0;

  tourCards.forEach(card => {
    const title = card.querySelector('.tour-title').textContent.toLowerCase();
    const description = card.querySelector('.tour-description').textContent.toLowerCase();
    const highlights = Array.from(card.querySelectorAll('.highlight')).map(el => el.textContent.toLowerCase()).join(' ');
    
    const matches = title.includes(searchTerm) || 
                   description.includes(searchTerm) || 
                   highlights.includes(searchTerm);
    
    if (matches) {
      card.style.display = 'block';
      card.style.animation = 'fadeInUp 0.5s ease';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  updateResultsCount(visibleCount);
}

// Update results count
function updateResultsCount(count) {
  let countElement = document.querySelector('.results-count');
  if (!countElement) {
    countElement = document.createElement('div');
    countElement.className = 'results-count';
    const toursGrid = document.querySelector('.tours-grid');
    if (toursGrid) {
      toursGrid.insertAdjacentElement('beforebegin', countElement);
    }
  }
  
  countElement.textContent = `${count} tour${count !== 1 ? 's' : ''} found`;
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initToursPage);
} else {
  initToursPage();
}