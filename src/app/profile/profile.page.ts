import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import * as L from 'leaflet';;

  
@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements AfterViewInit {

  private map!: L.Map;

  constructor(private platform: Platform) {}

  ngAfterViewInit(): void {
    this.platform.ready().then(() => {
      setTimeout(() => {
        this.initMap();
      }, 100); // espera um pouquinho para garantir que a tela esteja pronta
    });
  }

  private initMap(): void {
    this.map = L.map('map').setView([-23.5505, -46.6333], 13); // São Paulo como exemplo

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    setTimeout(() => {
      this.map.invalidateSize();
    }, 300); // tempo suficiente para a tela abrir

    // Exemplo: marcador simples
    const marker = L.marker([-23.5505, -46.6333]).addTo(this.map);
    marker.bindPopup('Você está aqui!').openPopup();
  }
}