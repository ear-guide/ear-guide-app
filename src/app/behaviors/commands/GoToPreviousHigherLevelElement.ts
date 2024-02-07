import { Element } from '../../services/content.service';
import { ISwipeCommand } from "./ISwipeCommand";
import ElementUtil from "./util/ElementUtil";

export class GoToPreviousHigherLevelElement implements ISwipeCommand {
  description = 'Eine Ebene im Text aufsteigen';

  findIndex(elements: Element[], curr: number) {
    const current = elements.at(curr)!;

    for (let i = curr - 1; i >= 0; i--) {
      const cmp = ElementUtil.compareLevel(
        current.tag, elements.at(i)!.tag);

      if (cmp > 0) {
        return i;
      } else {
        continue;
      }
    }

    return curr;
  }
}
