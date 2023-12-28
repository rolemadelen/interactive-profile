let isOpen = false;
const buttons = document.querySelectorAll('button[data-state="closed"]');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const spanTag = button.nextElementSibling;
    spanTag.classList.toggle('blur');
    const state = button.getAttribute('data-state');
    button.setAttribute('data-state', state === 'open' ? 'closed' : 'open');
  });
});

const revealBtn = document.querySelector('.reveal > button');
revealBtn.addEventListener('click', () => {
  if (isOpen) closeAll();
  else openAll();

  revealBtn.innerText = isOpen ? 'open' : 'close';
  isOpen = !isOpen;
});

function openAll() {
  buttons.forEach((button) => {
    const spanTag = button.nextElementSibling;
    spanTag.classList.remove('blur');
    button.setAttribute('data-state', 'open');
  });
}
function closeAll() {
  buttons.forEach((button) => {
    const spanTag = button.nextElementSibling;
    spanTag.classList.add('blur');
    button.setAttribute('data-state', 'closed');
  });
}
