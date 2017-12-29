from django.db import models


# Create your models here.

class Contact(models.Model) :
    name = models.CharField(max_length = 120)
    email = models.EmailField()
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)