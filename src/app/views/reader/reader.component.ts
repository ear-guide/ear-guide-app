// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpeechService } from "../../services/speech.service";
import { ContentService, Element } from "../../services/content.service";
import { BehaviorSubject, Subscription } from "rxjs";
import { AudioService } from "../../services/audio.service";
import { config } from "../../configurations/config";
import { RateService } from "../../services/rate.service";
import {ISwipeCommand} from "../../behaviors/commands/ISwipeCommand";

interface Map { [direction: string]: number | undefined }

const TEXT_SIZES = ['text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl'];

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements OnInit, OnDestroy {

  private lang = 'de-DE';

  private behavior = config.swipeBehavior;

  private swipeTimeoutIDs: Map = {
    RIGHT: undefined,
    LEFT:  undefined,
    DOWN:  undefined,
    UP:    undefined
  }

  private tapTimeoutIDs: number[] = [];

  private subs: Subscription[] = [];

  public guide: Element[] = [];

  public audio: BehaviorSubject<boolean>;

  public index = new BehaviorSubject<number | undefined>(undefined);

  public textSizes: {[heading: string]: string} = {};

  constructor(
    private readonly contentService: ContentService,
    private readonly speechService: SpeechService,
    private readonly audioService: AudioService,
    private readonly rateService: RateService,
    private readonly route: ActivatedRoute,
  ) {
    this.audio = audioService.audio;
    this.subs.push(this.audio.subscribe(_ => {
      this.index.next(undefined);
    }));
  }

  public ngOnInit() {
    const params = this.route.snapshot.queryParams;

    this.audioService.initAudio(params['audio'] === 'on');
    this.lang = params['lang'] ? params['lang'] : this.lang;

    this.subs.push(
      this.route.data.subscribe(data => {
        this.guide = data['guide'];
        this.initTextSizes();
      })
    );

    this.subs.push(
      this.index.subscribe(_ => {
        if (this.isAvailable()) {
          this.scroll();
          if (this.audio.value) {
            this.speak();
          }
        }
      })
    );
  }

  public ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  public isAvailable() {
    return this.index.value !== undefined;
  }

  private initTextSizes() {
    let i = this.guide // compute max heading level
      .map(e => e.tag.charAt(0) === 'h' ? +e.tag.charAt(1) : 0)
      .reduce((acc, curr) => Math.max(acc, curr));

    for (const textSize of TEXT_SIZES) {
      this.textSizes['h' + i--] = textSize;
      if (i === 0) break;
    }
  }

  private speak() {
    const index = this.index.value!;
    const element = this.guide[index];
    this.speechService.speak({
      text: element.text,
      lang: this.lang,
      rate: this.rateService.getRate(),
    });
  }

  private scroll() {
    const id = `${this.index.value}`;
    document.getElementById(id)!.scrollIntoView();
  }

  public onTap(e: any, index: number) {
    if (e.tapCount === 1) {
      this.tapTimeoutIDs.push(setTimeout(() => {
        this.index.next(index);
      }, 300));
    }
  }

  public onDoubleTap(e: any) {
    if (e.tapCount === 2) {
      this.tapTimeoutIDs.forEach(id => clearTimeout(id));
      this.speechService.togglePlay();
    }
  }

  public onSwipeRight() {
    this.onSwipe('RIGHT',
      this.behavior.singleSwipeRightCommand,
      this.behavior.doubleSwipeRightCommand);
  }

  public onSwipeLeft() {
    this.onSwipe('LEFT',
      this.behavior.singleSwipeLeftCommand,
      this.behavior.doubleSwipeLeftCommand);
  }

  public onSwipeDown() {
    this.onSwipe('DOWN',
      this.behavior.singleSwipeDownCommand,
      this.behavior.doubleSwipeDownCommand);
  }

  public onSwipeUp() {
    this.onSwipe('UP',
      this.behavior.singleSwipeUpCommand,
      this.behavior.doubleSwipeUpCommand);
  }

  private onSwipe(direction: string,
                  singleSwipeCommand: ISwipeCommand,
                  doubleSwipeCommand: ISwipeCommand) {
    if (!this.isAvailable()) return; // prevents bug with audio
    if (this.swipeTimeoutIDs[direction] === undefined) {
      this.swipeTimeoutIDs[direction] = setTimeout(() => {
        this.swipeTimeoutIDs[direction] = undefined;
        this.index.next(singleSwipeCommand
          .findIndex(this.guide, this.index.value!));
      }, 300);
    } else {
      clearTimeout(this.swipeTimeoutIDs[direction]);
      this.swipeTimeoutIDs[direction] = undefined;
      this.index.next(doubleSwipeCommand
        .findIndex(this.guide, this.index.value!));
    }
  }
}
