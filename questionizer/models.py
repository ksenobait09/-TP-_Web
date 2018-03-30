from django.db import models
from django.contrib.auth.models import User
import datetime
from django.utils import timezone


# Create your models here.


class Profile(models.Model):
    avatar = models.ImageField(upload_to='avatars', default='avatars/no.gif')
    user = models.OneToOneField(User, on_delete=models.CASCADE)


class Tag(models.Model):
    title = models.CharField(max_length=30)


class Question(models.Model):
    title = models.CharField(max_length=100)
    text = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now)
    tags = models.ManyToManyField(Tag)
    # likes = models.IntegerField(default=0)


class Answer(models.Model):
    text = models.TextField()
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now)
    correct = models.BooleanField(default=False)
    # likes = models.IntegerField(default=0)


class QuestionLike(models.Model):
    UP = 1
    DOWN = -1
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    value = models.SmallIntegerField(default=1)


class AnswerLike(models.Model):
    UP = 1
    DOWN = -1
    answer = models.ForeignKey(Answer, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    value = models.SmallIntegerField(default=1)
