let currentItemName = "";
let selectedDrink = "";
let totalPrice = 0;
let currentItemPrice = 0;

// Initialize Supabase
const SUPABASE_URL = 'https://pwqcgvbnpewyzphoxpym.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // truncated for security
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

document.addEventListener('DOMContentLoaded', async () => {
  // Show user name and avatar initials
  const userNameElement = document.getElementById('user-name');
  const userAvatarElement = document.getElementById('user-avatar');

  try {
    const { data, error } = await supabaseClient.auth.getUser();

    if (error || !data?.user) {
      console.log("No user found or not logged in");
      return;
    }

    const user = data.user;
    const username = user.user_metadata?.name || "User";
    userNameElement.textContent = username;

    const initials = username.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    userAvatarElement.textContent = initials;

  } catch (err) {
    console.error("Error fetching user info:", err);
  }

  // Toggle mobile nav
  document.querySelector('.hamburger').addEventListener('click', toggleMenu);

  // Attach event listeners to all Add-to-Cart buttons
  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const foodDetails = this.closest('.food-details');
      if (!foodDetails) return;

      currentItemName = foodDetails.querySelector('h4')?.textContent || "Item";
      selectedDrink = "";

      const priceText = foodDetails.querySelector('.new-price')?.textContent.replace(/[^\d]/g, '');
      currentItemPrice = parseInt(priceText || '0');

      document.getElementById('selectedFoodName').textContent = currentItemName;
      document.getElementById('quantity').value = 1;

      // Reset drink selection
      document.querySelectorAll('.drink-card').forEach(card => card.classList.remove('selected'));

      // Show modal
      document.getElementById('addToCartModal').classList.remove('hidden');
    });
  });

  // Search filter
  const searchInput = document.querySelector('.section-search input');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const query = this.value.toLowerCase();
      const allCards = document.querySelectorAll('.food-card');
      allCards.forEach(card => {
        const title = card.querySelector('h4')?.textContent.toLowerCase() || "";
        const desc = card.querySelector('.desc')?.textContent.toLowerCase() || "";
        card.style.display = (title.includes(query) || desc.includes(query)) ? "block" : "none";
      });
    });
  }
});

// Toggle nav
function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('show');
}

// Drink selection
function selectDrink(element, drink) {
  selectedDrink = drink;
  document.querySelectorAll('.drink-card').forEach(card => card.classList.remove('selected'));
  element.classList.add('selected');
}

// Close modal
function closeModal() {
  document.getElementById('addToCartModal').classList.add('hidden');
}

// Add to cart
function confirmAddToCart() {
  const qty = parseInt(document.getElementById('quantity').value);
  if (!qty || qty <= 0) return;

  const itemTotal = currentItemPrice * qty;
  totalPrice += itemTotal;

  const orderList = document.getElementById('orderItems');
  const newItem = document.createElement('div');
  newItem.className = 'order-item';

  let itemText = `${qty} x ${currentItemName}`;
  if (selectedDrink) itemText += ` + ${selectedDrink}`;

  newItem.innerHTML = `
    <span>${itemText}</span>
    <span>₦${itemTotal.toLocaleString()}</span>
    <button class="remove-btn" onclick="removeItem(this, ${itemTotal})">×</button>
  `;

  orderList.appendChild(newItem);
  document.getElementById('orderTotal').textContent = totalPrice.toLocaleString();
  closeModal();
}

// Remove item
function removeItem(button, price) {
  const item = button.parentElement;
  item.remove();
  totalPrice -= price;
  document.getElementById('orderTotal').textContent = totalPrice.toLocaleString();

  if (document.getElementById('orderItems').children.length === 0) {
    totalPrice = 0;
    document.getElementById('orderTotal').textContent = '0.00';
  }
}

// Clear cart
function clearCart() {
  document.getElementById('orderItems').innerHTML = '';
  totalPrice = 0;
  document.getElementById('orderTotal').textContent = '0.00';
}
