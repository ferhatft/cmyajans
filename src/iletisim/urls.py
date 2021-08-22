from django.conf.urls import url

from django.urls import path

from .views import (
    contacview,

)


app_name = 'iletisim'

urlpatterns = [
    path('' , contacview, name="iletisim"),
    
    # url(r'^$', contacview, name='iletisim'),
   
]

