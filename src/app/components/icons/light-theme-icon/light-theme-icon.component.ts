import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-light-theme-icon',
  templateUrl: './light-theme-icon.component.html',
  styleUrls: ['./light-theme-icon.component.scss']
})
export class LightThemeIconComponent {
  @Input() width!: string;
  @Input() height!: string;
}
