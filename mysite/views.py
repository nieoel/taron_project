from django.http import HttpResponse
from django.views.generic import View
from django.shortcuts import render

class home(View) :
        def get(self, request, *args, **kwargs):
            return render(request, 'base.html', {});
