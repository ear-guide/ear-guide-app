import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-double-click-icon',
  templateUrl: './double-click-icon.component.html',
  styleUrls: ['./double-click-icon.component.scss']
})
export class DoubleClickIconComponent {
  @Input() width!: string;
  @Input() height!: string;
}
