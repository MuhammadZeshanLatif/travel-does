(function () {
	const scriptURL = 'https://script.google.com/macros/s/AKfycbwOs-oMjIQSFDFMoupJ4BkcC8KhQ_rdnb8Li3dA6Wr6ApSVk-s3pNkrid4V0fjrFhrh/exec';

	const $ = (sel, root = document) => root.querySelector(sel);

	document.addEventListener('DOMContentLoaded', () => {
		const form = document.getElementById('bookingForm');
		if (!form) return;

		const btn = form.querySelector('button[type="submit"]');
		const msgBox = document.getElementById('formMessage');

		const showMessage = (type, text) => {
			if (!msgBox) return;
			msgBox.className = `form-message alert alert-${type}`;
			msgBox.textContent = text;
		};

		const validate = () => {
			const name = $('#name')?.value.trim();
			const email = $('#email')?.value.trim();
			const phone = $('#phone')?.value.trim();
			const travelers = $('#travelers')?.value;
			const destination = $('#destination')?.value;
			const date = $('#date')?.value;
			if (!name || !email || !phone || !travelers || !destination || !date) { showMessage('warning','Please fill all required fields.'); return false; }
			if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showMessage('warning','Please enter a valid email.'); return false; }
			if (phone.replace(/\D/g,'').length < 7) { showMessage('warning','Please enter a valid phone.'); return false; }
			const today = new Date(); today.setHours(0,0,0,0);
			const picked = new Date(date); picked.setHours(0,0,0,0);
			if (picked < today) { showMessage('warning','Preferred date cannot be in the past.'); return false; }
			return true;
		};

		form.addEventListener('submit', async (e) => {
			e.preventDefault();
			if (!validate()) return;

			try {
				// Build FormData — no custom headers → no CORS preflight
				const fd = new FormData();
				fd.append('timestamp', new Date().toLocaleString('en-PK', {
                    timeZone: 'Asia/Karachi',
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit', 
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                }));
				fd.append('name', $('#name')?.value.trim() || '');
				fd.append('email', $('#email')?.value.trim() || '');
				fd.append('phone', $('#phone')?.value.trim() || '');
				fd.append('travelers', $('#travelers')?.value || '');
				fd.append('destination', $('#destination')?.value || '');
				fd.append('date', $('#date')?.value || '');
				fd.append('duration', $('#duration')?.value || '');
				fd.append('budget', $('#budget')?.value || '');
				fd.append('message', $('#message')?.value?.trim() || '');
				fd.append('newsletter', $('#newsletter')?.checked ? 'Yes' : 'No');
				fd.append('source', 'contact_page');

				btn && (btn.disabled = true, btn.classList.add('loading'));
				showMessage('info', 'Submitting your request...');

				const res = await fetch(scriptURL, { method: 'POST', body: fd });
				// Some deployments return success without CORS JSON; treat 200 as success
				if (res.ok) {
					showMessage('success', 'Thank you! Your booking request has been received.');
					form.reset();
					return;
				}
				// Try JSON if available
				let data = {};
				try { data = await res.json(); } catch {}
				if (data?.success === true || data?.result === 'success') {
					showMessage('success', 'Thank you! Your booking request has been received.');
					form.reset();
				} else {
					throw new Error(data?.error ? `Submission failed (${data.error})` : `Submission failed (${res.status})`);
				}
			} catch (err) {
				showMessage('danger', `Sorry, we couldn't submit your request. Please try again. ${err?.message || ''}`);
			} finally {
				btn && (btn.disabled = false, btn.classList.remove('loading'));
			}
		});
	});
})();