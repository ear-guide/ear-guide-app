// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE

import { Element } from '../../services/content.service';
import { ISwipeCommand } from "./ISwipeCommand";

export class GoToNextHeading implements ISwipeCommand {
  description = 'Zu nächster Überschrift';

  findIndex(elements: Element[], i: number) {
    const min = Math.min(i + 1, elements.length);
    const segment = elements.slice(min, elements.length);
    const next = segment.find(e => e.tag.charAt(0) === 'h');
    return (next) ? elements.indexOf(next) : i;
  }
}
