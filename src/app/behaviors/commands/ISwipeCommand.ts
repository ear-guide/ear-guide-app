// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE

import { Element } from '../../services/content.service';

export interface ISwipeCommand {
  description: string;
  findIndex: (elements: Element[], current: number) => number;
}
