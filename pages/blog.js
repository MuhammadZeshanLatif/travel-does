(function () {
	// Helpers
	const $ = (sel, root = document) => root.querySelector(sel);
	const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
	const debounce = (fn, delay = 250) => {
		let t;
		return (...args) => {
			clearTimeout(t);
			t = setTimeout(() => fn(...args), delay);
		};
	};

	document.addEventListener('DOMContentLoaded', () => {
		// Elements
		const searchInput = document.querySelector('input.form-control[placeholder*="Search"]');
		const filterBtns = $$('.filter-btn');
		const allCards = $$('.blog-card').filter(card => !card.classList.contains('featured'));
		const featured = $('.blog-card.featured') || null;

		// Pagination elements (optional; present in layout)
		const pagination = $('.pagination');
		const pageItems = pagination ? $$('.page-item', pagination) : [];
		const pageLinks = pagination ? $$('.page-item .page-link', pagination) : [];

		// State
		let activeCategory = 'All';
		let query = '';
		const PAGE_SIZE = 6;
		let currentPage = 1;

		// Read card data
		function parseCard(card) {
			const titleEl = card.querySelector('.h5, .h4, h3, h2, .blog-title');
			const title = titleEl ? titleEl.textContent.trim() : '';
			const catEl = card.querySelector('.blog-category');
			const category = catEl ? catEl.textContent.trim() : 'General';
			const excerptEl = card.querySelector('p, .blog-excerpt');
			const excerpt = excerptEl ? excerptEl.textContent.trim() : '';
			return { title, category, excerpt };
		}

		// Filtering
		function applyFilters() {
			const q = query.toLowerCase();

			const filtered = allCards.filter(card => {
				const { title, category, excerpt } = parseCard(card);
				const catMatch = activeCategory === 'All' || category.toLowerCase() === activeCategory.toLowerCase();
				const text = `${title} ${excerpt}`.toLowerCase();
				const qMatch = q === '' || text.includes(q);
				return catMatch && qMatch;
			});

			// Pagination rendering
			render(filtered);
		}

		// Render with pagination
		function render(list) {
			// Hide all
			allCards.forEach(c => c.style.display = 'none');

			// Pagination math
			const total = list.length;
			const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
			if (currentPage > totalPages) currentPage = totalPages;

			const start = (currentPage - 1) * PAGE_SIZE;
			const end = start + PAGE_SIZE;
			const pageSlice = list.slice(start, end);

			// Show current page
			pageSlice.forEach(c => c.style.display = '');

			// Featured always visible (if present)
			if (featured) featured.style.display = '';

			// Update pagination UI if available
			if (pagination) {
				updatePagination(totalPages);
			} else {
				// If no pagination markup exists, do nothing
			}

			// No-results message
			handleEmptyState(total === 0);
		}

		function handleEmptyState(isEmpty) {
			let emptyEl = $('#blog-empty-state');
			if (isEmpty) {
				if (!emptyEl) {
					emptyEl = document.createElement('div');
					emptyEl.id = 'blog-empty-state';
					emptyEl.className = 'alert alert-light border border-success text-center mt-3';
					emptyEl.innerHTML = '<strong>No articles found.</strong> Try a different search or category.';
					// Insert after grid (target: the grid row inside main column)
					const mainCol = document.querySelector('.col-lg-8');
					if (mainCol) mainCol.appendChild(emptyEl);
				}
			} else {
				if (emptyEl) emptyEl.remove();
			}
		}

		function updatePagination(totalPages) {
			if (!pagination) return;

			// Build/refresh simple numeric pagination if needed
			// Expecting markup like: Prev, 1, 2, 3, Next
			const ul = pagination;
			ul.innerHTML = '';

			const addItem = (label, page, disabled = false, active = false) => {
				const li = document.createElement('li');
				li.className = 'page-item' + (disabled ? ' disabled' : '') + (active ? ' active' : '');
				const a = document.createElement('a');
				a.className = 'page-link';
				a.href = '#';
				a.textContent = label;
				a.addEventListener('click', (e) => {
					e.preventDefault();
					if (disabled) return;
					if (label === 'Prev') currentPage = Math.max(1, currentPage - 1);
					else if (label === 'Next') currentPage = Math.min(totalPages, currentPage + 1);
					else currentPage = page;
					applyFilters();
					window.scrollTo({ top: document.querySelector('.navbar') ? document.querySelector('.navbar').offsetHeight : 0, behavior: 'smooth' });
				});
				li.appendChild(a);
				ul.appendChild(li);
			};

			addItem('Prev', currentPage - 1, currentPage === 1, false);
			for (let p = 1; p <= totalPages; p++) {
				addItem(String(p), p, false, p === currentPage);
			}
			addItem('Next', currentPage + 1, currentPage === totalPages, false);
		}

		// Events: Filters
		filterBtns.forEach(btn => {
			btn.addEventListener('click', (e) => {
				e.preventDefault();
				filterBtns.forEach(b => b.classList.remove('active'));
				btn.classList.add('active');
				activeCategory = btn.textContent.trim() || 'All';
				currentPage = 1;
				applyFilters();
			});
		});

		// Events: Search
		if (searchInput) {
			const onSearch = debounce((e) => {
				query = e.target.value || '';
				currentPage = 1;
				applyFilters();
			}, 200);
			searchInput.addEventListener('input', onSearch);
		}

		// Newsletter (optional graceful handling)
		const newsletterForm = document.querySelector('.col-lg-4 form, .newsletter form');
		if (newsletterForm) {
			newsletterForm.addEventListener('submit', (e) => {
				e.preventDefault();
				const emailInput = newsletterForm.querySelector('input[type="email"]');
				if (!emailInput || !emailInput.value) return;
				const btn = newsletterForm.querySelector('button[type="submit"], .btn-primary, .btn-success');
				if (btn) btn.classList.add('loading');
				setTimeout(() => {
					if (btn) btn.classList.remove('loading');
					emailInput.value = '';
					alert('Thanks for subscribing! We\'ll send eco‑travel tips soon.');
				}, 600);
			});
		}

		// Initial render
		applyFilters();
	});
})();