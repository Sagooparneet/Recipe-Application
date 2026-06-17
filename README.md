# Kaur's Kitchen - Recipe Application

A simple and elegant recipe website featuring dynamic recipe loading and search functionality.

## Features

- 🍳 Dynamic recipe display from JSON data
- 🔍 Search functionality to filter recipes
- 📱 Responsive design
- 🎨 Clean and modern UI
- 📝 Easy-to-manage recipe data

## Demo Data System

The website uses a simple JSON-based system for managing recipes:

### How It Works

1. **recipes.json** - Contains all recipe data in a simple JSON format
2. **app.js** - JavaScript file that loads and displays recipes dynamically
3. **index.html** - Main page that renders recipes from the JSON file

### Adding New Recipes

To add new recipes, simply edit the `recipes.json` file:

```json
{
  "id": 7,
  "title": "Your Recipe Name",
  "description": "Recipe description here",
  "image": "image-url-or-path.jpg",
  "prepTime": "45 minutes",
  "difficulty": "Easy"
}
```

## Deploying to GitHub Pages

Follow these simple steps to deploy your website to GitHub Pages:

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Name your repository (e.g., `recipe-application`)
5. Make it **Public**
6. Click **Create repository**

### Step 2: Push Your Code to GitHub

Open your terminal in the project directory and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - Recipe Application"

# Add your GitHub repository as remote (replace with your URL)
git remote add origin https://github.com/YOUR-USERNAME/recipe-application.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **Deploy from a branch**
5. Under **Branch**, select **main** and **/ (root)**
6. Click **Save**

### Step 4: Access Your Website

After a few minutes, your website will be live at:
```
https://YOUR-USERNAME.github.io/recipe-application/
```

You can find the exact URL in the **Settings > Pages** section.

## Project Structure

```
Recipe Application/
│
├── index.html              # Main landing page
├── Landing-style.css       # Styles for landing page
├── RegistrationForm.html   # User registration page
├── Login.html             # User login page
├── RegistrationForm-style.css
├── app.js                 # JavaScript for dynamic recipe loading
├── recipes.json           # Recipe data (demo data)
├── .gitignore            # Files to exclude from git
├── README.md             # This file
│
└── Images/               # Recipe and icon images
    ├── background.avif
    ├── RedPasta.jpeg
    ├── Biryani.jpg
    ├── Crepes.jpg
    ├── facebook-icon.webp
    ├── instagram-icon.png
    └── twitter-icon.jpg
```

## Updating Your Live Website

After making changes:

```bash
git add .
git commit -m "Description of your changes"
git push
```

GitHub Pages will automatically update your website within a few minutes.

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- JSON for data management

## Future Enhancements

- Add recipe detail pages
- Implement user authentication
- Add ability to save favorite recipes
- Include nutritional information
- Add recipe ratings and reviews

## License

This project is open source and available for educational purposes.

---

Made with ❤️ by Kaur's Kitchen
