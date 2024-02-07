import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cross-icon',
  templateUrl: './cross-icon.component.html',
  styleUrls: ['./cross-icon.component.scss']
})
export class CrossIconComponent {
  @Input() width!: string;
  @Input() height!: string;
}
