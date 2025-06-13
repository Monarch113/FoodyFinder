// Global array of all available food items (mock data)
// This would typically come from a backend API
const allFoodItems = [
    {
        id: 'pizza',
        name: 'Margherita Pizza',
        image: '../assets/pizza.png',
        meta1: '💲Rp. 42.000',
        meta2: '⭐ 4.8',
        meta3: '📍 Napoli Bistro',
        meta4: '📏 1.1 km',
        description: 'A classic Italian pizza topped with fresh mozzarella, tomatoes, and basil.',
        tags: ['italian', 'vegetarian', 'cheesy', 'affordable', 'wood-grilled']
    },
    {
        id: 'sushi',
        name: 'Salmon Sushi',
        image: '../assets/salmonsushi.png',
        meta1: '💲Rp. 80.000',
        meta2: '⭐ 4.8',
        meta3: '📍 Tokyo Bites',
        meta4: '📏 2.4 km',
        description: 'Delicate slices of buttery salmon over seasoned rice with a hint of wasabi.',
        tags: ['japanese', 'seafood', 'fresh', 'umami', 'raw']
    },
    {
        id: 'burger',
        name: 'Double Cheeseburger',
        image: '../assets/burger.png',
        meta1: '💲Rp. 35.000',
        meta2: '⭐ 4.6',
        meta3: '📍 Grill King',
        meta4: '📏 0.9 km',
        description: 'A juicy double patty burger stacked with cheddar, pickles, and house sauce.',
        tags: ['american', 'beef', 'grilled', 'juicy', 'spicy']
    },
    {
        id: 'ramen',
        name: 'Spicy Ramen Bowl',
        image: '../assets/ramen.png',
        meta1: '💲Rp. 45.000',
        meta2: '⭐ 4.5',
        meta3: '📍Tokyo Ramen House',
        meta4: '📏 0.9 km',
        description: '',
        tags: ['spicy', 'noodles', 'japanese']
    },
    {
        id: 'masala',
        name: 'Chicken Tikka Masala',
        image: '../assets/masala.png',
        meta1: '💲Rp. 58.000',
        meta2: '⭐ 4.7',
        meta3: '📍Bombay Bistro',
        meta4: '📏 1.3 km',
        description: '',
        tags: ['indian', 'spicy', 'dinner']
    },
    {
        id: 'veganbowl',
        name: 'Vegan Buddha Bowl',
        image: '../assets/veganbowl.jpg',
        meta1: '💲Rp. 92.000',
        meta2: '⭐ 4.3',
        meta3: '📍Green Kitchen',
        meta4: '📏 2.5 km',
        description: '',
        tags: ['vegan', 'healthy', 'gluten-free']
    },
    {
        id: 'shrimppasta',
        name: 'Garlic Butter Shrimp Pasta',
        image: '../assets/shrimppasta.jpg',
        meta1: '💲Rp. 66.000',
        meta2: '⭐ 4.8',
        meta3: '📍Pasta Haven',
        meta4: '📏 3.0 km',
        description: '',
        tags: ['seafood', 'italian', 'garlic']
    },
    {
        id: 'chocolavacake',
        name: 'Belgian Chocolate Lava Cake',
        image: '../assets/choco lava cake.png',
        meta1: '💲Rp. 30.000',
        meta2: '⭐ 4.9',
        meta3: '📍Sweet Cravings',
        meta4: '📏 0.5 km',
        description: '',
        tags: ['dessert', 'chocolate', 'sweet']
    },
    {
        id: 'opor',
        name: 'Chicken Opor',
        image: '../assets/opor.jpg',
        meta1: '💲Rp. 28.000',
        meta2: '⭐ 4.7',
        meta3: '📍Opor House',
        meta4: '📏 0.8 km',
        description: '',
        tags: ['savory', 'indonesian', 'soup']
    },
    {
        id: 'applepie',
        name: 'Classic Apple Pie',
        image: '../assets/applepie.jpg',
        meta1: '💲Rp. 40.000',
        meta2: '⭐ 4.5',
        meta3: '📍Sweet Cravings',
        meta4: '📏 0.9 km',
        description: '',
        tags: ['dessert', 'fruit', 'sweet']
    },
    {
        id: 'rendang',
        name: 'Beef Rendang',
        image: '../assets/rendang.jpg',
        meta1: '💲Rp. 28.000',
        meta2: '⭐ 4.9',
        meta3: '📍Pagi Sore',
        meta4: '📏 0.3 km',
        description: '',
        tags: ['indonesian', 'spicy', 'beef']
    },
];

