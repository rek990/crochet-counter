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


@api_view(['DELETE'])
def delete_project(request, pk):
    """
    Deletes an entire project from the database.
    """
    try:
        project = Project.objects.get(pk=pk)
    except Project.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE':
        project.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def save_project(request):
    """
    Saves the initial data of a project, thus creating a new project in the database.
    """
    if request.method == 'POST':
        serializer = ProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def resume_project(request, pk):
    """Saves a project to the database and updates the saved row count information on previously saved projects."""
    try:
        project = Project.objects.get(pk=pk)
    except Project.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = ProjectSerializer(
            project, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_project(request):
    """
    Retrieves a previous project name, along with the last saved row count.
    """
    if request.method == 'GET':
        data = Project.objects.all()
        serializer = ProjectSerializer(
            data, context={'request': request}, many=True)
        return Response(serializer.data)
