import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-settings-icon',
  templateUrl: './settings-icon.component.html',
  styleUrls: ['./settings-icon.component.scss']
})
export class SettingsIconComponent {
  @Input() width!: string;
  @Input() height!: string;
}
