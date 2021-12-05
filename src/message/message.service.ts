import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message-dto';

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(Message)
        private messagesRepository: Repository<Message>,
    ) { }

    async getAll(): Promise<Message[]> {
        return await this.messagesRepository.find();
    }

    async getOne(idMessage: Number): Promise<Message> {
        return await this.messagesRepository.find(idMessage);
    }

    async createMessage(newMessage: CreateMessageDto): Promise<Message> {
        const newSMS = new Message();
        newSMS.message = newMessage.message;
        newSMS.nick = newMessage.nick;

        return await this.messagesRepository.save(newSMS);
    }

    async updateMessage(idMessage: Number, updateMessage: CreateMessageDto): Promise<Message> {
        const updatedSMS = await this.messagesRepository.findOne(idMessage);
        updatedSMS.nick = updateMessage.nick;
        updatedSMS.message = updateMessage.message;

        return await this.messagesRepository.save(updatedSMS);
    }

    async delateMessage(idMessage: Number): Promise<any> {
        return await this.messagesRepository.delete(idMessage)
    }
}
