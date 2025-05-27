import { unlockAnimation } from '../../../utils/lock_unlock_animation.js';
import { getElById, setDisplay } from '../../../utils/dom_selectors.js';

const calculatorScreenContent = getElById('calculator-screen');
const secondaryCalculatorScreen = getElById('secondary-calculator-screen');

export function calculatorUnlock() {
  setDisplay(calculatorScreenContent, 'initial');
  unlockAnimation(secondaryCalculatorScreen);
}

export function calculatorLock() {
  setDisplay(secondaryCalculatorScreen, 'none');
}