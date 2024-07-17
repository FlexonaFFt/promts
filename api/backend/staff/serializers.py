from rest_framework import serializers
from .models import UserProfile, Promt

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'

class PromtSerializer(serializers.ModelSerializer):
    class Meta:
        model = Promt
        fields = '__all__'
