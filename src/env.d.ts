/// <reference types="astro/client" />

interface MotionState {
  reduced: boolean;
  forced: boolean;
  allowed: boolean;
}

interface Window {
  __motion?: MotionState;
}
