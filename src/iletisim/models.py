
import os
import uuid
from django.dispatch import receiver

from django.utils.translation import gettext_lazy as _
from django.db import models
from ckeditor.fields import RichTextField


# Create your models here.

STATUS = (
    ('new', 'New'),
    ('read', 'Read'),
    ('closed', 'Closed'),
)


class Contact(models.Model):
    subject = models.CharField(max_length=25, null=True,verbose_name='konu')
    status = models.CharField(max_length=6, choices=STATUS, default='new')
    name = models.CharField(max_length=30,verbose_name='isim')
    email = models.EmailField()
    message = models.TextField(verbose_name='mesaj')
    created_date = models.DateTimeField(auto_now_add=True,verbose_name='iletişim tarihi')

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']
        verbose_name = 'Müşteri İletişim Bilgileri'
        verbose_name_plural = 'Müşteri İletişim Bilgileri'

