import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-down-icon',
  templateUrl: './arrow-down-icon.component.html',
  styleUrls: ['./arrow-down-icon.component.scss']
})
export class ArrowDownIconComponent {
  @Input() width!: string;
  @Input() height!: string;
}
