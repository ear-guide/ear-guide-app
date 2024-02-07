import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-magnifier-minus-icon',
  templateUrl: './magnifier-minus-icon.component.html',
  styleUrls: ['./magnifier-minus-icon.component.scss']
})
export class MagnifierMinusIconComponent {
  @Input() width!: string;
  @Input() height!: string;
}
