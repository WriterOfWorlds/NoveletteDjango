from django.shortcuts import render

# Create your views here.
def home(request):
  return render(request, '404.html')

def template(request):
  return render(request, 'template.html')