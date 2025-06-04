from django.db import models

# Create your models here.


class Service(models.Model):
    SERVICE_TYPES = [
        ('STORAGE', 'Storage'),
        ('NETWORK', 'Network'),
        ('SECURITY', 'Security'),
        ('AI', 'AI/ML'),
        ('ANALYTICS', 'Analytics'),
        ('DEVOPS', 'DevOps'),
        ('DATABASE', 'Database'),
        ('COMPUTE', 'Compute'),
        ('OTHER', 'Other'),
    ]

    name = models.CharField(max_length=100, unique=True)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    service_type = models.CharField(max_length=20, choices=SERVICE_TYPES, default='OTHER')
    created_at = models.DateTimeField(auto_now_add=True)


    class Meta:
        verbose_name = 'Service'
        verbose_name_plural = 'Services'
        ordering = ['-created_at']

    def __str__(self):
        return self.name
