from rest_framework import viewsets
from .models import Service
from .serializers import ServiceSerializer

# Create your views here.

# services/views.py
class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


    def get_queryset(self):
        print(Service.objects.all())  # Ajoute ceci pour voir les objets dans les logs
        return Service.objects.all()
    
