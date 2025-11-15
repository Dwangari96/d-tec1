
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById('navToggle'); // the menu button
  var nav = document.getElementById('siteNav');      // the nav menu
  var year = document.getElementById('year');        // the footer year

  // Handle the nav toggle (for mobile)
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      this.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  
  
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // existing toggle + year code stays here

  // Hero slideshow
  let current = 0;
  const slides = document.querySelectorAll(".hero-media .slide");

  function showSlide(index) {
    slides.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
  }


  <script>
document.getElementById("whatsappForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const phone = document.getElementById("userPhone").value;

  const res = await fetch("/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `phone=${encodeURIComponent(phone)}`
  });

  const text = await res.text();
  document.getElementById("waResponse").innerText = text;
});
</script>


  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  if (slides.length > 0) {
    showSlide(current);
    setInterval(nextSlide, 4000); // change every 4 seconds
  }
});

const whatsappForm = document.getElementById('whatsappForm');
const waResponse = document.getElementById('waResponse');

whatsappForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const phone = document.getElementById('userPhone').value.trim();

  waResponse.textContent = '⏳ Subscribing...';
  waResponse.style.color = 'gold';

  try {
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ phone })
    });
    const data = await res.json();
    waResponse.textContent = data.message;
    waResponse.style.color = data.ok ? 'lightgreen' : 'salmon';
  } catch {
    waResponse.textContent = 'Network error.';
    waResponse.style.color = 'salmon';
  }
});


