/*============================
    MENU DATA & FUNCTIONALITY
============================*/

// Menu items data
const menuData = [
    // Starters
    {
        name: "Royal Sampler Platter",
        price: "32",
        description: "A grand assortment of our finest appetizers including tandoori prawns, lamb seekh kebab, and vegetable samosas.",
        image: "food1.jpg",
        category: "starters",
        attributes: ["chef-special"]
    },
    {
        name: "Gilded Lamb Samosas",
        price: "18",
        description: "Crispy pastry triangles filled with spiced minced lamb, served with mint chutney and tamarind sauce.",
        image: "food2.jpg",
        category: "starters",
        attributes: []
    },
    {
        name: "Regal Chaat Selection",
        price: "16",
        description: "A vibrant medley of crispy elements, tangy chutneys, and aromatic spices, expertly layered for a burst of flavors.",
        image: "food3.jpg",
        category: "starters",
        attributes: ["vegetarian"]
    },
    {
        name: "Lucknawi Galouti Kebab",
        price: "22",
        description: "Melt-in-your-mouth lamb patties seasoned with 32 spices, served on mini ulta tawa paratha.",
        image: "food4.jpg",
        category: "starters",
        attributes: ["chef-special"]
    },
    {
        name: "Tandoori Seafood Treasures",
        price: "28",
        description: "Assorted seafood marinated in aromatic spices and cooked in our clay tandoor, served with saffron aioli.",
        image: "food2.jpg",
        category: "starters",
        attributes: []
    },
    {
        name: "Jeweled Paneer Tikka",
        price: "18",
        description: "Cubes of cottage cheese marinated in royal spices, roasted in tandoor with bell peppers and onions.",
        image: "food3.jpg",
        category: "starters",
        attributes: ["vegetarian"]
    },
    
    // Main Course
    {
        name: "Emperor's Lamb Shank",
        price: "38",
        description: "Slow-braised lamb shank in a rich, aromatic gravy of whole spices, served with saffron rice and buttered naan.",
        image: "food4.jpg",
        category: "main",
        attributes: ["chef-special"]
    },
    {
        name: "Maharaja's Butter Chicken",
        price: "26",
        description: "Tandoor-roasted chicken simmered in a velvety tomato gravy enriched with butter and cream. A royal classic.",
        image: "food1.jpg",
        category: "main",
        attributes: []
    },
    {
        name: "Rajasthani Laal Maas",
        price: "30",
        description: "Fiery mutton curry from the royal kitchens of Rajasthan, with whole red chilies and robust spices.",
        image: "food2.jpg",
        category: "main",
        attributes: ["spicy"]
    },
    {
        name: "Hyderabadi Dum Biryani",
        price: "28",
        description: "Aromatic basmati rice layered with marinated meat and spices, slow-cooked under a sealed pastry lid.",
        image: "food3.jpg",
        category: "main",
        attributes: []
    },
    {
        name: "Royal Vegetable Kofta",
        price: "22",
        description: "Luxurious dumplings of minced vegetables and paneer, simmered in a saffron-infused creamy gravy.",
        image: "food4.jpg",
        category: "main",
        attributes: ["vegetarian"]
    },
    {
        name: "Awadhi Korma",
        price: "24",
        description: "A delicate preparation of meat or vegetables in a rich, aromatic sauce of cream, yogurt, and ground spices.",
        image: "food1.jpg",
        category: "main",
        attributes: []
    },
    {
        name: "Heritage Dal Makhani",
        price: "18",
        description: "Black lentils slow-cooked overnight with tomatoes, butter, and cream. A timeless delicacy.",
        image: "food2.jpg",
        category: "main",
        attributes: ["vegetarian"]
    },
    {
        name: "Coastal Prawn Masala",
        price: "32",
        description: "Succulent prawns in a coconut-infused curry with mustard seeds, curry leaves, and coastal spices.",
        image: "food3.jpg",
        category: "main",
        attributes: ["spicy"]
    },
    
    // Mandi Specialties
    {
        name: "Royal Lamb Mandi",
        price: "45",
        description: "Slow-cooked whole lamb with aromatic rice, served with yogurt sauce and special Mandi spice blend.",
        image: "food4.jpg",
        category: "mandi",
        attributes: ["chef-special"]
    },
    {
        name: "Sultan's Chicken Mandi",
        price: "32",
        description: "Whole chicken marinated in Arabian spices, slow-roasted and served atop fragrant basmati rice.",
        image: "food1.jpg",
        category: "mandi",
        attributes: []
    },
    {
        name: "Seafood Mandi Royale",
        price: "48",
        description: "A lavish combination of lobster, prawns, and fish, prepared in traditional Mandi style with saffron rice.",
        image: "food2.jpg",
        category: "mandi",
        attributes: ["chef-special"]
    },
    {
        name: "Vegetable Mandi Delight",
        price: "28",
        description: "Seasonal vegetables and exotic mushrooms cooked in Mandi spices, served with aromatic rice and nuts.",
        image: "food3.jpg",
        category: "mandi",
        attributes: ["vegetarian"]
    },
    
    // Desserts
    {
        name: "Royal Saffron Phirni",
        price: "14",
        description: "Delicate ground rice pudding infused with saffron, cardamom, and rose water, garnished with pistachios.",
        image: "food4.jpg",
        category: "desserts",
        attributes: ["vegetarian"]
    },
    {
        name: "Jeweled Gulab Jamun",
        price: "12",
        description: "Golden milk dumplings soaked in rose and saffron syrup, topped with edible silver leaf and crushed pistachios.",
        image: "food1.jpg",
        category: "desserts",
        attributes: ["vegetarian"]
    },
    {
        name: "Maharaja's Shahi Tukda",
        price: "16",
        description: "Crisp bread coated in cardamom-infused sugar syrup, topped with saffron-scented rabri and nuts.",
        image: "food2.jpg",
        category: "desserts",
        attributes: ["chef-special", "vegetarian"]
    },
    {
        name: "Royal Date Halwa",
        price: "14",
        description: "Luxurious date and semolina pudding, slow-cooked with ghee and garnished with mixed nuts.",
        image: "food3.jpg",
        category: "desserts",
        attributes: ["vegetarian"]
    },
    
    // Beverages
    {
        name: "Royal Rose Sherbet",
        price: "8",
        description: "Refreshing rose petal infusion with subtle hints of cardamom and mint, served chilled with ice.",
        image: "food4.jpg",
        category: "beverages",
        attributes: ["vegetarian"]
    },
    {
        name: "Maharaja's Special Lassi",
        price: "10",
        description: "Thick yogurt drink blended with saffron, cardamom, and pistachios, topped with a rose petal garnish.",
        image: "food1.jpg",
        category: "beverages",
        attributes: ["vegetarian"]
    },
    {
        name: "Spiced Masala Chai",
        price: "6",
        description: "Premium black tea brewed with aromatic spices, fresh ginger, and milk. Served in traditional style.",
        image: "food2.jpg",
        category: "beverages",
        attributes: ["vegetarian"]
    },
    {
        name: "Exotic Fruit Mocktail",
        price: "12",
        description: "Seasonal fresh fruits blended with rose water, mint, and lime, served over crushed ice.",
        image: "food3.jpg",
        category: "beverages",
        attributes: ["vegetarian"]
    }
];

