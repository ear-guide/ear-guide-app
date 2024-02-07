import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-right-icon',
  templateUrl: './arrow-right-icon.component.html',
  styleUrls: ['./arrow-right-icon.component.scss']
})
export class ArrowRightIconComponent {
  @Input() width!: string;
  @Input() height!: string;
}
