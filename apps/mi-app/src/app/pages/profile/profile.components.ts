import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ChipModule } from 'primeng/chip';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CardModule, TagModule, ChipModule, AvatarModule, ButtonModule],
  templateUrl: './profile.html',
})
export class ProfileComponent {
  skills = ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Git', 'NestJS', 'Tailwind CSS'];

  proyectos = [
    { nombre: 'Sistema de Inventario', descripcion: 'Angular + NestJS + PostgreSQL', estado: 'Completado', severidad: 'success' as const },
    { nombre: 'App de Turnos Médicos', descripcion: 'Angular + Firebase', estado: 'En progreso', severidad: 'warn' as const },
    { nombre: 'Portal de Reportes', descripcion: 'Angular + PrimeNG + Node.js', estado: 'Planeado', severidad: 'info' as const },
  ];

  toggleDarkMode() {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('dark');
}
}