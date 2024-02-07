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
