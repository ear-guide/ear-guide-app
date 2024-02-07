// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE

import { Component, Input } from '@angular/core';
import { config } from '../../configurations/config';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  @Input() maxWidth = 'max-w-none';
  @Input() insetX   = 'inset-x-0';
  @Input() bottom   = 'bottom-0';

  textSingleSwipeRight = config.swipeBehavior.singleSwipeRightCommand.description;
  textDoubleSwipeRight = config.swipeBehavior.doubleSwipeRightCommand.description;
  textSingleSwipeLeft  = config.swipeBehavior.singleSwipeLeftCommand.description;
  textDoubleSwipeLeft  = config.swipeBehavior.doubleSwipeLeftCommand.description;
  textSingleSwipeDown  = config.swipeBehavior.singleSwipeDownCommand.description;
  textDoubleSwipeDown  = config.swipeBehavior.doubleSwipeDownCommand.description;
  textSingleSwipeUp    = config.swipeBehavior.singleSwipeUpCommand.description;
  textDoubleSwipeUp    = config.swipeBehavior.doubleSwipeUpCommand.description;
}
