import { Controller, Get, Post, Body } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NoteDto } from './note.dto';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get()
  getAll() {
    return this.notesService.getAllNotes();
  }

  @Post('new')
  newNote(@Body() note: NoteDto) {
    this.notesService.createNote(note.message);
  }
}
