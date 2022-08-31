from django.db import models

# Create your models here.


class Project(models.Model):
    project_name = models.CharField(max_length=200)
    saved_row_count = models.IntegerField(default=0)

    def __str__(self):
        return self.project_name
