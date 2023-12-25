const buttons = document.querySelectorAll('button[data-state="closed"]');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const spanTag = button.nextElementSibling;
    spanTag.classList.toggle('blur');
    const state = button.getAttribute('data-state');
    button.setAttribute('data-state', state === 'open' ? 'closed' : 'open');
  });
});
