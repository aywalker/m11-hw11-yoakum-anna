//Global Varibales
const myBoxes = document.getElementsByClassName('block');

//The Functionality
function loopThrough() {
console.log(this.textContent.length)
  const changeColor = () => this.classList.toggle('purple');
  for (let i = 0; i < this.textContent.length; i++) {
  };
};

//The Event Listener
for (let i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
};
