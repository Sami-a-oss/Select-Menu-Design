const inputBox = document.querySelector('.inputBox');

const text = document.querySelector('#text');

const options = document.querySelectorAll('.option');

const listBox = document.querySelector('#listBox');

const icon = document.querySelector('#icon');

for(let option of options) {
  option.addEventListener("click", () => {
    text.innerHTML = option.textContent;
    listBox.classList.toggle('hiddens');
    icon.classList.toggle('rotate')
  });
}

inputBox.addEventListener("click", () => {
  listBox.classList.toggle('hiddens');
  icon.classList.toggle('rotate')
})
