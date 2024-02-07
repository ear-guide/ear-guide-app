// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE

import { Element } from '../../services/content.service';
import { ISwipeCommand } from "./ISwipeCommand";

export class GoToPreviousHeading implements ISwipeCommand {
  description = 'Zu vorheriger Überschrift';

  findIndex(elements: Element[], i: number) {
    const segment = elements.slice(0, i).reverse();
    const prev = segment.find(e => e.tag.charAt(0) === 'h');
    return (prev) ? elements.indexOf(prev) : i;
  }
}
