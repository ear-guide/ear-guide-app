// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE

import { Element } from '../../services/content.service';
import { ISwipeCommand } from "./ISwipeCommand";

export class GoToPreviousElement implements ISwipeCommand {
  description = 'Zu vorherigem Text';

  findIndex(elements: Element[], i: number) {
    return Math.max(i - 1, 0);
  }
}
