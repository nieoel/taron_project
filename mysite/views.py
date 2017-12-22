from django.http import HttpResponse
from django.views.generic import View
from django.shortcuts import render
from django.views.generic import TemplateView, CreateView
from django.contrib.auth.forms import UserCreationForm
from django.core.urlresolvers import reverse_lazy

class home(View) :
        def get(self, request, *args, **kwargs):
            return render(request, 'base.html', {});

class UserCreateView(CreateView) :
    template_name = 'registration/register.html'
    form_class = UserCreationForm
    success_url = reverse_lazy('register_done')

class UserCreateDoneView(TemplateView) :
    template_name = 'registration/register_done.html'
