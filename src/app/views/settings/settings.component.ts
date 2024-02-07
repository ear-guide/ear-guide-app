import { Component } from '@angular/core';
import { ThemeService, Theme } from "../../services/theme.service";
import { RateService, Rate } from "../../services/rate.service";
import { map } from "rxjs";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  Theme = Theme;
  Rate = Rate;

  theme = this.themeService.getTheme();

  constructor(
    private readonly themeService: ThemeService,
    private readonly rateService: RateService,
  ) {}

  setTheme(theme: Theme) {
    this.themeService.setTheme(theme);
  }

  isTheme(theme: Theme) {
    return this.themeService.getTheme()
      .pipe(map(t => t === theme));
  }

  setRate(rate: Rate) {
    this.rateService.setRate(rate);
  }

  isRate(rate: Rate) {
    return this.rateService.getRate() === rate;
  }
}
