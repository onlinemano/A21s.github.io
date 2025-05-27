import { unlockAnimation } from '../../../utils/lock_unlock_animation.js';
import { getElById, setDisplay } from '../../../utils/dom_selectors.js';

const notepadScreenContent = getElById('notepad-screen');
const secondaryNotepadScreen = getElById('secondary-notepad-screen');

export function notepadUnlock() {
  setDisplay(notepadScreenContent, 'initial');
  unlockAnimation(secondaryNotepadScreen);
}

export function notepadLock() {
  setDisplay(notepadScreenContent, 'none');
}