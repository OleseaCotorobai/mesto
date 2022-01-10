let buttonProfileEdit = document.querySelector(".profile__edit-button");
let buttonClose = document.querySelector(".popup__close-button");
let overlay = document.querySelector(".overlay");
const formElement = document.querySelector(".popup__form");
const popupProfile = document.querySelector(".popup");
const profileSubmitButton = document.querySelector(".popup__submit-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

function openPopup(popup) {
  popup.classList.add("overlay_active");
}
function closePopup(popup) {
  popup.classList.remove("overlay_active");
}
function formSubmitHandler(evt) {
  evt.preventDefault();
  let formNameInput = formElement.querySelector(".popup__name");
  let formDescriptionInput = formElement.querySelector(".popup__description");
  profileName.textContent =  formNameInput.value;
  profileDescription.textContent = formDescriptionInput.value;
  closePopup(popupProfile);
}

buttonClose.addEventListener("click", () => {
  closePopup(popupProfile);
});
buttonProfileEdit.addEventListener("click", () => {
  openPopup(popupProfile);
});
profileSubmitButton.addEventListener("submit", formSubmitHandler);
