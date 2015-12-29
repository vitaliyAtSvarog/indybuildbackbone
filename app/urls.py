from django.conf.urls import url
from django.contrib import admin
from app import routes

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^admin', admin.site.urls),
    url(r'^.*$', routes.index),
]