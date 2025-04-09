import { Component, OnInit } from '@angular/core';

interface Nota {
  titulo: string
  conteudo: string;
}

@Component({
  selector: 'app-notas',
  standalone: false,
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})

export class NotasPage {
  novaNota: Nota = { titulo: '', conteudo: '' };
  notas: Nota[] = [];

  adicionarNota() {
    if (this.novaNota.titulo.trim() && this.novaNota.conteudo.trim()) {
      this.notas.push({ titulo: this.novaNota.titulo, conteudo: this.novaNota.conteudo });
      this.novaNota = { titulo: '', conteudo: '' };
    }
  }

  removerNota(index: number) {
    this.notas.splice(index, 1);
  }
}

