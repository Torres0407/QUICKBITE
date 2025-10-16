function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show');
}


  
  const searchInput = document.querySelector(".search-bar input");
  const restaurantCards = document.querySelectorAll(".restaurant-card");

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();

    restaurantCards.forEach(card => {
      const name = card.querySelector(".restaurant-name").textContent.toLowerCase();
      if (name.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

