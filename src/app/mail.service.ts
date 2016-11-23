import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  messages = [
   { id: 0, text: `You've got mail!`},
   {id: 1, text: `More mail.`},
   {id: 2, text: `Last mail.`}
  ];

update(id, text) {
  this.messages = this.messages.map(m =>
    m.id === id ? {id, text}
    : m
   );
}

  constructor() { }

}
