from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import url, static

from .views import ContactCreateView, ContactDoneView



urlpatterns = [
    url(r'^create/', ContactCreateView.as_view(), name='create'),
    url(r'^done/$', ContactDoneView.as_view(), name='done'),

]