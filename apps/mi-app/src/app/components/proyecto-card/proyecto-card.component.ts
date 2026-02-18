import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

export interface Proyecto {
  nombre: string;
  descripcion: string;
  estado: string;
  severidad: 'success' | 'warn' | 'info' | 'danger' | 'secondary';
}

@Component({
  selector: 'app-proyecto-card',
  standalone: true,
  imports: [CardModule, TagModule, CommonModule],
  templateUrl: './proyecto-card.component.html',
  styleUrls: ['./proyecto-card.component.scss'],
})
export class ProyectoCardComponent {
  @Input() proyecto!: Proyecto;
}