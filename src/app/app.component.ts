import { Component } from '@angular/core';
import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Let's get started!`;
  onUpdate(id, text) {
    this.mail.update(id, text);
  }
  constructor(private mail: MailService) {}
}
