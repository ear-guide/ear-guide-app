import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-up-icon',
  templateUrl: './arrow-up-icon.component.html',
  styleUrls: ['./arrow-up-icon.component.scss']
})
export class ArrowUpIconComponent {
  @Input() width!: string;
  @Input() height!: string;
}
