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


class Question(BaseView):
    def get(self, request):
        return super().render(request, 'question.html', {})


class Ask(BaseView):
    def get(self, request):
        return super().render(request, 'ask.html', {})


class Login(BaseView):
    def get(self, request):
        return super().render(request, 'login.html', {})


class SignUp(BaseView):
    def get(self, request):
        return super().render(request, 'signup.html', {})
