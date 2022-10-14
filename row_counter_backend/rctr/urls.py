from django.urls import path

from . import views


urlpatterns = [
    # /row-counter/rctr
    path('rctr/', views.retrieve_and_save_project,
         name='retrieve_and_save_project'),
    # /row-counter/rctr/pk
    path('rctr/<int:pk>/', views.update_delete_project,
         name='update_delete_project'),
]
