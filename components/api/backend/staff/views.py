#type: ignore
from rest_framework import viewsets
from .models import UserProfile, Promt
from .serializers import UserProfileSerializer, PromtSerializer

class UserProfilesViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class PromtsViewSet(viewsets.ModelViewSet):
    queryset = Promt.objects.all()
    serializer_class = PromtSerializer
