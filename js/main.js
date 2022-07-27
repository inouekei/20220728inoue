
//トップへ戻るボタン
function scrollTop(elem) {
  const target = document.getElementById(elem);
  target.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

scrollTop('scroll-button');

//問い合わせウィンドウ動作
const openBtn = document.getElementById('openBtn');
const applyBtn = document.getElementById('applyBtn');
const modal = document.getElementById('modal');
openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
})
closeMark.addEventListener('click', () => {
  modal.style.display = 'none';
})
window.addEventListener('click', (e) => {
  if (!e.target.closest('.modal__content-inner') && e.target.id !== "openBtn") {
    modal.style.display = 'none';
  }
});

//ハンバーガーメニュー
const target = document.getElementById("mobile-menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("nav");
  nav.classList.toggle('in');
});