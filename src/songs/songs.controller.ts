import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    @Post()
    create(@Body() createSongDto: CreateSongDto) {
        return 'Song created'
    }

    @Get()
    getAll() {
        return 'Song list'
    }

    @Put(':id')
    update(@Body() updateSongDto: CreateSongDto) {
        return 'Song updated'
    }

    @Delete(':id')
    delete() {
        return 'Song deleted'
    }
}
