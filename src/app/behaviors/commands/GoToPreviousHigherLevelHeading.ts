// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE

import { Element } from '../../services/content.service';
import { ISwipeCommand } from "./ISwipeCommand";
import ElementUtil from "./util/ElementUtil";

export class GoToPreviousHigherLevelHeading implements ISwipeCommand {
  description = 'Zu vorheriger höheren Überschrift';

  findIndex(elements: Element[], i: number) {
    const current = elements.at(i)!;
    const segment = elements.slice(0, i).reverse();
    const prev = segment.find(e => {
      return 0 < ElementUtil
        .compareLevel(current.tag, e.tag);
    });
    return (prev) ? elements.indexOf(prev) : i;
  }
}
