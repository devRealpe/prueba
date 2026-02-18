import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [CardModule, AvatarModule, ButtonModule, TagModule, CommonModule],
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
})
export class ProfileHeaderComponent {
  @Input() nombre: string = '';
  @Input() titulo: string = '';
  @Input() tags: string[] = [];
  @Output() darkModeToggle = new EventEmitter<void>();

  onToggleDarkMode() {
    this.darkModeToggle.emit();
  }
}