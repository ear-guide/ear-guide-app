import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-audio-off-icon',
  templateUrl: './audio-off-icon.component.html',
  styleUrls: ['./audio-off-icon.component.scss']
})
export class AudioOffIconComponent {
  @Input() width!: string;
  @Input() height!: string;
}
