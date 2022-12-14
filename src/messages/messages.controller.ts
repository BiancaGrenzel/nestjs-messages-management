import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Message } from './Message';
import { MessageDto } from './MessageDto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findById(@Param() params) {
    return this.messagesService.findById(Number(params.id)).catch((error) => {
      throw new NotFoundException(error.message);
    });
  }

  @Post()
  create(@Body() messageDto: MessageDto) {
    return this.messagesService.create(messageDto);
  }

  @Put(':id')
  update(@Param() params, @Body() messageDto: MessageDto) {
    return this.messagesService.update(params.id, messageDto).catch((error) => {
      throw new NotFoundException(error.message);
    });
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.messagesService.delete(Number(params.id)).catch((error) => {
      throw new NotFoundException(error.message);
    });
  }
}
