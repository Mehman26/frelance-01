const subTitleNode = document.querySelector('.js-content__subtitle');
const aboutBlockNode = document.querySelector('.js-about');
const socialAnimateOne = document.querySelector('.js-one-item');
const socialAnimateEnd = document.querySelector('.js-end-item');

document.addEventListener("DOMContentLoaded", () => {
  subTitleNode.classList.add('_active');
  aboutBlockNode.classList.add('_active');
  socialAnimateOne.classList.add('_active');
  socialAnimateEnd.classList.add('_active');
});