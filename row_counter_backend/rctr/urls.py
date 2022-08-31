from django.urls import path

from . import views

urlpatterns = [
    # 2. Here, the path is the main page for 'row-counter/', which leads to the view named 'index' (in /rctr/views.py)
    path('', views.index, name='index'),
]
