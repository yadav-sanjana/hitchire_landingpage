from django.shortcuts import render

def landing_page(request):
    return render(request, 'hitchire_app/landing_page.html')
