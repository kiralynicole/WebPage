const dialog = document.querySelector('dialog');
const box = document.querySelector('.box');

dialog.addEventListener('close', () => {
    box.classList.remove('box');
});