const sampleUsers = [
      { name: "Sarah Johnson", avatar: "https://randomuser.me/api/portraits/women/32.jpg" },
      { name: "Michael Chen", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
      { name: "Emily Rodriguez", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
      { name: "David Kim", avatar: "https://randomuser.me/api/portraits/men/65.jpg" },
      { name: "Jessica Williams", avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
      { name: "Robert Garcia", avatar: "https://randomuser.me/api/portraits/men/75.jpg" },
      { name: "Olivia Martinez", avatar: "https://randomuser.me/api/portraits/women/12.jpg" },
      { name: "Daniel Wilson", avatar: "https://randomuser.me/api/portraits/men/33.jpg" }
    ];

    const sampleItems = [
      "Classic Burger Meal",
      "Spicy Chicken Sandwich",
      "Veggie Delight Pizza",
      "BBQ Bacon Cheeseburger",
      "Truffle Fries Combo",
      "Chocolate Milkshake",
      "Avocado Salad Bowl",
      "Double Cheese Pizza"
    ];

    const sampleReviews = [
      "Absolutely delicious! The burger was cooked to perfection and the fries were crispy. Will definitely order again!",
      "The pizza arrived hot and fresh. The crust was just the right amount of crispy. Highly recommend!",
      "Good flavor but the portion size was smaller than I expected for the price.",
      "The best chicken sandwich I've had in a long time. The spicy mayo was the perfect touch!",
      "Delivery was faster than expected. Food was still warm and tasted great.",
      "The milkshake was too thick to drink with a straw. Tasted good but hard to consume.",
      "Fresh ingredients and generous portions. The salad dressing was amazing!",
      "The cheese pizza was a bit greasy but overall good flavor. Kids loved it."
    ];

    function generateReviewData(count = 50) {
      const reviews = [];
      for (let i = 0; i < count; i++) {
        const user = sampleUsers[Math.floor(Math.random() * sampleUsers.length)];
        const item = sampleItems[Math.floor(Math.random() * sampleItems.length)];
        const reviewText = sampleReviews[Math.floor(Math.random() * sampleReviews.length)];
        const rating = parseFloat((Math.random() * 4 + 1).toFixed(1)); // Random rating between 1.0 and 5.0
        const date = getRandomDate();
        
        reviews.push({
          id: i + 1,
          user,
          item,
          reviewText,
          rating,
          date,
          timestamp: new Date(date).getTime(),
          helpfulCount: Math.floor(Math.random() * 20)
        });
      }
      return reviews.sort((a, b) => b.timestamp - a.timestamp);
    }

    function getRandomDate() {
      const now = new Date();
      const pastDate = new Date(now);
      pastDate.setDate(now.getDate() - Math.floor(Math.random() * 30));
      
      const options = { month: 'short', day: 'numeric', year: 'numeric' };
      return pastDate.toLocaleDateString('en-US', options);
    }

    function generateStars(rating) {
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
          stars += '<i class="fas fa-star"></i>';
        } else if (i - 0.5 <= rating) {
          stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
          stars += '<i class="far fa-star"></i>';
        }
      }
      return stars;
    }

    function generateReviewCard(review) {
      return `
        <div class="review-card fade-in" data-rating="${Math.floor(review.rating)}" data-date="${review.timestamp}">
          <div class="review-header">
            <img src="${review.user.avatar}" alt="${review.user.name}" class="review-avatar">
            <div class="review-user">
              <h4 class="review-name">${review.user.name}</h4>
              <span class="review-date">${review.date}</span>
            </div>
            <div class="review-rating">
              ${generateStars(review.rating)}
              <span>${review.rating}</span>
            </div>
          </div>
          <p class="review-item">Ordered: ${review.item}</p>
          <p class="review-text">${review.reviewText}</p>
          <div class="review-actions">
            <button class="action-btn helpful-btn" data-id="${review.id}">
              <i class="far fa-thumbs-up"></i>
              <span>Helpful (${review.helpfulCount})</span>
            </button>
            <button class="action-btn reply-btn">
              <i class="fas fa-reply"></i>
              <span>Reply</span>
            </button>
            <button class="action-btn report-btn">
              <i class="far fa-flag"></i>
              <span>Report</span>
            </button>
          </div>
        </div>
      `;
    }

    class ReviewManager {
      constructor() {
        this.allReviews = generateReviewData(50);
        this.filteredReviews = [...this.allReviews];
        this.currentPage = 1;
        this.reviewsPerPage = 8;
        this.filters = {
          ratings: [5, 4, 3],
          dateRange: 'all'
        };
        this.searchQuery = '';
      }

      applyFilters() {
        this.filteredReviews = this.allReviews.filter(review => {
          const ratingMatch = this.filters.ratings.includes(Math.floor(review.rating));
          
          const now = new Date();
          const reviewDate = new Date(review.date);
          let dateMatch = true;
          
          if (this.filters.dateRange === 'week') {
            const oneWeekAgo = new Date(now);
            oneWeekAgo.setDate(now.getDate() - 7);
            dateMatch = reviewDate >= oneWeekAgo;
          } else if (this.filters.dateRange === 'month') {
            const oneMonthAgo = new Date(now);
            oneMonthAgo.setMonth(now.getMonth() - 1);
            dateMatch = reviewDate >= oneMonthAgo;
          }
          
          const searchMatch = this.searchQuery === '' || 
            review.user.name.toLowerCase().includes(this.searchQuery) ||
            review.item.toLowerCase().includes(this.searchQuery) ||
            review.reviewText.toLowerCase().includes(this.searchQuery);
          
          return ratingMatch && dateMatch && searchMatch;
        });
        
        this.currentPage = 1; 
        this.renderReviews();
        this.updatePagination();
      }

      getPaginatedReviews() {
        const startIndex = (this.currentPage - 1) * this.reviewsPerPage;
        const endIndex = startIndex + this.reviewsPerPage;
        return this.filteredReviews.slice(startIndex, endIndex);
      }

      renderReviews() {
        const container = document.getElementById('reviews-container');
        
        if (this.filteredReviews.length === 0) {
          container.innerHTML = `
            <div class="empty-state">
              <i class="far fa-frown"></i>
              <h3>No reviews found</h3>
              <p>Try adjusting your filters or search query</p>
            </div>
          `;
          return;
        }
        
        const paginatedReviews = this.getPaginatedReviews();
        container.innerHTML = paginatedReviews.map(review => generateReviewCard(review)).join('');
        
        document.querySelectorAll('.helpful-btn').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const reviewId = parseInt(e.currentTarget.getAttribute('data-id'));
            this.handleHelpfulClick(reviewId);
          });
        });
      }

      updatePagination() {
        const totalPages = Math.ceil(this.filteredReviews.length / this.reviewsPerPage);
        const paginationContainer = document.querySelector('.pagination');
        const pageButtons = paginationContainer.querySelectorAll('.page-btn[data-page]');
        const prevButton = document.getElementById('prev-page');
        const nextButton = document.getElementById('next-page');
        
        pageButtons.forEach(button => {
          const pageNum = parseInt(button.getAttribute('data-page'));
          button.classList.toggle('active', pageNum === this.currentPage);
          button.style.display = pageNum <= totalPages ? 'flex' : 'none';
        });
        
        prevButton.disabled = this.currentPage === 1;
        nextButton.disabled = this.currentPage === totalPages || totalPages === 0;
      }

      handleHelpfulClick(reviewId) {
        const review = this.allReviews.find(r => r.id === reviewId);
        if (review) {
          review.helpfulCount += 1;
          this.renderReviews();
        }
      }

      setRatingFilters(ratings) {
        this.filters.ratings = ratings;
        this.applyFilters();
      }

      setDateRange(range) {
        this.filters.dateRange = range;
        this.applyFilters();
      }

      setSearchQuery(query) {
        this.searchQuery = query.toLowerCase();
        this.applyFilters();
      }

      goToPage(page) {
        this.currentPage = page;
        this.renderReviews();
        this.updatePagination();
      }

      nextPage() {
        if (this.currentPage < Math.ceil(this.filteredReviews.length / this.reviewsPerPage)) {
          this.currentPage += 1;
          this.renderReviews();
          this.updatePagination();
        }
      }

      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage -= 1;
          this.renderReviews();
          this.updatePagination();
        }
      }
    }

    document.addEventListener('DOMContentLoaded', function() {
      const reviewManager = new ReviewManager();
      reviewManager.renderReviews();
      

      const filterBtn = document.getElementById('filter-btn');
      const filterDropdown = document.getElementById('filter-dropdown');
      
      filterBtn.addEventListener('click', () => {
        filterDropdown.classList.toggle('show');
      });
      
      document.addEventListener('click', (e) => {
        if (!filterBtn.contains(e.target) && !filterDropdown.contains(e.target)) {
          filterDropdown.classList.remove('show');
        }
      });
      
      document.getElementById('apply-filters').addEventListener('click', () => {
        const checkedRatings = Array.from(document.querySelectorAll('input[name="rating"]:checked'))
          .map(input => parseInt(input.value));
        
        const selectedDateRange = document.querySelector('input[name="date-range"]:checked').value;
        
        reviewManager.setRatingFilters(checkedRatings);
        reviewManager.setDateRange(selectedDateRange);
        filterDropdown.classList.remove('show');
      });
      
      document.getElementById('reset-filters').addEventListener('click', () => {
        document.querySelectorAll('input[name="rating"]').forEach(input => {
          input.checked = ['5', '4', '3'].includes(input.value);
        });
        document.getElementById('date-all').checked = true;
      });
      

      const searchInput = document.getElementById('search-input');
      let searchTimeout;
      
      searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          reviewManager.setSearchQuery(searchInput.value.trim());
        }, 300);
      });
      

      document.querySelectorAll('.page-btn[data-page]').forEach(button => {
        button.addEventListener('click', () => {
          const page = parseInt(button.getAttribute('data-page'));
          reviewManager.goToPage(page);
        });
      });
      
      document.getElementById('prev-page').addEventListener('click', () => {
        reviewManager.prevPage();
      });
      
      document.getElementById('next-page').addEventListener('click', () => {
        reviewManager.nextPage();
      });
      
      const summaryCards = document.querySelectorAll('.summary-card');
      summaryCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
      });
    });