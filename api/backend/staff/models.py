import random
import string
from django.db import models, IntegrityError

class UserProfiles(models.Model):
    user_id = models.CharField(max_length=6, primary_key=True)
    nickname = models.CharField(max_length=50)
    tag = models.CharField(max_length=20)
    registration_date = models.DateField(auto_now_add=True)

    def save(self, *args, **kwargs):
        while True:
            self.user_id = ''.join(random.choices(string.digits, k=6))
            try:
                super().save(*args, **kwargs)
                break
            except IntegrityError:
                continue

class Promts(models.Model):
    post_id = models.CharField(max_length=6, primary_key=True)
    title = models.CharField(max_length=100)
    promtext = models.TextField()
    description = models.TextField()
    tags = models.CharField(max_length=100)
    date = models.DateField(auto_now_add=True)

    def save(self, *args, **kwargs):
        while True:
            self.post_id = ''.join(random.choices(string.digits, k=6))
            try:
                super().save(*args, **kwargs)
                break
            except IntegrityError:
                continue
