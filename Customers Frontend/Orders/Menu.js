// Extensive menu data with 50+ items
        const menuData = [
            // Burgers
            {
                id: 1,
                name: "Classic Cheeseburger",
                category: "Burgers",
                price: 8.99,
                description: "Juicy beef patty with melted cheese, fresh lettuce, tomato, and our special sauce on a toasted bun.",
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 2,
                name: "BBQ Bacon Burger",
                category: "Burgers",
                price: 10.99,
                description: "Beef patty with crispy bacon, cheddar cheese, onion rings, and BBQ sauce.",
                image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 3,
                name: "Mushroom Swiss Burger",
                category: "Burgers",
                price: 9.99,
                description: "Juicy beef patty topped with sautéed mushrooms and melted Swiss cheese.",
                image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 4,
                name: "Spicy Jalapeño Burger",
                category: "Burgers",
                price: 9.49,
                description: "Beef patty with pepper jack cheese, fresh jalapeños, and chipotle mayo.",
                image: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 5,
                name: "Veggie Burger",
                category: "Burgers",
                price: 8.99,
                description: "House-made veggie patty with lettuce, tomato, and avocado spread.",
                image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            
            // Pizza
            {
                id: 6,
                name: "Pepperoni Pizza",
                category: "Pizza",
                price: 12.99,
                description: "Classic pizza with tomato sauce, mozzarella cheese, and generous pepperoni toppings.",
                image: "https://images.unsplash.com/photo-1620374645498-af6bd681a0bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 7,
                name: "Margherita Pizza",
                category: "Pizza",
                price: 11.99,
                description: "Simple and delicious with tomato sauce, fresh mozzarella, and basil.",
                image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 8,
                name: "Hawaiian Pizza",
                category: "Pizza",
                price: 13.99,
                description: "Tomato sauce, mozzarella, ham, and pineapple for that sweet and savory taste.",
                image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 9,
                name: "Vegetarian Pizza",
                category: "Pizza",
                price: 12.99,
                description: "Loaded with bell peppers, mushrooms, onions, olives, and tomatoes.",
                image: "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 10,
                name: "Meat Lovers Pizza",
                category: "Pizza",
                price: 14.99,
                description: "Packed with pepperoni, sausage, bacon, and ham for maximum meatiness.",
                image: "https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            
            // Pasta
            {
                id: 11,
                name: "Spaghetti Carbonara",
                category: "Pasta",
                price: 10.99,
                description: "Al dente spaghetti with creamy egg sauce, pancetta, and parmesan cheese.",
                image: "https://images.unsplash.com/photo-1611270632000-d7c8c6976a4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 12,
                name: "Fettuccine Alfredo",
                category: "Pasta",
                price: 11.49,
                description: "Creamy Alfredo sauce with fettuccine pasta and parmesan cheese.",
                image: "https://images.unsplash.com/photo-1676310995897-9af5ddebbe0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 13,
                name: "Penne Arrabiata",
                category: "Pasta",
                price: 9.99,
                description: "Penne pasta in a spicy tomato sauce with garlic and red chili peppers.",
                image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 14,
                name: "Lasagna Bolognese",
                category: "Pasta",
                price: 12.99,
                description: "Layers of pasta, rich meat sauce, béchamel, and melted cheese.",
                image: "https://images.unsplash.com/photo-1619895092538-128f3da3b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 15,
                name: "Shrimp Scampi",
                category: "Pasta",
                price: 13.99,
                description: "Linguine pasta with shrimp, garlic, white wine, and lemon butter sauce.",
                image: "https://images.unsplash.com/photo-1631055720633-2cc204f017f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            
            // Salads
            {
                id: 16,
                name: "Caesar Salad",
                category: "Salads",
                price: 7.99,
                description: "Fresh romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
                image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 17,
                name: "Greek Salad",
                category: "Salads",
                price: 8.49,
                description: "Cucumbers, tomatoes, red onion, feta cheese, and olives with olive oil dressing.",
                image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 18,
                name: "Cobb Salad",
                category: "Salads",
                price: 9.99,
                description: "Chopped salad with chicken, bacon, eggs, avocado, and blue cheese dressing.",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 19,
                name: "Asian Chicken Salad",
                category: "Salads",
                price: 8.99,
                description: "Mixed greens with grilled chicken, mandarin oranges, almonds, and sesame dressing.",
                image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 20,
                name: "Quinoa Salad",
                category: "Salads",
                price: 7.99,
                description: "Quinoa with cherry tomatoes, cucumber, feta cheese, and lemon vinaigrette.",
                image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            
            // Sandwiches
            {
                id: 21,
                name: "Classic Club Sandwich",
                category: "Sandwiches",
                price: 8.49,
                description: "Triple-decker with turkey, bacon, lettuce, tomato, and mayo on toasted bread.",
                image: "https://images.unsplash.com/photo-1611273426858-450d0e9a0f36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 22,
                name: "Philly Cheesesteak",
                category: "Sandwiches",
                price: 9.99,
                description: "Thinly sliced steak with melted cheese, onions, and peppers on a hoagie roll.",
                image: "https://images.unsplash.com/photo-1553909483-c65f495fc2f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 23,
                name: "Turkey Avocado Sandwich",
                category: "Sandwiches",
                price: 8.99,
                description: "Sliced turkey, avocado, lettuce, tomato, and mayo on whole grain bread.",
                image: "https://images.unsplash.com/photo-1603048719537-7a7b8d63a6bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 24,
                name: "Grilled Cheese",
                category: "Sandwiches",
                price: 6.99,
                description: "Melted cheddar and mozzarella between buttery grilled sourdough bread.",
                image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 25,
                name: "Chicken Pesto Panini",
                category: "Sandwiches",
                price: 9.49,
                description: "Grilled chicken, pesto, mozzarella, and sun-dried tomatoes pressed in ciabatta.",
                image: "https://images.unsplash.com/photo-1529563021893-cc83c992d00d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            
            // Sushi
            {
                id: 26,
                name: "California Roll",
                category: "Sushi",
                price: 6.99,
                description: "Crab, avocado, and cucumber wrapped in seaweed and rice with sesame seeds.",
                image: "https://images.unsplash.com/photo-1617196035154-1e2b6ef1a6fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 27,
                name: "Spicy Tuna Roll",
                category: "Sushi",
                price: 7.99,
                description: "Fresh tuna mixed with spicy mayo, wrapped in seaweed and rice.",
                image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 28,
                name: "Dragon Roll",
                category: "Sushi",
                price: 12.99,
                description: "Eel, crab, and cucumber topped with avocado and eel sauce.",
                image: "https://images.unsplash.com/photo-1617196034181-981b5f3db5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 29,
                name: "Salmon Nigiri",
                category: "Sushi",
                price: 8.99,
                description: "Fresh slices of salmon over pressed sushi rice.",
                image: "https://images.unsplash.com/photo-1563612116625-5977b837aac4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 30,
                name: "Rainbow Roll",
                category: "Sushi",
                price: 11.99,
                description: "California roll topped with assorted fish including tuna, salmon, and yellowtail.",
                image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            
            // Desserts
            {
                id: 31,
                name: "Chocolate Lava Cake",
                category: "Desserts",
                price: 5.99,
                description: "Warm chocolate cake with a molten center, served with vanilla ice cream.",
                image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 32,
                name: "New York Cheesecake",
                category: "Desserts",
                price: 6.49,
                description: "Classic creamy cheesecake with graham cracker crust and strawberry topping.",
                image: "https://images.unsplash.com/photo-1578775887804-699de7086ff9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 33,
                name: "Tiramisu",
                category: "Desserts",
                price: 6.99,
                description: "Layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa.",
                image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 34,
                name: "Apple Pie",
                category: "Desserts",
                price: 5.49,
                description: "Flaky crust filled with cinnamon-spiced apples, served with vanilla ice cream.",
                image: "https://images.unsplash.com/photo-1562007908-859b4ba9a1a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 35,
                name: "Crème Brûlée",
                category: "Desserts",
                price: 6.99,
                description: "Rich custard topped with a layer of hardened caramelized sugar.",
                image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            
            // Drinks
            {
                id: 36,
                name: "Iced Caramel Latte",
                category: "Drinks",
                price: 4.49,
                description: "Espresso with milk, ice, and sweet caramel syrup.",
                image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 37,
                name: "Fresh Orange Juice",
                category: "Drinks",
                price: 3.99,
                description: "Freshly squeezed orange juice, served chilled.",
                image: "https://images.unsplash.com/photo-1612230627231-8b9bdcfca5b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 38,
                name: "Strawberry Lemonade",
                category: "Drinks",
                price: 3.99,
                description: "Homemade lemonade with fresh strawberry puree.",
                image: "https://images.unsplash.com/photo-1551751299-1b51cab2694c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 39,
                name: "Craft Beer",
                category: "Drinks",
                price: 5.99,
                description: "Selection of local craft beers on rotation.",
                image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 40,
                name: "House Red Wine",
                category: "Drinks",
                price: 7.99,
                description: "Glass of our premium house red wine selection.",
                image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            
            // Breakfast
            {
                id: 41,
                name: "Avocado Toast",
                category: "Breakfast",
                price: 7.99,
                description: "Sourdough toast with smashed avocado, cherry tomatoes, and poached eggs.",
                image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 42,
                name: "Pancake Stack",
                category: "Breakfast",
                price: 8.49,
                description: "Fluffy pancakes with maple syrup, butter, and fresh berries.",
                image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 43,
                name: "Eggs Benedict",
                category: "Breakfast",
                price: 9.99,
                description: "English muffin with Canadian bacon, poached eggs, and hollandaise sauce.",
                image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 44,
                name: "Breakfast Burrito",
                category: "Breakfast",
                price: 8.99,
                description: "Scrambled eggs, cheese, potatoes, and your choice of bacon or sausage in a tortilla.",
                image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 45,
                name: "Greek Yogurt Parfait",
                category: "Breakfast",
                price: 6.99,
                description: "Greek yogurt layered with granola and fresh seasonal fruits.",
                image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            
            // Additional items to reach 50+
            {
                id: 46,
                name: "French Onion Soup",
                category: "Appetizers",
                price: 5.99,
                description: "Caramelized onions in rich beef broth, topped with toasted bread and melted cheese.",
                image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 47,
                name: "Garlic Bread",
                category: "Appetizers",
                price: 4.49,
                description: "Toasted bread with garlic butter and parsley, served warm.",
                image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 48,
                name: "Chicken Wings",
                category: "Appetizers",
                price: 8.99,
                description: "Crispy chicken wings tossed in your choice of buffalo, BBQ, or garlic parmesan sauce.",
                image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 49,
                name: "Mozzarella Sticks",
                category: "Appetizers",
                price: 6.99,
                description: "Breaded mozzarella cheese sticks fried to perfection, served with marinara sauce.",
                image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 50,
                name: "Bruschetta",
                category: "Appetizers",
                price: 7.49,
                description: "Toasted bread topped with tomatoes, garlic, fresh basil, and olive oil.",
                image: "https://images.unsplash.com/photo-1529563021893-cc83c992d00d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 51,
                name: "Chocolate Milkshake",
                category: "Drinks",
                price: 5.99,
                description: "Creamy chocolate milkshake topped with whipped cream and chocolate shavings.",
                image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 52,
                name: "Iced Tea",
                category: "Drinks",
                price: 2.99,
                description: "Freshly brewed iced tea with lemon, sweetened or unsweetened.",
                image: "https://images.unsplash.com/photo-1560345573-9f45383c2a37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            }
        ];

        // Cart state
        let cart = [];
        
        // DOM elements
        const menuItemsContainer = document.getElementById('menuItems');
        const cartIcon = document.getElementById('cartIcon');
        const cartCount = document.getElementById('cartCount');
        const cartSidebar = document.getElementById('cartSidebar');
        const closeCart = document.getElementById('closeCart');
        const cartItemsContainer = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        const overlay = document.getElementById('overlay');
        const categoryButtons = document.querySelectorAll('.category-btn');
        
        // Initialize the menu
        function renderMenuItems(category = 'All') {
            menuItemsContainer.innerHTML = '';
            
            const filteredItems = category === 'All' 
                ? menuData 
                : menuData.filter(item => item.category === category);
            
            filteredItems.forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.className = 'menu-item';
                menuItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="menu-item-img">
                    <div class="menu-item-content">
                        <div class="menu-item-header">
                            <h3 class="menu-item-title">${item.name}</h3>
                            <span class="menu-item-price">$${item.price.toFixed(2)}</span>
                        </div>
                        <p class="menu-item-desc">${item.description}</p>
                        <div class="menu-item-footer">
                            <div class="quantity-controls">
                                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                                <span class="quantity" data-id="${item.id}">0</span>
                                <button class="quantity-btn plus" data-id="${item.id}">+</button>
                            </div>
                            <button class="add-to-cart" data-id="${item.id}">
                                <i class="fas fa-shopping-cart"></i> Add
                            </button>
                        </div>
                    </div>
                `;
                menuItemsContainer.appendChild(menuItem);
            });
            
            // Add event listeners to the new buttons
            addEventListeners();
            
            // Update quantities based on cart
            updateAllQuantityDisplays();
        }
        
        // Update all quantity displays based on cart
        function updateAllQuantityDisplays() {
            cart.forEach(item => {
                updateQuantityDisplay(item.id);
            });
        }
        
        // Add event listeners to interactive elements
        function addEventListeners() {
            // Add to cart buttons
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', function() {
                    const itemId = parseInt(this.getAttribute('data-id'));
                    addToCart(itemId);
                });
            });
            
            // Quantity plus buttons
            document.querySelectorAll('.quantity-btn.plus').forEach(button => {
                button.addEventListener('click', function() {
                    const itemId = parseInt(this.getAttribute('data-id'));
                    increaseQuantity(itemId);
                });
            });
            
            // Quantity minus buttons
            document.querySelectorAll('.quantity-btn.minus').forEach(button => {
                button.addEventListener('click', function() {
                    const itemId = parseInt(this.getAttribute('data-id'));
                    decreaseQuantity(itemId);
                });
            });
        }
        
        // Add item to cart
        function addToCart(itemId) {
            const item = menuData.find(i => i.id === itemId);
            const existingItem = cart.find(i => i.id === itemId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    ...item,
                    quantity: 1
                });
            }
            
            updateCart();
            updateQuantityDisplay(itemId);
        }
        
        // Increase item quantity
        function increaseQuantity(itemId) {
            const item = cart.find(i => i.id === itemId);
            
            if (item) {
                item.quantity += 1;
            } else {
                addToCart(itemId);
                return;
            }
            
            updateCart();
            updateQuantityDisplay(itemId);
        }
        
        // Decrease item quantity
        function decreaseQuantity(itemId) {
            const itemIndex = cart.findIndex(i => i.id === itemId);
            
            if (itemIndex !== -1) {
                if (cart[itemIndex].quantity > 1) {
                    cart[itemIndex].quantity -= 1;
                } else {
                    cart.splice(itemIndex, 1);
                }
            }
            
            updateCart();
            updateQuantityDisplay(itemId);
        }
        
        // Update quantity display on menu items
        function updateQuantityDisplay(itemId) {
            const quantityDisplay = document.querySelector(`.quantity[data-id="${itemId}"]`);
            if (quantityDisplay) {
                const item = cart.find(i => i.id === itemId);
                quantityDisplay.textContent = item ? item.quantity : '0';
            }
        }
        
        // Update cart UI
        function updateCart() {
            // Update cart count
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
            
            // Update cart items list
            cartItemsContainer.innerHTML = '';
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p style="text-align: center; color: #666;">Your cart is empty</p>';
                cartTotal.textContent = '$0.00';
                return;
            }
            
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-details">
                        <div class="cart-item-header">
                            <span class="cart-item-name">${item.name}</span>
                            <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                        <p class="cart-item-desc">${item.description}</p>
                        <div class="cart-item-controls">
                            <button class="remove-item" data-id="${item.id}">
                                <i class="fas fa-trash"></i> Remove
                            </button>
                            <div class="quantity-controls">
                                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                                <span class="quantity">${item.quantity}</span>
                                <button class="quantity-btn plus" data-id="${item.id}">+</button>
                            </div>
                        </div>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItem);
            });
            
            // Update cart total
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotal.textContent = `$${total.toFixed(2)}`;
            
            // Add event listeners to cart item buttons
            document.querySelectorAll('.cart-item .quantity-btn.plus').forEach(button => {
                button.addEventListener('click', function() {
                    const itemId = parseInt(this.getAttribute('data-id'));
                    increaseQuantity(itemId);
                });
            });
            
            document.querySelectorAll('.cart-item .quantity-btn.minus').forEach(button => {
                button.addEventListener('click', function() {
                    const itemId = parseInt(this.getAttribute('data-id'));
                    decreaseQuantity(itemId);
                });
            });
            
            document.querySelectorAll('.cart-item .remove-item').forEach(button => {
                button.addEventListener('click', function() {
                    const itemId = parseInt(this.getAttribute('data-id'));
                    removeFromCart(itemId);
                });
            });
        }
        
        // Remove item from cart completely
        function removeFromCart(itemId) {
            cart = cart.filter(item => item.id !== itemId);
            updateCart();
            updateQuantityDisplay(itemId);
        }
        
        // Toggle cart sidebar
        function toggleCart() {
            cartSidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        }
        
        // Category filtering
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                renderMenuItems(this.textContent);
            });
        });
        
        // Event listeners
        cartIcon.addEventListener('click', toggleCart);
        closeCart.addEventListener('click', toggleCart);
        overlay.addEventListener('click', toggleCart);
        
        // Initialize the page
        renderMenuItems();