import { Element } from '../../services/content.service';

export interface ISwipeCommand {
  description: string;
  findIndex: (elements: Element[], current: number) => number;
}
