import { Injectable } from '@nestjs/common';
import { Note } from './note.model';

@Injectable()
export class NotesService {
  private notes: Note[] = [];

  public getAllNotes(): Note[] {
    this.cleanNotes();
    return this.notes;
  }

  public createNote(message: string) {
    const newNote = new Note(message);
    this.notes.push(newNote);

    this.cleanNotes();
  }

  private cleanNotes() {
    // remove the expired notes
    const now = new Date().getTime();
    this.notes = this.notes.filter(note => {
      return note.expireTS > now;
    });

    // Clean if there are more then 20 notes
    if (this.notes.length > 20) {
      this.notes.shift();
    }
  }
}
