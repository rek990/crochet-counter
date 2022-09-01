from django.urls import path

from . import views


urlpatterns = [
    # 2. Here, the path is the main page for 'row-counter/', which leads to the view named 'index' (in /rctr/views.py)
    # '' is the same as /row-counter/
    path('', views.index, name='index'),
    # /row-counter/rctr
    path('rctr/', views.retrieve_and_save_project,
         name='retrieve_and_save_project'),
    # /row-counter/rctr/pk
    path('rctr/<int:pk>/', views.update_delete_project,
         name='update_delete_project'),
    # path('rctr/', views.retrieve_project, name='retrieve_project')
]
