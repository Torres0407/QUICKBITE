const restaurants = [
            {
                id: 1,
                name: "Pizza Palace",
                cuisine: "Italian",
                description: "Authentic Neapolitan pizza cooked in wood-fired oven with imported ingredients",
                rating: 4.8,
                reviewCount: 1245,
                deliveryTime: "20-30 min",
                price: "$$",
                features: ["Wood-fired", "Family-friendly", "Gluten-free options"],
                badge: "Popular",
                image: "Pizz.webp"
            },
            {
                id: 2,
                name: "Tokyo Sushi",
                cuisine: "Japanese",
                description: "Authentic sushi and sashimi prepared by master chefs with fresh wasabi",
                rating: 4.9,
                reviewCount: 892,
                deliveryTime: "15-25 min",
                price: "$$$",
                features: ["Omakase", "Sake bar", "Fresh wasabi"],
                badge: "Premium",
                image: "Sus.avif"
            },
            {
                id: 3,
                name: "Burger Barn",
                cuisine: "American",
                description: "Gourmet burgers made with locally-sourced beef and hand-cut fries",
                rating: 4.5,
                reviewCount: 2341,
                deliveryTime: "10-20 min",
                price: "$",
                features: ["Hand-cut fries", "Local beef", "Vegan options"],
                badge: "Fast Delivery",
                image: "Burger.webp"
            },
            {
                id: 4,
                name: "Taco Fiesta",
                cuisine: "Mexican",
                description: "Authentic Mexican street food with homemade tortillas and margaritas",
                rating: 4.6,
                reviewCount: 1567,
                deliveryTime: "25-35 min",
                price: "$$",
                features: ["Homemade tortillas", "Margaritas", "Spicy options"],
                badge: "New",
                image: "Taco.avif"
            },
            {
                id: 5,
                name: "Spice Garden",
                cuisine: "Indian",
                description: "Authentic Indian cuisine with tandoori specialties and vegetarian options",
                rating: 4.7,
                reviewCount: 1023,
                deliveryTime: "30-40 min",
                price: "$$",
                features: ["Tandoori oven", "Halal", "Vegan options"],
                badge: "Spicy",
                image: "Indian.avif"
            },
            {
                id: 6,
                name: "Bella Italia",
                cuisine: "Italian",
                description: "Romantic Italian restaurant featuring homemade pasta and extensive wine list",
                rating: 4.8,
                reviewCount: 1456,
                deliveryTime: "20-30 min",
                price: "$$$",
                features: ["Homemade pasta", "Wine pairing", "Romantic"],
                badge: "Popular",
                image: "Italian.webp"
            },
            {
                id: 7,
                name: "Thai Orchid",
                cuisine: "Thai",
                description: "Authentic Thai cuisine with adjustable spice levels and vegetarian options",
                rating: 4.4,
                reviewCount: 987,
                deliveryTime: "25-35 min",
                price: "$$",
                features: ["Authentic", "Spicy levels", "Vegetarian options"],
                badge: "",
                image: "Thai2.avif"
            },
            {
                id: 8,
                name: "Le Petit Bistro",
                cuisine: "French",
                description: "Michelin-starred French fine dining with tasting menus and sommelier service",
                rating: 4.9,
                reviewCount: 542,
                deliveryTime: "35-45 min",
                price: "$$$$",
                features: ["Michelin-starred", "Sommelier", "Tasting menu"],
                badge: "Luxury",
                image: "French.avif"
            },
            {
                id: 9,
                name: "Seoul Kitchen",
                cuisine: "Korean",
                description: "Authentic Korean BBQ with tabletop grills and extensive banchan selection",
                rating: 4.6,
                reviewCount: 876,
                deliveryTime: "20-30 min",
                price: "$$",
                features: ["Tabletop BBQ", "Banchan", "Soju cocktails"],
                badge: "Trending",
                image: "Korea.avif"
            },
            {
                id: 10,
                name: "Olive Tree",
                cuisine: "Mediterranean",
                description: "Healthy Mediterranean cuisine with organic ingredients and gluten-free options",
                rating: 4.5,
                reviewCount: 1112,
                deliveryTime: "15-25 min",
                price: "$$",
                features: ["Organic", "Hummus bar", "Gluten-free"],
                badge: "Healthy",
                image: "Med2.avif"
            },
            {
                id: 11,
                name: "Sub Station",
                cuisine: "American",
                description: "Classic sub sandwiches with fresh bread and generous portions",
                rating: 4.3,
                reviewCount: 2987,
                deliveryTime: "10-15 min",
                price: "$",
                features: ["Footlongs", "Fresh bread", "Quick service"],
                badge: "Fast Delivery",
                image: "Sandwich.webp"
            },
            {
                id: 12,
                name: "Golden Dragon",
                cuisine: "Chinese",
                description: "Authentic Chinese cuisine featuring dim sum and Szechuan specialties",
                rating: 4.4,
                reviewCount: 1345,
                deliveryTime: "20-30 min",
                price: "$$",
                features: ["Dim sum", "Szechuan", "Family meals"],
                badge: "",
                image: "Chinese.webp"
            },
            {
                id: 13,
                name: "La Cantina",
                cuisine: "Mexican",
                description: "Vibrant Mexican cantina with happy hour specials and taco Tuesday deals",
                rating: 4.7,
                reviewCount: 1876,
                deliveryTime: "15-25 min",
                price: "$$",
                features: ["Happy hour", "Taco Tuesday", "Patio seating"],
                badge: "Happy Hour",
                image: "Mexico.webp"
            },
            {
                id: 14,
                name: "All-American Diner",
                cuisine: "American",
                description: "Classic 24/7 diner serving all-day breakfast and comfort food favorites",
                rating: 4.2,
                reviewCount: 3456,
                deliveryTime: "15-20 min",
                price: "$",
                features: ["24/7", "Pancakes", "Milkshakes"],
                badge: "24/7",
                image: "USA1.avif"
            },
            {
                id: 15,
                name: "Roma Trattoria",
                cuisine: "Italian",
                description: "Authentic Roman cuisine featuring fresh pasta and seafood specialties",
                rating: 4.6,
                reviewCount: 1234,
                deliveryTime: "25-35 min",
                price: "$$$",
                features: ["Fresh pasta", "Wine cellar", "Romantic"],
                badge: "",
                image: "Pasta.webp"
            },
            {
                id: 16,
                name: "Ramen House",
                cuisine: "Japanese",
                description: "Authentic ramen shop featuring tonkotsu broth and late-night service",
                rating: 4.8,
                reviewCount: 1543,
                deliveryTime: "20-30 min",
                price: "$$$",
                features: ["Tonkotsu", "Late night", "Sake selection"],
                badge: "Late Night",
                image: "Ramen.avif"
            },
            {
                id: 17,
                name: "Prime Cut",
                cuisine: "American",
                description: "Premium steakhouse featuring dry-aged beef and wine pairing suggestions",
                rating: 4.5,
                reviewCount: 987,
                deliveryTime: "20-25 min",
                price: "$$",
                features: ["Dry-aged", "Wine pairing", "Private rooms"],
                badge: "Premium",
                image: "Steak.avif"
            },
            {
                id: 18,
                name: "Bombay Spice",
                cuisine: "Indian",
                description: "North Indian specialties featuring tandoori dishes and lunch buffet",
                rating: 4.6,
                reviewCount: 876,
                deliveryTime: "30-40 min",
                price: "$$",
                features: ["Tandoori specials", "Lunch buffet", "Vegetarian options"],
                badge: "",
                image: "Curry.avif"
            },
            {
                id: 19,
                name: "Zaitoun",
                cuisine: "Mediterranean",
                description: "Lebanese cuisine featuring mezze platters and hookah lounge",
                rating: 4.4,
                reviewCount: 765,
                deliveryTime: "20-30 min",
                price: "$$",
                features: ["Hummus bar", "Hookah lounge", "Vegetarian friendly"],
                badge: "",
                image: "Meds.webp"
            },
            {
                id: 20,
                name: "Crispy King",
                cuisine: "American",
                description: "24/7 fried chicken spot with spicy options and family meal deals",
                rating: 4.3,
                reviewCount: 2345,
                deliveryTime: "10-15 min",
                price: "$",
                features: ["24/7", "Spicy options", "Family meals"],
                badge: "24/7",
                image: "Chicken.avif"
            },
            {
                id: 21,
                name: "Bangkok Street",
                cuisine: "Thai",
                description: "Authentic Thai street food with bold flavors and vegetarian options",
                rating: 4.5,
                reviewCount: 987,
                deliveryTime: "25-35 min",
                price: "$$",
                features: ["Authentic", "Spicy levels", "Vegetarian options"],
                badge: "",
                image: "Thai.avif"
            },
            {
                id: 22,
                name: "Café Parisien",
                cuisine: "French",
                description: "Charming French bistro featuring croissants, wine bar and outdoor seating",
                rating: 4.7,
                reviewCount: 876,
                deliveryTime: "30-40 min",
                price: "$$$",
                features: ["Croissants", "Wine bar", "Outdoor seating"],
                badge: "",
                image: "Bistro.avif"
            },
            {
                id: 23,
                name: "K-Town BBQ",
                cuisine: "Korean",
                description: "All-you-can-eat Korean BBQ with tabletop grills and soju cocktails",
                rating: 4.6,
                reviewCount: 1234,
                deliveryTime: "20-30 min",
                price: "$$",
                features: ["All-you-can-eat", "Tabletop grill", "Soju cocktails"],
                badge: "All-You-Can-Eat",
                image: "BBQ.webp"
            },
            {
                id: 24,
                name: "Breakfast Club",
                cuisine: "American",
                description: "All-day breakfast spot with bottomless coffee and weekend specials",
                rating: 4.4,
                reviewCount: 2345,
                deliveryTime: "15-20 min",
                price: "$",
                features: ["All-day breakfast", "Bottomless coffee", "Weekend specials"],
                badge: "Breakfast",
                image: "Pancake.avif"
            },
            {
                id: 25,
                name: "Napoli Pizzeria",
                cuisine: "Italian",
                description: "Neapolitan pizza with imported ingredients and extensive wine selection",
                rating: 4.7,
                reviewCount: 1543,
                deliveryTime: "20-30 min",
                price: "$$$",
                features: ["Wood-fired", "Imported ingredients", "Wine selection"],
                badge: "",
                image: "Pizza.avif"
            },
            {
                id: 26,
                name: "Sakura Sushi",
                cuisine: "Japanese",
                description: "Premium sushi bar featuring omakase, fresh wasabi and sake flights",
                rating: 4.8,
                reviewCount: 1234,
                deliveryTime: "15-25 min",
                price: "$$$",
                features: ["Omakase", "Fresh wasabi", "Sake flights"],
                badge: "Premium",
                image: "Sushi.avif"
            },
            {
                id: 27,
                name: "Burrito Express",
                cuisine: "Mexican",
                description: "Build-your-own burritos with quick service and vegan options",
                rating: 4.5,
                reviewCount: 1876,
                deliveryTime: "15-25 min",
                price: "$$",
                features: ["Build-your-own", "Quick service", "Vegan options"],
                badge: "Fast",
                image: "Burrito.avif"
            },
            {
                id: 28,
                name: "Curry Leaf",
                cuisine: "Indian",
                description: "South Indian specialties featuring dosas and vegetarian thali meals",
                rating: 4.6,
                reviewCount: 987,
                deliveryTime: "25-35 min",
                price: "$$",
                features: ["Vegetarian", "Spice levels", "Thali meals"],
                badge: "Vegetarian",
                image: "Dosa.avif"
            },
            {
                id: 29,
                name: "Falafel King",
                cuisine: "Mediterranean",
                description: "Vegan-friendly Mediterranean spot with hummus bar and quick service",
                rating: 4.4,
                reviewCount: 765,
                deliveryTime: "20-30 min",
                price: "$$",
                features: ["Vegan", "Hummus bar", "Quick service"],
                badge: "Vegan",
                image: "Falafel.avif"
            },
            {
                id: 30,
                name: "Sweet Scoops",
                cuisine: "American",
                description: "Homemade ice cream shop with vegan options and seasonal flavors",
                rating: 4.3,
                reviewCount: 1234,
                deliveryTime: "10-15 min",
                price: "$",
                features: ["Homemade", "Vegan options", "Seasonal flavors"],
                badge: "Dessert",
                image: "Ice-cream.avif"
            }
        ];

        
        const restaurantGrid = document.getElementById('restaurantGrid');
        const searchInput = document.querySelector('.search-input');
        const filterTags = document.querySelectorAll('.filter-tag');
        const mobileFiltersBtn = document.getElementById('mobileFiltersBtn');
        const filterModal = document.getElementById('filterModal');
        const closeModal = document.getElementById('closeModal');
        const applyFilters = document.getElementById('applyFilters');
        const filterOptions = document.querySelectorAll('.filter-option');
        const pageBtns = document.querySelectorAll('.page-btn');

        
        function init() {
            renderRestaurants(restaurants);
            setupEventListeners();
        }

        
        function renderRestaurants(restaurantsToRender) {
            restaurantGrid.innerHTML = '';
            
            restaurantsToRender.forEach(restaurant => {
                const restaurantCard = document.createElement('div');
                restaurantCard.className = 'restaurant-card';
                restaurantCard.innerHTML = `
                    ${restaurant.badge ? `<span class="restaurant-badge">${restaurant.badge}</span>` : ''}
                    <div class="restaurant-image-container">
                        <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-image">
                    </div>
                    <div class="restaurant-info">
                        <div class="restaurant-header">
                            <h3 class="restaurant-name">${restaurant.name}</h3>
                            <div class="restaurant-rating">
                                <i class="fas fa-star"></i>
                                <span>${restaurant.rating}</span>
                            </div>
                        </div>
                        <p class="restaurant-cuisine">${restaurant.cuisine} • ${restaurant.description}</p>
                        <div class="restaurant-details">
                            <div class="restaurant-delivery">
                                <i class="fas fa-clock"></i>
                                <span>${restaurant.deliveryTime}</span>
                            </div>
                            <div class="restaurant-price">${restaurant.price}</div>
                        </div>
                        <div class="restaurant-features">
                            ${restaurant.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                        </div>
                    </div>
                `;
                restaurantGrid.appendChild(restaurantCard);
            });
        }

        
        function filterRestaurants() {
            const searchTerm = searchInput.value.toLowerCase();
            const activeFilterTag = document.querySelector('.filter-tag.active');
            const cuisineFilter = activeFilterTag ? activeFilterTag.textContent.toLowerCase() : 'all';

            const filtered = restaurants.filter(restaurant => {
                const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm) || 
                                     restaurant.description.toLowerCase().includes(searchTerm) ||
                                     restaurant.cuisine.toLowerCase().includes(searchTerm) ||
                                     restaurant.features.some(f => f.toLowerCase().includes(searchTerm));
                
                const matchesCuisine = cuisineFilter === 'all' || 
                                      restaurant.cuisine.toLowerCase() === cuisineFilter;
                
                return matchesSearch && matchesCuisine;
            });

            renderRestaurants(filtered);
        }

        
        function setupEventListeners() {
            searchInput.addEventListener('input', filterRestaurants);

            
            filterTags.forEach(tag => {
                tag.addEventListener('click', function() {
                    filterTags.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    filterRestaurants();
                });
            });

           
            mobileFiltersBtn.addEventListener('click', () => {
                filterModal.classList.add('active');
            });

            
            closeModal.addEventListener('click', () => {
                filterModal.classList.remove('active');
            });

            
            applyFilters.addEventListener('click', () => {
                filterModal.classList.remove('active');
            });

           
            filterOptions.forEach(option => {
                option.addEventListener('click', function() {
                    if (this.classList.contains('selected')) {
                        this.classList.remove('selected');
                    } else {
                        
                        const parent = this.parentElement;
                        parent.querySelectorAll('.filter-option').forEach(opt => {
                            opt.classList.remove('selected');
                        });
                        this.classList.add('selected');
                    }
                });
            });

            
            pageBtns.forEach((btn, idx) => {
                btn.addEventListener('click', function() {
                    
                    if (!btn.textContent.match(/^\d+$/)) return;

                    pageBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');

                    
                    const itemsPerPage = 6;
                    const page = parseInt(this.textContent, 6);
                    const start = (page - 1) * itemsPerPage;
                    const end = start + itemsPerPage;
                    renderRestaurants(restaurants.slice(start, end));

                    console.log(`Page ${this.textContent} clicked`);
                });
            });

            
            renderRestaurants(restaurants.slice(0, 6));
        }

        
        init();