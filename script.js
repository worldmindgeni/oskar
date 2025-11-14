
document.querySelector('.hero-text button').addEventListener('click', () => {
  alert("Переход в каталог! 🎮");
});


document.querySelectorAll('.card button').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const name = e.target.parentElement.querySelector('h3').innerText;
    alert(`${name} добавлен в корзину 🛒`);
  });
});

