// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE

import swipeBehavior from '../behaviors/SwipeBehavior';

const isProd = true;

const prodContext = '/accessible-audio-guide';
const devContext = '';

const variant = 'V1';

export const config = {
  isProd,
  variant,
  swipeBehavior,
  context: isProd ? prodContext : devContext,
};
