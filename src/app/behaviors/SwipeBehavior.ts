// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE

import { ISwipeBehavior } from "./ISwipeBehavior";
import { GoToNextElement } from "./commands/GoToNextElement";
import { GoToNextSameLevelElement } from "./commands/GoToNextSameLevelElement";
import { GoToPreviousElement } from "./commands/GoToPreviousElement";
import { GoToPreviousSameLevelElement } from "./commands/GoToPreviousSameLevelElement";
import { GoToNextHeading } from "./commands/GoToNextHeading";
import { GoToNextHigherLevelHeading } from "./commands/GoToNextHigherLevelHeading";
import { GoToPreviousHeading } from "./commands/GoToPreviousHeading";
import { GoToPreviousHigherLevelHeading } from "./commands/GoToPreviousHigherLevelHeading";

const swipeBehavior: ISwipeBehavior = {
  singleSwipeRightCommand: new GoToNextElement(),
  doubleSwipeRightCommand: new GoToNextSameLevelElement(),
  singleSwipeLeftCommand:  new GoToPreviousElement(),
  doubleSwipeLeftCommand:  new GoToPreviousSameLevelElement(),
  singleSwipeDownCommand:  new GoToNextHeading(),
  doubleSwipeDownCommand:  new GoToNextHigherLevelHeading(),
  singleSwipeUpCommand:    new GoToPreviousHeading(),
  doubleSwipeUpCommand:    new GoToPreviousHigherLevelHeading()
}

export default swipeBehavior;
