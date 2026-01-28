// =============================================
// 1. Click to Change Background
// =============================================
document.getElementById('bgBtn').addEventListener('click', () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.background = `rgb(${r}, ${g}, ${b})`;
});

// =============================================
// 2. Toggle Light/Dark Mode
// =============================================
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
    themeBtn.textContent = 'Switch to Dark Mode';
  } else {
    document.body.classList.add('dark');
    themeBtn.textContent = 'Switch to Light Mode';
  }
});
// Add this in <style> or here
document.head.insertAdjacentHTML('beforeend', `
  <style>
    body.dark { background: #121212; color: #eee; }
    body.dark section { background: #1e1e1e; }
  </style>
`);

// =============================================
// 3. Hide Element on Click
// =============================================
document.getElementById('hideBtn').addEventListener('click', function() {
  this.style.display = 'none';
});

// =============================================
// 4. Counter
// =============================================
let count = 0;
document.getElementById('incBtn').addEventListener('click', () => {
  count++;
  document.getElementById('counterDisplay').textContent = count;
});
document.getElementById('decBtn').addEventListener('click', () => {
  count--;
  document.getElementById('counterDisplay').textContent = count;
});

// =============================================
// 5. Disable After Click
// =============================================
document.getElementById('onceBtn').addEventListener('click', function() {
  this.disabled = true;
  this.textContent = 'Clicked Once!';
}, { once: true });

// =============================================
// 6. Live Character Count
// =============================================
document.getElementById('charCountArea').addEventListener('input', function() {
  document.getElementById('charCount').textContent = this.value.length;
});

// =============================================
// 7. Password Strength
// =============================================
document.getElementById('passwordInput').addEventListener('input', function() {
  const val = this.value;
  let strength = 'Weak';
  let color = 'red';

  if (val.length > 10 && /[A-Z]/.test(val) && /\d/.test(val) && /[!@#$%^&*]/.test(val)) {
    strength = 'Very Strong';
    color = 'green';
  } else if (val.length >= 8 && /[A-Z]/.test(val) && /\d/.test(val)) {
    strength = 'Strong';
    color = '#27ae60';
  } else if (val.length >= 5) {
    strength = 'Medium';
    color = 'orange';
  }

  const strengthEl = document.getElementById('strengthText');
  strengthEl.textContent = strength;
  strengthEl.style.color = color;
});

// =============================================
// 17. Back to Top Button (example of scroll event)
// =============================================
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Add remaining tasks (8 to 20) in the same style below...
// For example:
// document.getElementById('someId').addEventListener(...);
// Just match the IDs from your HTML sections