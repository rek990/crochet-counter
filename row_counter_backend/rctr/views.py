from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import Response
from rest_framework import api_view
from rest_framework import status

from .models import Project
from .serializers import *

# Create your views here.

# 3. 'index' view: GET request rendering 'Hello, world. You're at the rctr index.'


def index(request):
    return HttpResponse("Hello, world. You're at the rctr index.")