// Initialize the menu
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const menuItemsContainer = document.querySelector('.menu-items');
    const menuTabs = document.querySelectorAll('.menu-tab');
    
    // Initialize the menu
    if (menuItemsContainer) {
        // Show all menu items initially
        displayMenuItems('all');
        
        // Add event listeners to tabs
        menuTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Update active tab
                menuTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // Get the category from data attribute
                const category = this.getAttribute('data-category');
                
                // Display items for that category
                displayMenuItems(category);
            });
        });
    }
    
    // Function to display menu items by category
    function displayMenuItems(category) {
        if (!menuItemsContainer) return;
        
        // Clear the container
        menuItemsContainer.innerHTML = '';
        
        // Filter menu items based on category
        const items = category === 'all' 
            ? menuData 
            : menuData.filter(item => item.category === category);
        
        // Create HTML for each menu item
        items.forEach(item => {
            const menuItemHTML = createMenuItemHTML(item);
            menuItemsContainer.innerHTML += menuItemHTML;
        });
        
        // Animate items entrance
        animateMenuItems();
    }
    
    // Function to create HTML for a menu item
    function createMenuItemHTML(item) {
        // Create attributes badges
        let attributesHTML = '';
        if (item.attributes && item.attributes.length > 0) {
            attributesHTML = item.attributes.map(attr => {
                return `<span class="menu-attr ${attr}">${formatAttributeName(attr)}</span>`;
            }).join('');
        }
        
        // Create the menu item HTML
        return `
            <div class="menu-item">
                <div class="menu-item-image" style="background-image: url('${item.image}')"></div>
                <div class="menu-item-content">
                    <div class="menu-item-header">
                        <h3 class="menu-item-title">${item.name}</h3>
                        <div class="menu-item-price">$${item.price}</div>
                    </div>
                    <p class="menu-item-description">${item.description}</p>
                    <div class="menu-item-attributes">
                        ${attributesHTML}
                    </div>
                </div>
            </div>
        `;
    }
    
    // Format attribute name for display
    function formatAttributeName(attr) {
        switch(attr) {
            case 'vegetarian':
                return 'Vegetarian';
            case 'spicy':
                return 'Spicy';
            case 'chef-special':
                return 'Chef\'s Special';
            default:
                return attr.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
        }
    }
    
    // Animate menu items
    function animateMenuItems() {
        const menuItems = document.querySelectorAll('.menu-item');
        
        menuItems.forEach((item, index) => {
            // Set initial state
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            
            // Set timeout for staggered animation
            setTimeout(() => {
                item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    }
});
