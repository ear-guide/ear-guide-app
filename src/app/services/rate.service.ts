import { Injectable } from '@angular/core';

export enum Rate {
  SLOW = 0.75,
  FAST = 1.0
}

@Injectable({
  providedIn: 'root'
})
export class RateService {

  private rate: Rate;

  constructor() {
    this.rate = this.getStoredRate() || 1.0;
  }

  public setRate(rate: Rate) {
    this.setStoredRate(rate)
    this.rate = rate;
  }

  public getRate() {
    return this.rate;
  }

  private setStoredRate(rate: Rate) {
    localStorage.setItem('rate', `${rate}`);
  }

  private getStoredRate() {
    const storedRate = localStorage.getItem('rate');
    return storedRate === null
      ? undefined
      : isNaN(parseFloat(storedRate))
        ? undefined
        : parseFloat(storedRate);
  }
}