// Global variables
let tags = [];
let selectedFilter = ''; // Re-initialize selectedFilter
const availableTags = [
    "vegan", "spicy", "dessert", "gluten-free", "low-carb",
    "italian", "japanese", "indian", "healthy", "cheesy", "wood-grilled",
    "seafood", "fresh", "umami", "raw", "american", "beef",
    "grilled", "juicy", "sweet", "chocolate", "fruit",
    "noodles", "dinner", "gluten-free", "savory", "indonesian", "soup",
    "fried", "crispy", "hot", "traditional", "modern", "breakfast", "lunch", "dinner",
    "snack", "appetizer", "main-course", "soup", "salad", "drink", "pastry",
    "baked", "roasted", "steamed", "boiled", "vegetarian", "vegan", "pescatarian",
    "dairy-free", "nut-free", "halal", "kosher", "organic", "local", "seasonal",
    "fast-food", "fine-dining", "casual-dining", "cafe", "bakery", "bar", "pub"
];

// DOM Elements
const tagsDisplayContainer = document.getElementById('tagsDisplayContainer');
const tagInput = document.getElementById('tagInput');
const tagSuggestionsEl = document.getElementById('tagSuggestions');
// const filterBtn = document.getElementById('filterToggle'); // Removed filter functionality
// const filterMenu = document.getElementById('filterMenu'); // Removed filter functionality
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const filterSelect = document.getElementById('filterSelect'); // Get the new filter select element
const foodItems = document.querySelectorAll('.suggestion-box, .popular-card');
const topPicksTitle = document.getElementById('topPicksTitle');
const suggestionsSection = document.getElementById('suggestionsSection');
const popularTitle = document.getElementById('popularTitle');
const popularGridSection = document.getElementById('popularGridSection');
const filteredResultsGrid = document.getElementById('filteredResultsGrid');

// Search functionality
function search() {
    const query = searchInput.value.trim();
    
    // Validasi input
    if (!query && tags.length === 0) {
        showNotification('Please enter a search term or select at least one tag');
        // If input is empty and no tags, ensure original sections are visible
        topPicksTitle.classList.remove('hidden');
        suggestionsSection.classList.remove('hidden');
        popularTitle.classList.remove('hidden');
        popularGridSection.classList.remove('hidden');
        filteredResultsGrid.classList.add('hidden');
        return;
    }

    // Perform filtering directly on the current page
    filterFoodItems(query, tags, selectedFilter);
}

// Notification function
function showNotification(message) {
    // Cek apakah notification container sudah ada
    let notificationContainer = document.querySelector('.notification-container');
    
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.className = 'notification-container';
        document.body.appendChild(notificationContainer);
    }

    // Buat notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    // Tambahkan ke container
    notificationContainer.appendChild(notification);

    // Hapus notification setelah 3 detik
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Tags functionality
function renderTags() {
    // Clear only the existing tags, keep the input
    const existingTags = tagsDisplayContainer.querySelectorAll('.tag');
    existingTags.forEach(tagEl => tagEl.remove());

    // Render existing tags
    tags.forEach(tag => {
        const tagEl = document.createElement('div');
        tagEl.className = 'tag';
        tagEl.innerHTML = `${tag} <span class="remove-tag">&times;</span>`;
        tagsDisplayContainer.insertBefore(tagEl, tagInput);

        // Add remove functionality
        tagEl.querySelector('.remove-tag').addEventListener('click', () => {
            tags = tags.filter(t => t !== tag.toLowerCase());
            renderTags();
        });
    });
    
    // Clear input after rendering
    tagInput.value = '';

    // Filter food items after tags are rendered
    filterFoodItems(searchInput.value.trim(), tags, selectedFilter);
}

function setupTagInputListeners() {
    // Handle Enter key
    tagInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && tagInput.value.trim()) {
            e.preventDefault();
            const newTag = tagInput.value.trim().toLowerCase();
            if (!tags.includes(newTag)) {
                tags.push(newTag);
                renderTags();
            }
            tagSuggestionsEl.innerHTML = ''; // Clear suggestions after adding tag
        }
    });

    // Handle input changes for suggestions
    tagInput.addEventListener('input', () => {
        const inputText = tagInput.value.toLowerCase();
        tagSuggestionsEl.innerHTML = '';

        if (inputText) {
            const matches = availableTags
                .filter(tag => tag.includes(inputText) && !tags.includes(tag))
                .slice(0, 5);

            matches.forEach(match => {
                const li = document.createElement('li');
                li.textContent = match;
                li.addEventListener('click', () => {
                    tags.push(match);
                    renderTags();
                    tagSuggestionsEl.innerHTML = ''; // Clear suggestions after selection
                });
                tagSuggestionsEl.appendChild(li);
            });
        }
    });

    // Close suggestions if clicked outside
    document.addEventListener('click', (e) => {
        if (!tagInput.contains(e.target) && !tagSuggestionsEl.contains(e.target)) {
            tagSuggestionsEl.innerHTML = '';
        }
    });
}

