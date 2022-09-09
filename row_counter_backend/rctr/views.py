from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Project
from .serializers import *


def index(request):
    return HttpResponse("Hello, world. You're at the rctr index.")


@api_view(['PUT', 'DELETE'])
def update_delete_project(request, pk):
    """
    Updates project data and deletes an entire project from the database.
    """
    try:
        project = Project.objects.get(pk=pk)
    except Project.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = ProjectSerializer(
            project, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        project.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def retrieve_and_save_project(request):
    """
    Saves the initial data of a project, thus creating a new project in the database, and retrieves previously saved data.
    """
    if request.method == 'GET':
        project = Project.objects.all()
        serializer = ProjectSerializer(project, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ProjectSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
