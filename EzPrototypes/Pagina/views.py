from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'Basic/home.html')

def apps(request):
    return render(request, 'Basic/Apps.html')