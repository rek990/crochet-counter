from django.db import models

# Create your models here.


class Project(models.Model):
    # user_id = models.ForeignKey(
    #     'authUser', related_name='rctr', on_delete=models.CASCADE)
    project_name = models.CharField(max_length=200)
    saved_row_count = models.IntegerField(default=0)

    def __str__(self):
        return self.project_name
