import { Element } from '../../services/content.service';
import { ISwipeCommand } from "./ISwipeCommand";

export class GoToNextElement implements ISwipeCommand {
  description = 'Zu nächstem Text';

  findIndex(elements: Element[], i: number) {
    return Math.min(i + 1, elements.length - 1);
  }
}
