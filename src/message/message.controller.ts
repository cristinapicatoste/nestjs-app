import { Controller, Post, Get, Put, Delete, Body, Res, HttpService, HttpStatus, Param } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message-dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
    constructor(private messageService: MessageService) {

    }

    @Post()
    create(@Body() createMessageDto: CreateMessageDto, @Res() response) {
        this.messageService.createMessage(createMessageDto)
            .then(message => { response.status(HttpStatus.CREATED).json(message) })
            .catch(() => response.status(HttpStatus.FORBIDDEN).json({ message: 'Error creating message' }))
    }

    @Get()
    getAll(@Res() response) {
        this.messageService.getAll()
            .then(messageList => { response.status(HttpStatus.OK).json(messageList) })
            .catch(() => response.status(HttpStatus.FORBIDDEN).json({ message: 'Error getting message list' }))
    }

    @Get(':id')
    getOne(@Res() response, @Param('id') idMessage) {
        this.messageService.getAll(idMessage)
            .then(message => response.status(HttpStatus.OK).json(message))
            .catch(() => response.status(HttpStatus.FORBIDDEN).json({ message: 'Error getting this message' }))
    }

    @Put(':id')
    update(@Body() updateMessageDto: CreateMessageDto, @Res() response, @Param('id') idMessage) {
        this.messageService.updateMessage(idMessage, updateMessageDto)
            .then(message => response.status(HttpStatus.OK).json(message))
            .catch(() => response.status(HttpStatus.FORBIDDEN).json({ message: 'Error updating message' }))
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') idMessage) {
        this.messageService.delateMessage(idMessage)
            .then(() => response.status(HttpStatus.OK).json({ message: 'Message deleted correctly' }))
            .catch(() => response.status(HttpStatus.FORBIDDEN).json({ message: 'Error deleting message' }))
    }
}
