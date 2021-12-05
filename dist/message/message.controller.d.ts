import { CreateMessageDto } from './dto/create-message-dto';
export declare class MessageController {
    create(createMessageDto: CreateMessageDto): string;
    getAll(): string;
    getOne(): string;
    update(updateMessageDto: CreateMessageDto): string;
    delete(): string;
}
