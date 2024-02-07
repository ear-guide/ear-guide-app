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
