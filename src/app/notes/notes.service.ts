import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Notes } from "./notes.model";

@Injectable({ providedIn: 'root' })
export class NoteService {
  private apiUrl = 'http://localhost:3000/notes';

  constructor(private http: HttpClient) {}

  getNotes() {
    return this.http.get<Notes[]>(this.apiUrl);
  }

  addNote(note: Notes) {
    return this.http.post<Notes>(this.apiUrl, note);
  }

  deleteNote(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
