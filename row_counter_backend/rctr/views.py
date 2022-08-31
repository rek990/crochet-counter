from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Project
from .serializers import *

# Create your views here.

# 3. 'index' view: GET request rendering 'Hello, world. You're at the rctr index.'


def index(request):
    return HttpResponse("Hello, world. You're at the rctr index.")


@api_view(['GET', 'PUT', 'DELETE'])
def retrieve_update_delete_project(request, pk):
    """
    Retrieves project data, updates project data, and deletes an entire project from the database.
    """
    try:
        project = Project.objects.get(pk=pk)
    except Project.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ProjectSerializer(project)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = ProjectSerializer(
            project, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        project.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def save_project(request):
    """
    Saves the initial data of a project, thus creating a new project in the database.
    """
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
