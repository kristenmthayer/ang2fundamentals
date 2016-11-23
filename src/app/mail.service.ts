import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  messages = [
    `You've got mail!`,
    `More mail.`,
    `Last mail.`
    ];
  constructor() { }

}
