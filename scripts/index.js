let buttonProfileEdit = document.querySelector('.profile__edit-button');
let buttonClose = document.querySelector('.popup__close-button');
let overlay = document.querySelector('.overlay');
let buttonSubmit = document.querySelector('.popup__submit-button');
let overlayActiveClass = 'overlay_active';

buttonProfileEdit.addEventListener('click', function(event) {
event.preventDefault();
overlay.classList.add(overlayActiveClass);
});

buttonClose.addEventListener('click', function() {
overlay.classList.remove(overlayActiveClass);
});


const formElement = document.querySelector(".popup__form");
const popupProfile = document.querySelector(".popup");
const profileSubmitButton = document.querySelector(".popup__submit-button");


const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

buttonProfileEdit.addEventListener("click", () => {
  openPopup(popupProfile);
});

function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
function formSubmitHandler(evt) {
  evt.preventDefault();
  let formNameInput = formElement.querySelector(".popup__name");
  let formDescriptionInput = formElement.querySelector(".popup__description");
  formNameInput.value = profileName.textContent;
  formDescriptionInput.value = profileDescription.textContent;
  closePopup(popupProfile);
}
buttonClose.addEventListener("click", () => {
  closePopup(popupProfile);
});
buttonSubmit.addEventListener("submit", formSubmitHandler);
