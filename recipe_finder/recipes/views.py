import requests
from django.conf import settings
from django.http import JsonResponse
from .models import Ingredient, Recipe

SPOONACULAR_API_URL = 'https://api.spoonacular.com/recipes/findByIngredients'

def get_recipes(request):
    ingredients = request.GET.get('ingredients', '')
    page = int(request.GET.get('page', 1))
    page_size = 10

    params = {
        'ingredients': ingredients,
        'number': page_size,
        'offset': (page - 1) * page_size,
        'apiKey': settings.SPOONACULAR_API_KEY,
    }

    response = requests.get(SPOONACULAR_API_URL, params=params)
    
    if response.status_code == 200:
        data = response.json()
        recipes = []

        for item in data:
            recipe = {
                'title': item['title'],
                'ingredients': [i['name'] for i in item['missedIngredients']],
                'instructions': 'Instructions not available in this API version',
                'image_url': item.get('image', ''),
            }
            recipes.append(recipe)

        return JsonResponse({'recipes': recipes})
    else:
        return JsonResponse({'error': 'Failed to fetch recipes'}, status=response.status_code)
