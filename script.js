// 
// 
// 
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

let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove('modal--open')
  }
  isModalOpen = true;
  // toggle modal
  document.body.classList += ' modal--open'
}