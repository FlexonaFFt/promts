#type: ignore
from rest_framework import viewsets
from .models import UserProfiles, Promts
from .serializers import UserProfilesSerializer, PromtsSerializer

class UserProfilesViewSet(viewsets.ModelViewSet):
    queryset = UserProfiles.objects.all()
    serializer_class = UserProfilesSerializer

class PromtsViewSet(viewsets.ModelViewSet):
    queryset = Promts.objects.all()
    serializer_class = PromtsSerializer
