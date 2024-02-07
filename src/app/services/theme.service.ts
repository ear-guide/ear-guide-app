// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE

import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly theme;

  constructor() {
    this.theme = new BehaviorSubject(this.getStoredTheme() || Theme.LIGHT)
    this.theme.subscribe(theme => this.onThemeChange(theme));
    this.theme.next(this.theme.value);
  }

  public setTheme(theme: Theme) {
    this.theme.next(theme);
  }

  public getTheme() {
    return this.theme.asObservable();
  }

  private onThemeChange(theme: Theme) {
    this.setStoredTheme(theme);
    this.setThemeClass(theme);
  }

  private setThemeClass(theme: Theme) {
    const classes = document.querySelector('html')!.classList;
    classes.remove(...Object.values(Theme));
    classes.add(theme);
  }

  private setStoredTheme(theme: Theme) {
    localStorage.setItem('theme', theme);
  }

  private getStoredTheme() {
    const storedTheme = localStorage.getItem('theme') as Theme;
    return Object.values(Theme).includes(storedTheme)
      ? storedTheme as Theme
      : undefined;
  }
}
