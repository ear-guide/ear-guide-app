import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-left-icon',
  templateUrl: './arrow-left-icon.component.html',
  styleUrls: ['./arrow-left-icon.component.scss']
})
export class ArrowLeftIconComponent {
  @Input() width!: string;
  @Input() height!: string;
}
