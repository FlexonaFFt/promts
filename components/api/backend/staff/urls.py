from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserProfilesViewSet, PromtsViewSet

router = DefaultRouter()
router.register(r'user-profiles', UserProfilesViewSet)
router.register(r'promts', PromtsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
