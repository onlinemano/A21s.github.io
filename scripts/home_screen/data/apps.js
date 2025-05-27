import { calculatorUnlock } from '../apps_functionality/calculator/calculator_unlock.js';
import { notepadUnlock } from '../apps_functionality/notepad/notepad_unlock.js';
export const apps = [

  {
    name: 'Calculator',
    imagePath: '../../images/calculator.png',
    openFunc: calculatorUnlock
    }, {
    name: 'Crunchyroll',
    imagePath: '../../images/crunchyroll.png',
  }, {
    name: 'Camera',
    imagePath: '../../images/camera.png',
  }, {
    name: 'Chrome',
    imagePath: '../../images/google-chrome.png',
  }, {
    name: 'Instagram',
    imagePath: '../../images/instagram.webp',
  }, {
    name: 'Snapchat',
    imagePath: '../../images/snapchat.webp',
  }, {
    name: 'TikTok',
    imagePath: '../../images/tiktok.webp',
  }, {
    name: 'Whatsapp',
    imagePath: '../../images/whatsapp.png',
  }, {
    name: 'Youtube',
    imagePath: '../../images/youtube.png',
  }, {
    name: 'Netflix',
    imagePath: '../../images/netflix.jpg',
  }, {
    name: 'Notepad',
    imagePath: '../../images/notepad.png',
    openFunc: notepadUnlock
  }, {
    name: 'Gmail',
    imagePath: '../../images/gmail.jpg',
  }
]