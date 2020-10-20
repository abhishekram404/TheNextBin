from django.urls import path
from . import views

urlpatterns = [
    path('', views.BlogHome.as_view()),
    path('api/', views.BlogHome),
    path('blog/<str:pk>',views.Post.as_view()),
    path('blog/create/',views.Create.as_view()),
    path('blog/delete/<str:pk>',views.Delete.as_view()),
    path('blog/update/<str:pk>',views.Update.as_view())
]
