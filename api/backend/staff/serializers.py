from rest_framework import serializers
from .models import UserProfiles, Promts

class UserProfilesSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfiles
        fields = '__all__'

class PromtsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Promts
        fields = '__all__'
