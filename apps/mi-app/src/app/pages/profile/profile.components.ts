import { Component } from '@angular/core';
import { ProfileHeaderComponent } from '../../components/profile-header/profile-header.component';
import { InfoPersonalComponent, InformacionPersonal } from '../../components/info-personal/info-personal.component';
import { ProyectoCardComponent, Proyecto } from '../../components/proyecto-card/proyecto-card.component';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ProfileHeaderComponent,
    InfoPersonalComponent,
    ProyectoCardComponent,
    CardModule,
    ChipModule,
    CommonModule,
  ],
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss'],
})
export class ProfileComponent {
  skills = ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Git', 'NestJS', 'Tailwind CSS'];

  informacion: InformacionPersonal[] = [
    { label: 'Correo', valor: 'johan.ordonez@email.com' },
    { label: 'Teléfono', valor: '+57 300 123 4567' },
    { label: 'Ciudad', valor: 'Pasto, Nariño' },
    { label: 'Experiencia', valor: '3 años' },
  ];

  proyectos: Proyecto[] = [
    { nombre: 'Sistema de Inventario', descripcion: 'Angular + NestJS + PostgreSQL', estado: 'Completado', severidad: 'success' },
    { nombre: 'App de Turnos Médicos', descripcion: 'Angular + Firebase', estado: 'En progreso', severidad: 'warn' },
    { nombre: 'Portal de Reportes', descripcion: 'Angular + PrimeNG + Node.js', estado: 'Planeado', severidad: 'info' },
  ];

  toggleDarkMode() {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('dark');
  }
}