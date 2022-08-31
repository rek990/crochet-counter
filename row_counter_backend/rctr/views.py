from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

# 3. 'index' view: GET request rendering 'Hello, world. You're at the rctr index.'


def index(request):
    return HttpResponse("Hello, world. You're at the rctr index.")
