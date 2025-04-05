import { Component, OnInit } from '@angular/core';
import { NoteService } from './notes.service';
import { Notes } from './notes.model';

@Component({
  selector: 'app-notes',
  standalone: false,
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  notes: Notes[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.loadNotes();
  }

  openNewNoteModal() {
    this.addNote();
  }

  loadNotes() {
    this.noteService.getNotes().subscribe(data => this.notes = data);
  }
  
  addNote() {
    const newNote: Notes = {
      id: Date.now(),
      title: 'Nova Nota',
      content: 'Conteúdo...',
      date: new Date().toISOString()
    };
  
    this.noteService.addNote(newNote).subscribe(() => this.loadNotes());
  }

}
