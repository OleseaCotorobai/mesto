let buttonProfileEdit = document.querySelector(".profile__edit-button");
let buttonClose = document.querySelector(".popup__close-button");
let overlay = document.querySelector(".overlay");
let overlayActiveClass = "overlay_active";
const formElement = document.querySelector(".popup__form");
const popupProfile = document.querySelector(".popup");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
let formNameInput = formElement.querySelector("#name-input");
let formDescriptionInput = formElement.querySelector("#job-input");

buttonProfileEdit.addEventListener("click", function (event) {
  formNameInput.value = profileName.textContent;
  formDescriptionInput.value = profileDescription.textContent;
  overlay.classList.add(overlayActiveClass);
});
buttonClose.addEventListener("click", function () {
  overlay.classList.remove(overlayActiveClass);
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = formNameInput.value;
  profileDescription.textContent = formDescriptionInput.value;
  overlay.classList.remove(overlayActiveClass);
}

formElement.addEventListener("submit", formSubmitHandler);
