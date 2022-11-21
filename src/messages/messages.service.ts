import { Injectable } from '@nestjs/common';
import { Message } from './Message';
@Injectable()
export class MessagesService {
  public messages: Message[] = [
    {
      id: 1,
      text: 'Primeira Mensagem',
    },
    {
      id: 2,
      text: 'Segunda Mensagem',
    },
  ];

  findAll() {
    return this.messages;
  }

  findById(id: number) {
    return this.messages.find((message) => message.id === id);
  }

  create(message: Message) {
    return this.messages.push(message);
  }
}
