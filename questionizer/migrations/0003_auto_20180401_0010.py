# Generated by Django 2.0.2 on 2018-04-01 00:10

from django.db import migrations
import django.db.models.manager


class Migration(migrations.Migration):

    dependencies = [
        ('questionizer', '0002_auto_20180330_1138'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='question',
            managers=[
                ('object', django.db.models.manager.Manager()),
            ],
        ),
    ]
