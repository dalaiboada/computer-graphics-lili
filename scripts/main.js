import { init as initTabs } from './modules/tabs.js';
import { init as initFileLoader } from './modules/fileLoader.js';

document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initFileLoader();    
});
