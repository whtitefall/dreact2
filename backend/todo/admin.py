from django.contrib import admin

from .models import Todo
from django.db import models

from pagedown.widgets import AdminPagedownWidget
# Register your models here.

class TodoAdmin(admin.ModelAdmin):
    list_display = ('title','description','completed')
    formfield_overrides = {
        models.TextField: {'widget': AdminPagedownWidget },
    }

admin.site.register(Todo,TodoAdmin)