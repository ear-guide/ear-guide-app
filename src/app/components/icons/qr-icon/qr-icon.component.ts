import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qr-icon',
  templateUrl: './qr-icon.component.html',
  styleUrls: ['./qr-icon.component.scss']
})
export class QrIconComponent {
  @Input() width!: string;
  @Input() height!: string;
}
