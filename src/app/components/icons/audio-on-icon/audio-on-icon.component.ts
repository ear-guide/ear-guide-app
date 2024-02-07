import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-audio-on-icon',
  templateUrl: './audio-on-icon.component.html',
  styleUrls: ['./audio-on-icon.component.scss']
})
export class AudioOnIconComponent {
  @Input() width!: string;
  @Input() height!: string;
}
