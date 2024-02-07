// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE

import { Element } from '../../services/content.service';
import { ISwipeCommand } from "./ISwipeCommand";
import ElementUtil from "./util/ElementUtil";

export class GoToNextHigherLevelHeading implements ISwipeCommand {
  description = 'Zu nächster höheren Überschrift';

  findIndex(elements: Element[], i: number) {
    const min = Math.min(i + 1, elements.length);
    const current = elements.at(i)!;
    const segment = elements.slice(min, elements.length);
    const next = segment.find(e => {
      return 0 < ElementUtil
        .compareLevel(current.tag, e.tag);
    });
    return (next) ? elements.indexOf(next) : i;
  }
}
