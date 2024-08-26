# Recipe Finder App

## Project Description

The **Recipe Finder App** is a web application that allows users to search for recipes based on the ingredients they have on hand. By simply entering a list of ingredients, the app fetches relevant recipes from an external API and displays them in a user-friendly interface. Users can view recipes in a card format and click on each to see more details, including the title, image, ingredients, and instructions.

### Features

- **Ingredient-Based Search:** Enter ingredients to find recipes that match.
- **Recipe Cards:** Display recipes in an organized card format.
- **Detailed View:** Click on a recipe to see detailed instructions and ingredients.
- **Infinite Scroll:** Scroll down to load more recipes without refreshing the page.

### Technologies Used

- **Backend:** Python, Django
- **Frontend:** TypeScript, React
- **API Integration:** Spoonacular API
- **Styling:** CSS, React Modal for popups

## Installation and Setup

### 1. Clone the Repository

```
git clone https://github.com/MatheusESMelo/recipe_finder.git
cd recipe-finder
```

## 2. Set Up the Backend

### a. Create and Activate a Virtual Environment

```
python -m venv venv

On Windows:
.\venv\Scripts\activate

On macOS/Linux:
source venv/bin/activate
```

### b. Install Dependencies

```
pip install -r requirements.txt
```

### c. Set Up Environment Variables

Create a .env file in the project root (where manage.py is located) and add your API key:

```
SPOONACULAR_API_KEY='your_spoonacular_api_key'
```

### d. Run Migrations

```
python manage.py migrate
```

### e. Start the Django Development Server

```
python manage.py runserver
```

## 3. Set Up the Frontend

### a. Navigate to the Frontend Directory

First, navigate to the `frontend` directory:

```
cd frontend
```

### b. Install Node.js Dependencies

```
npm install
```

### c. Start the React Development Server

```
npm start
```

## 4. Access the App

### a. Open the App in Your Browser

Once both the backend and frontend servers are running:

- Backend: `http://127.0.0.1:8000`
- Frontend: `http://localhost:3000`

### b. Use the Recipe Finder App

1. Open your browser and go to `http://localhost:3000`.
2. Enter ingredients separated by commas in the search bar.
3. Click the "Search" button to find recipes that match your ingredients.
4. Scroll through the results using infinite scroll, and click on "Show More" to view detailed recipe information in a modal.

Enjoy using the Recipe Finder App!
