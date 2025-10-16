// Initialize Supabase
const SUPABASE_URL = 'https://pwqcgvbnpewyzphoxpym.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3cWNndmJucGV3eXpwaG94cHltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MzM4NjAsImV4cCI6MjA2NTIwOTg2MH0.JZzL8_hK2cqoJTAE3qU0Srf2mporbGrVLlaHWxMjDtc';

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', async function () {
  const loginBtn = document.getElementById('login-signup-button');

  try {
    const { data, error } = await supabaseClient.auth.getUser();

    if (error || !data?.user) {
      console.log("User not logged in");
      return;
    }

    const name = data.user.user_metadata?.name || 'User';
    if (loginBtn) {
      loginBtn.textContent = `Hi, ${name}`;
      loginBtn.href = '#'; // change to your profile page if desired
    }
  } catch (err) {
    console.error("Error fetching user:", err);
  }
});

document.addEventListener('DOMContentLoaded', async function () {
  const loginBtn = document.getElementById('login-signup-button');
  const userMenu = document.getElementById('user-menu');
  const userButton = document.getElementById('user-button');
  const logoutButton = document.getElementById('logout-button');

  try {
    const { data, error } = await supabaseClient.auth.getUser();

    if (error || !data?.user) {
      loginBtn.style.display = 'inline-block';
      userMenu.style.display = 'none';
      return;
    }

    // Logged in
    const name = data.user.user_metadata?.name || 'User';
    userButton.textContent = `Hi, ${name} ▼`;
    loginBtn.style.display = 'none';
    userMenu.style.display = 'inline-block';

    // Toggle dropdown on click
    userButton.addEventListener('click', () => {
      userMenu.classList.toggle('show');
    });

    // Sign out and redirect to login
    logoutButton.addEventListener('click', async (e) => {
      e.preventDefault();
      await supabaseClient.auth.signOut();
      window.location.href = 'C:\\Users\\USER\\Documents\\QuickBite\\Customers Frontend\\Registration\\Login\\Index.html'; // redirect to login page
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!userMenu.contains(e.target)) {
        userMenu.classList.remove('show');
      }
    });

  } catch (err) {
    console.error("Error fetching user:", err);
  }
});



// Initialize Swipers
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: { slidesPerView: 2.5 },
    1024: { slidesPerView: 3.5 }
  }
});

const swiper2 = new Swiper(".secondSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 }
  }
});

// Theme toggle
function toggleTheme() {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
}
