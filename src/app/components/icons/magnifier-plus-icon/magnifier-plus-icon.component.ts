import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-magnifier-plus-icon',
  templateUrl: './magnifier-plus-icon.component.html',
  styleUrls: ['./magnifier-plus-icon.component.scss']
})
export class MagnifierPlusIconComponent {
  @Input() width!: string;
  @Input() height!: string;
}
