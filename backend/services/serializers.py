from rest_framework import serializers
from .models import Service

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'

    def validate_name(self, value):
        #alerte lors de la création 
        if self.instance is None and Service.objects.filter(name=value).exists():
            raise serializers.ValidationError("Un service avec ce nom existe déjà.")
        
        # alerte pour la modification, on vérifie si un autre service ne porte pas ce nom
        if self.instance is not None and Service.objects.exclude(pk=self.instance.pk).filter(name=value).exists():
            raise serializers.ValidationError("Un autre service porte déjà ce nom.")
        
        return value
