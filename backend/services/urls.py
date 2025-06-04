from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ServiceViewSet

# Create a router and register our viewset with it

router = DefaultRouter()
router.register(r'services', ServiceViewSet)

urlpatterns = [
    path('', include(router.urls)),
]