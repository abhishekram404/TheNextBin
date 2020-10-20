from django.shortcuts import render
from rest_framework import generics, viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Blog
from .serializers import BlogSerializer


class BlogHome(APIView):
    def get(self, request):
        queryset = Blog.objects.all()
        serializer_class = BlogSerializer(queryset, many=True)
        return Response(serializer_class.data)

class Post(APIView):
    def get(self, request,pk):
        queryset = Blog.objects.get(id=pk)
        serializer_class = BlogSerializer(queryset,many=False)
        return Response(serializer_class.data) 

class Create(APIView):
    def post(self,request):
        serializer_class = BlogSerializer(data=request.data, many=False)
        if serializer_class.is_valid():
            serializer_class.save()
        return Response(serializer_class.data)

class Delete(APIView):
    def delete(self,request,pk):
        queryset = Blog.objects.get(id=pk)
        queryset.delete()
        return Response('Deleted')

class Update(APIView):
    def post(self,request,pk):
        queryset = Blog.objects.get(id=pk)
        serializer_class = BlogSerializer(instance=queryset, data=request.data, many=False)
        if serializer_class.is_valid():
            serializer_class.save()
        return Response(serializer_class.data)

# class BlogDetail(generics.RetrieveUpdateDestroyAPIView, viewsets.ModelViewSet):
#     serializer_class = BlogSerializer
#     queryset = Blog.objects.all()
