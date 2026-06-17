// Load and display recipes from JSON file
async function loadRecipes() {
    try {
        const response = await fetch('recipes.json');
        const data = await response.json();
        displayRecipes(data.recipes);
    } catch (error) {
        console.error('Error loading recipes:', error);
        // Fallback to show error message
        const recipeCards = document.querySelector('.recipe-cards');
        recipeCards.innerHTML = '<p style="color: white; text-align: center;">Unable to load recipes. Please try again later.</p>';
    }
}

// Display recipes in the DOM
function displayRecipes(recipes) {
    const recipeCards = document.querySelector('.recipe-cards');
    
    // Clear existing cards
    recipeCards.innerHTML = '';
    
    // Create cards for each recipe
    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <img src="${recipe.image}" height="300" alt="${recipe.title}">
            <h2>${recipe.title}</h2>
            <p>${recipe.description}</p>
            <div class="recipe-meta">
                <span>⏱️ ${recipe.prepTime}</span>
                <span>📊 ${recipe.difficulty}</span>
            </div>
        `;
        
        recipeCards.appendChild(card);
    });
}

// Simple search functionality
function setupSearch() {
    const searchInput = document.querySelector('.search input');
    const searchButton = document.querySelector('.submit a');
    
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', (e) => {
            e.preventDefault();
            const searchTerm = searchInput.value.toLowerCase().trim();
            
            if (searchTerm) {
                filterRecipes(searchTerm);
            } else {
                // Reload all recipes if search is empty
                loadRecipes();
            }
        });
        
        // Also search on Enter key
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchButton.click();
            }
        });
    }
}

// Filter recipes based on search term
async function filterRecipes(searchTerm) {
    try {
        const response = await fetch('recipes.json');
        const data = await response.json();
        
        const filtered = data.recipes.filter(recipe => 
            recipe.title.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm)
        );
        
        if (filtered.length > 0) {
            displayRecipes(filtered);
        } else {
            const recipeCards = document.querySelector('.recipe-cards');
            recipeCards.innerHTML = '<p style="color: white; text-align: center; grid-column: 1/-1;">No recipes found matching your search.</p>';
        }
    } catch (error) {
        console.error('Error filtering recipes:', error);
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadRecipes();
    setupSearch();
});
