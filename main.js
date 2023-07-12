function validateForm() {
  // Get the form elements
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const textAreaInput = document.getElementById('textArea');
  
  // Get the error message elements
  const nameErrorMessage = document.querySelector('.errMessage');
  const emailErrorMessage = document.querySelector('.emailMessage');
  const textErrorMessage = document.querySelector('.textMessage');
  
  // Validate the name field
  if (nameInput.value.trim() === '') {
    nameErrorMessage.classList.remove('hidden');
  } else {
    nameErrorMessage.classList.add('hidden');
  }
  
  // Validate the email field
  if (emailInput.value.trim() === '') {
    emailErrorMessage.classList.remove('email-hidden');
  } else {
    emailErrorMessage.classList.add('email-hidden');
  }
  
  // Validate the text area field
  if (textAreaInput.value.trim() === '') {
    textErrorMessage.classList.remove('text-hidden');
  } else {
    textErrorMessage.classList.add('text-hidden');
  }
  
  // Prevent the form from submitting if there are errors
  if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || textAreaInput.value.trim() === '') {
    return false;
  }
  
  // Form is valid, allow form submission
  alert('Your request has been received!')
  function reloadPage() {
    location.reload();
  }
  reloadPage()
}

// Add form submit event listener
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  // Validate the form
  if (!validateForm()) {
    // Prevent form submission if there are errors
    event.preventDefault();
  }
})


const menuBar = document.querySelector(".menu-bar");
menuBar.addEventListener("click", () => {
  const overlay = document.getElementById("overlay");
  overlay.classList.remove("d-none");
  const mobNav = document.querySelector(".mobNav");
  mobNav.classList.remove("d-flex");
  mobNav.style.display = "none";
  mobNav.classList;
});
const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", () => {
  const overlay = document.getElementById("overlay");
  overlay.classList.add("d-none");
  const mobNav = document.querySelector(".mobNav");
  mobNav.classList.add("d-flex");
  mobNav.style.display = "flex";
});

const toContact = document.querySelector(".mob-contact");
toContact.addEventListener("click", () => {
  var section = document.querySelector(".contact");
  section.scrollIntoView({ behavior: "smooth" });
  console.log("clikkk");
});
const toProjects = document.querySelector(".mob-project");
toProjects.addEventListener("click", () => {
  var section = document.querySelector(".projectsSec");
  section.scrollIntoView({ behavior: "smooth" });
  console.log("clikkk");
});
const navAbout = document.querySelector(".navAbout");
navAbout.addEventListener("click", () => {
  var section = document.querySelector(".des-body");
  section.scrollIntoView({ behavior: "smooth" });
  console.log("clikkk");
});
const navContact = document.querySelector(".navContact");
navContact.addEventListener("click", () => {
  var section = document.querySelector(".contact");
  section.scrollIntoView({ behavior: "smooth" });
  console.log("clikkk");
});
const navProjects = document.querySelector(".navProjects");
navProjects.addEventListener("click", () => {
  var section = document.querySelector(".projects");
  section.scrollIntoView({ behavior: "smooth" });
  console.log("clikkk");
});

const contactButton = document.querySelector(".contact-button");
contactButton.addEventListener("click", () => {
  let section = document.querySelector(".contact");
  section.scrollIntoView({
    behavior:"smooth"
  })
})

