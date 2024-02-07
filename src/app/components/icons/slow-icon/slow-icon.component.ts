import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slow-icon',
  templateUrl: './slow-icon.component.html',
  styleUrls: ['./slow-icon.component.scss']
})
export class SlowIconComponent {
  @Input() width!: string;
  @Input() height!: string;
}