// Main function to filter and display food items
function filterFoodItems(query = '', selectedTags = [], filterOption = '') {
    filteredResultsGrid.innerHTML = ''; // Clear previous filtered results
    let hasMatchingItems = false;

    // Determine if any filter/search criteria are active
    const isFilterActive = query || selectedTags.length > 0 || filterOption;

    if (isFilterActive) {
        // Hide original sections
        topPicksTitle.classList.add('hidden');
        suggestionsSection.classList.add('hidden');
        popularTitle.classList.add('hidden');
        popularGridSection.classList.add('hidden');
        filteredResultsGrid.classList.remove('hidden');

        const currentQuery = query.toLowerCase();

        let filteredItems = allFoodItems.filter(item => {
            const nameMatch = item.name.toLowerCase().includes(currentQuery);
            
            let tagsMatch = true;
            if (selectedTags.length > 0) {
                tagsMatch = selectedTags.every(selectedTag => item.tags.includes(selectedTag));
            }

            return nameMatch && tagsMatch;
        });

        // Apply sorting based on filterOption
        if (filterOption) {
            filteredItems.sort((a, b) => {
                switch (filterOption) {
                    case 'rating':
                        // Assuming meta2 is '⭐ X.X'
                        const ratingA = parseFloat(a.meta2.split(' ')[1]);
                        const ratingB = parseFloat(b.meta2.split(' ')[1]);
                        return ratingB - ratingA; // Highest rating first
                    case 'price-asc':
                        // Assuming meta1 is '💲Rp. X.XXX' or similar
                        const priceA_asc = parseFloat(a.meta1.replace(/[^\d]/g, ''));
                        const priceB_asc = parseFloat(b.meta1.replace(/[^\d]/g, ''));
                        return priceA_asc - priceB_asc; // Lowest price first
                    case 'price-desc':
                        const priceA_desc = parseFloat(a.meta1.replace(/[^\d]/g, ''));
                        const priceB_desc = parseFloat(b.meta1.replace(/[^\d]/g, ''));
                        return priceB_desc - priceA_desc; // Highest price first
                    case 'popularity':
                        // This needs actual popularity data in your allFoodItems object
                        // For now, let's use a dummy or a random sort if no data
                        // You'd need to add a 'popularity' property to each item in allFoodItems
                        return 0; // No change, needs actual data
                    default:
                        return 0;
                }
            });
        }

        if (filteredItems.length > 0) {
            filteredItems.forEach(item => {
                const card = document.createElement('div');
                card.className = 'popular-card'; // Reusing popular-card style
                card.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="card-content">
                        <h4>${item.name}</h4>
                        <p class="meta">${item.meta1} &nbsp; | &nbsp; ${item.meta2} &nbsp; | &nbsp; ${item.meta3} | &nbsp; ${item.meta4}</p>
                        <div class="tags">
                            ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                `;
                filteredResultsGrid.appendChild(card);
                hasMatchingItems = true;
            });
        } else {
            // Display a message if no items match
            const noResultsMessage = document.createElement('p');
            noResultsMessage.textContent = 'No dishes found matching your criteria.';
            noResultsMessage.style.textAlign = 'center';
            noResultsMessage.style.fontSize = '1.2rem';
            noResultsMessage.style.marginTop = '2rem';
            filteredResultsGrid.appendChild(noResultsMessage);
        }

    } else {
        // No query, tags, or filter selected, show original sections
        topPicksTitle.classList.remove('hidden');
        suggestionsSection.classList.remove('hidden');
        popularTitle.classList.remove('hidden');
        popularGridSection.classList.remove('hidden');
        filteredResultsGrid.classList.add('hidden');
    }
}

// Removed Filter functionality (old)
/*
function setFilter(selectedOption) {
    const allItems = document.querySelectorAll('#filterMenu li');
    
    // Remove 'selected' class from all items
    allItems.forEach(item => item.classList.remove('selected'));
    
    // Add 'selected' class to the clicked item
    const selectedItem = document.querySelector(`#filterMenu li[data-filter="${selectedOption}"]`);
    if (selectedItem) {
        selectedItem.classList.add('selected');
    }
    
    // Update selected filter and hide menu
    selectedFilter = selectedOption;
    filterMenu.classList.add('show'); // Use add('show') instead of add('hidden')
}
*/

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // console.log('DOM Content Loaded!'); // Removed diagnostic logs
    // console.log('Filter button element:', filterBtn); // Removed diagnostic logs

    // Search event listeners
    searchButton.addEventListener('click', search);
    
    // Enter key pada search input
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            search();
        }
    });

    // Filter select change listener
    filterSelect.addEventListener('change', () => {
        selectedFilter = filterSelect.value;
        filterFoodItems(searchInput.value.trim(), tags, selectedFilter);
    });

    // Setup initial tag listeners
    setupTagInputListeners();

    // Initial filtering on page load (show all by default)
    filterFoodItems(); 

    // Removed Filter functionality (old)
    /*
    // Filter menu event listeners
    filterBtn.addEventListener('click', () => {
        console.log('Filter button clicked!');
        filterMenu.classList.toggle('show');
    });

    filterMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            setFilter(e.target.dataset.filter);
        }
    });

    // Close filter menu if clicked outside
    document.addEventListener('click', (e) => {
        if (!filterBtn.contains(e.target) && !filterMenu.contains(e.target)) {
            filterMenu.classList.remove('show');
        }
    });
    */
});
  
  