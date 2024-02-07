// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE

import { Element } from '../../services/content.service';
import { ISwipeCommand } from "./ISwipeCommand";
import ElementUtil from "./util/ElementUtil";

export class GoToNextLowerLevelElement implements ISwipeCommand {
  description = 'Eine Ebene im Text absteigen';

  findIndex(elements: Element[], curr: number) {
    const current = elements.at(curr)!;

    for (let i = curr + 1; i < elements.length; i++) {
      const cmp = ElementUtil.compareLevel(
        current.tag, elements.at(i)!.tag);

      if (cmp < 0) {
        return i;
      } else {
        break;
      }
    }

    return curr;
  }
}
