import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

export interface InformacionPersonal {
  label: string;
  valor: string;
}

@Component({
  selector: 'app-info-personal',
  standalone: true,
  imports: [CardModule, CommonModule],
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.scss'],
})
export class InfoPersonalComponent {
  @Input() informacion: InformacionPersonal[] = [];
}