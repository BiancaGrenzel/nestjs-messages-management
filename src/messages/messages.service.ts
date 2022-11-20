import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  public messages = [
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
}
