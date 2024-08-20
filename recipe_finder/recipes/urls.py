from django.urls import path
from . import views

urlpatterns = [
    path('get-recipes/', views.get_recipes, name='get_recipes'),
]
