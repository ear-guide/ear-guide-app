// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE

import { ISwipeCommand } from "./commands/ISwipeCommand";

export interface ISwipeBehavior {
  singleSwipeRightCommand: ISwipeCommand,
  doubleSwipeRightCommand: ISwipeCommand,
  singleSwipeLeftCommand:  ISwipeCommand,
  doubleSwipeLeftCommand:  ISwipeCommand,
  singleSwipeDownCommand:  ISwipeCommand,
  doubleSwipeDownCommand:  ISwipeCommand,
  singleSwipeUpCommand:    ISwipeCommand,
  doubleSwipeUpCommand:    ISwipeCommand
}
