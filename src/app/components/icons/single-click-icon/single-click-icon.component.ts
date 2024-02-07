import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-click-icon',
  templateUrl: './single-click-icon.component.html',
  styleUrls: ['./single-click-icon.component.scss']
})
export class SingleClickIconComponent {
  @Input() width!: string;
  @Input() height!: string;
}
