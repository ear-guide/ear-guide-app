// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE

import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { AudioService } from "../../services/audio.service";
import { BehaviorSubject, map } from "rxjs";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() maxWidth: string = 'max-w-none';
  @Input() insetX: string = 'inset-x-0';
  @Input() bottom: string = 'bottom-0';

  hidden: boolean = true;

  audio: BehaviorSubject<boolean>;

  @ViewChild('info')
  private info!: ElementRef;

  @ViewChild('menu')
  private menu!: ElementRef;

  constructor(private readonly audioService: AudioService) {
    this.audio = audioService.audio;
  }

  @HostListener('document:click', ['$event'])
  private onClick(e: Event) {
    if (!this.hidden) {
      if (!this.info.nativeElement.contains(e.target)
        && !this.menu.nativeElement.contains(e.target)) {
        this.hidden = true;
      }
    }
  }

  toggleHidden() {
    this.hidden = !this.hidden;
  }

  toggleAudio() {
    this.audio.next(!this.audio.value);
  }

  audioEnabled() {
    return this.audio.asObservable();
  }

  audioDisabled() {
    return this.audio.asObservable()
      .pipe(map(audio => !audio));
  }
}
