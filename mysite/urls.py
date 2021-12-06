from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name= 'home'),
    path('template', views.template, name= 'template'),  
]

# path('admin/', admin.site.urls),