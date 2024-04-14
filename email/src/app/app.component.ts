import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  contacts = ['theonlyaceassassin@gmail.com', 'y.qazi12@gmail.com'];

  async send(contact: string) {
    emailjs.init('INgZdgf0aKP01cRR9');
    let response = await emailjs.send('service_8b7pspp', 'template_xis1p7l', {
      email: contact,
      person: 'moror',
      message: 'test',
    });
  }

  sendAll() {
    for (let index = 0; index < this.contacts.length; index++) {
      this.send(this.contacts[index]);
    }
    alert('message has been sent');
  }
}
