let buttonProfileEdit = document.querySelector(".profile__edit-button");
let buttonClose = document.querySelector(".popup__close-button");
let overlay = document.querySelector(".overlay");
let overlayActiveClass = "overlay_active";
const formElement = document.querySelector(".popup__form");
const popupProfile = document.querySelector(".popup");
const profileSubmitButton = document.querySelector(".popup__submit-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
let formNameInput = formElement.querySelector(".popup__name");
let formDescriptionInput = formElement.querySelector(".popup__description");

buttonProfileEdit.addEventListener("click", function (event) {
    
    overlay.classList.add(overlayActiveClass);
  });
  buttonClose.addEventListener("click", function () {
    overlay.classList.remove(overlayActiveClass);
  });
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
  
profileName.textContent =  formNameInput.value;
 profileDescription.textContent = formDescriptionInput.value;
  closePopup(popupProfile);
}
buttonClose.addEventListener("click", () => {
  closePopup(popupProfile);
});

  
formElement.addEventListener("submit", formSubmitHandler);

profileSubmitButton.addEventListener("click", () => {
    closePopup(popupProfile);
  });