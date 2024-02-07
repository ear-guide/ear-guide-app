import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fast-icon',
  templateUrl: './fast-icon.component.html',
  styleUrls: ['./fast-icon.component.scss']
})
export class FastIconComponent {
  @Input() width!: string;
  @Input() height!: string;
}
