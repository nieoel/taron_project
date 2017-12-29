from django.shortcuts import render

# Create your views here.
from .models import Contact
from django.views.generic import CreateView, TemplateView
from .forms import ContactForm

class ContactCreateView(CreateView) :
    model = Contact
    template_name = 'base.html'
    success_url = '/contact/done'
    form_class = ContactForm

class ContactDoneView(TemplateView) :
    template_name = 'contact_done.html'