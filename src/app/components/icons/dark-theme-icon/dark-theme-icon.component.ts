import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dark-theme-icon',
  templateUrl: './dark-theme-icon.component.html',
  styleUrls: ['./dark-theme-icon.component.scss']
})
export class DarkThemeIconComponent {
  @Input() width!: string;
  @Input() height!: string;
}
