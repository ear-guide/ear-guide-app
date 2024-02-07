// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE

import { Injectable } from '@angular/core';

export interface Utterance {
  text: string;
  lang: string;
  rate: number;
}

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  private readonly synthesis?: SpeechSynthesis;
  private readonly utterance?: SpeechSynthesisUtterance;

  constructor() {
    if ('speechSynthesis' in window) {
      this.synthesis = window.speechSynthesis;
      this.utterance = new SpeechSynthesisUtterance();
    }
  }

  public isAvailable(): boolean {
    return this.synthesis !== undefined;
  }

  public speak(utterance: Utterance): void {
    if (this.isAvailable()) {
      this.synthesis!.cancel();
      this.utterance!.text = utterance.text;
      this.utterance!.lang = utterance.lang;
      this.utterance!.rate = utterance.rate;
      this.synthesis!.speak(this.utterance!);
    }
  }

  public cancel(): void {
    this.synthesis?.cancel();
  }

  public togglePlay(): void {
    if (this.synthesis?.paused) {
      this.synthesis?.resume();
    } else if (this.synthesis?.speaking) {
      this.synthesis?.pause();
    }
  }
}
