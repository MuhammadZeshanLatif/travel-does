function initGallery() {
    initGalleryFilter();
    initLightbox();
    initLazyLoading();
  }
  
  // Enhanced gallery filtering
  function initGalleryFilter() {
    const filterButtons = document.querySelectorAll('.gallery-filter .filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
  
        const filter = button.getAttribute('data-filter');
  
        galleryItems.forEach((item, index) => {
          const category = item.getAttribute('data-category');
          const shouldShow = filter === 'all' || category === filter;
          
          if (shouldShow) {
            item.style.display = 'block';
            // Stagger animation
            setTimeout(() => {
              item.style.animation = 'fadeInUp 0.5s ease';
            }, index * 100);
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
  
  // Lightbox functionality
  function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const title = item.querySelector('.gallery-overlay h3').textContent;
        const description = item.querySelector('.gallery-overlay p').textContent;
        
        showLightbox(img.src, title, description);
      });
    });
  }
  
  // Show lightbox modal
  function showLightbox(imageSrc, title, description) {
    // Create lightbox HTML
    const lightboxHTML = `
      <div class="lightbox" id="lightbox">
        <div class="lightbox-content">
          <span class="lightbox-close">&times;</span>
          <img src="${imageSrc}" alt="${title}" class="lightbox-image">
          <div class="lightbox-info">
            <h3>${title}</h3>
            <p>${description}</p>
          </div>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    
    const lightbox = document.getElementById('lightbox');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    
    // Close lightbox events
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
    
    // ESC key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    });
    
    // Animate in
    setTimeout(() => {
      lightbox.classList.add('active');
    }, 10);
  }
  
  // Close lightbox
  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
      lightbox.classList.remove('active');
      setTimeout(() => {
        lightbox.remove();
      }, 300);
    }
  }
  
  // Lazy loading for images
  function initLazyLoading() {
    const images = document.querySelectorAll('.gallery-item img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });
  
      images.forEach(img => {
        imageObserver.observe(img);
      });
    }
  }
  
  // Initialize when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
  } else {
    initGallery();
  }

  