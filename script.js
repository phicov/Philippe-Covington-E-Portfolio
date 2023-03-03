let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;
const rotateFactor = 1 / 3

function moveBackground(event) {
  const shapes = document.querySelectorAll('.shape')
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;
  const deg = event.clientX * rotateFactor



  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt }px) rotate(${deg}deg)`
  
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle){
    document.body.classList += " dark-theme"
  } else {
  document.body.classList.remove("dark-theme")
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading')
  const success = document.querySelector('.modal__overlay--success')
  loading.classList += ' modal__overlay--visible'

  emailjs
    .sendForm(
      "service_b17ey0n",
      "template_jxbvxpq",
      event.target,
      "QiS7h_2E4oYTOVOzv"
    ).then(() => {
      loading.classList.remove("modal__overlay--visible")
      success.classList += ' modal__overlay--visible'
    }).catch(() => {
      loading.classList.remove("modal_-overlay--visible");
      alert(
        "The email service is temporarily unavaible. Please contact me directly @ philippehcbusi@gmail.com"
      )
    })
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove('modal--open')
  }
  isModalOpen = true;
  // toggle modal
  document.body.classList += ' modal--open'
}
