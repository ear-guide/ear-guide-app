import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { SpeechService } from "./speech.service";

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  public audio = new BehaviorSubject<boolean>(false);

  constructor(private readonly speechService: SpeechService) {
    this.audio.next(this.getStoredAudio());
    this.audio.subscribe(audio => {
      if (!audio) speechService.cancel();
      this.setStoredAudio(audio ? 'on' : 'off');
    });
  }

  private getStoredAudio() {
    return localStorage.getItem('audio') === 'on';
  }

  private setStoredAudio(audio: 'on' | 'off') {
    localStorage.setItem('audio', audio);
  }

  public initAudio(audio: boolean) {
    this.getStoredAudio() === null && this.audio.next(audio);
  }
}
