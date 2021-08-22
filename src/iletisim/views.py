from django.shortcuts import render, redirect

from .models import Contact
from django.core.mail import send_mail
from .forms import ContactForm
# Create your views here.


def contacview(request):

    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']
            subject = form.cleaned_data['subject']
            # phone = form.cleaned_data['phone']

            send_mail(
                'Yeni bir İletişim : ' +  subject ,  # subject
                'Gönderen = ' + email + '\n' + message,  # message
                'tugrul.tf51@gmail.com',  # from email
                ['ferhat.ft51@gmail.com'],  # To email
            )

            form.save()
            # messages.success(
            # request, 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapılcaktır...')
            return redirect('homepage')
    else:
        form = ContactForm()

    context = {
        'form': form,
    }
    return render(request, "contac.html", context)
