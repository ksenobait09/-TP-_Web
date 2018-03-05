from django.shortcuts import render
from django.views import View
from django.http import HttpResponseRedirect, JsonResponse, HttpResponse

# Create your views here.


class BaseView(View):
    def render(self, request, template, context):
        context.update({
            'authorized': request.user.is_authenticated,
            'user': {'name': request.user.username},
        })

        return render(request, template, context)

class MainPage(BaseView):
    def get(self, request):
        #books = Book.objects.all()
        return super().render(request, 'index.html', {})

class RegView(BaseView):
    def get(self, request):
        #books = Book.objects.all()
        return super().render(request, 'index.html', {})

class LogView(BaseView):
    def get(self, request):
        #books = Book.objects.all()
        return super().render(request, 'index.html', {})
