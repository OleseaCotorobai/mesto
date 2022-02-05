const buttonProfileEdit = document.querySelector(".profile__edit-button");
const buttonClose = document.querySelector(".popup__close-button");
const modal = document.querySelector(".modal");
const modalActiveClass = "modal_active";
const formProfileEdit = document.querySelector(".popup__form");
const popup = document.querySelector(".popup");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const formNameInput = formProfileEdit.querySelector("#name-input");
const formDescriptionInput = formProfileEdit.querySelector("#job-input");
const formElement = document.querySelector("#popup-form");
const popupAdd = document.querySelector(".modal_type_place");
const buttonCardEdit = document.querySelector(".profile__add-button");
const formTitleInput = popupAdd.querySelector("#title-input");
const formLinkInput = popupAdd.querySelector("#link-input");
const cardModal = document.querySelector("#add-button");
const elementTitle = document.querySelector(".element__title");

const addCloseButton = document.querySelector("#close-button");

const elementTemplate = document.querySelector("#element-template").content;
const initialCardsElement = document.querySelector(".element");
const cardsElement = elementTemplate.cloneNode(true);
cardsElement.querySelector(".element__title").textContent;
cardsElement.querySelector(".element__image").href;
const profilePopup = document.querySelector(".popup_opened");

///Форма редактировать профиль//
buttonProfileEdit.addEventListener("click", function (event) {
  formNameInput.value = profileName.textContent;
  formDescriptionInput.value = profileDescription.textContent;
  openProfilePopup(buttonProfileEdit);
});

function openProfilePopup() {
  ///функция открытия
  modal.classList.add(modalActiveClass);
}

function closeProfilePopup() {
  ///функция закрытия
  modal.classList.remove(modalActiveClass);
}
buttonClose.addEventListener("click", function () {
  closeProfilePopup(buttonClose);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = formNameInput.value;
  profileDescription.textContent = formDescriptionInput.value;
  closeProfilePopup(formProfileEdit);
}
formProfileEdit.addEventListener("submit", handleProfileFormSubmit);

//Форма добавлять карточки//
function openAddPopup() {
  cardModal.classList.add(modalActiveClass);
}

function closeAddPopup() {
  cardModal.classList.remove(modalActiveClass);
}

buttonCardEdit.addEventListener("click", function (event) {
  openAddPopup(buttonCardEdit);
});
addCloseButton.addEventListener("click", function () {
  closeAddPopup(addCloseButton);
});

// Create card
function createCard(name, link) {
  const cardsElement = elementTemplate.cloneNode(true);
  cardsElement.querySelector(".element__title").textContent = name;
  cardsElement.querySelector(".element__image").src = link;
  cardsElement.querySelector(".element__image").alt = name;

  // like/dislike card

  cardsElement
    .querySelector(".element__like")
    .addEventListener("click", (evt) => {
      evt.target.classList.toggle("element__active_like");
    });

  // delete card
  cardsElement
    .querySelector(".element__delete")
    .addEventListener("click", (evt) => {
      evt.target.closest(".element__description").remove();
    });

  cardsElement
    .querySelector(".element__image")
    .addEventListener("click", openFoto);

  return cardsElement;
}

function addCard(newCard) {
  initialCardsElement.prepend(newCard);
}

initialCards.forEach((item) => {
  const newCard = createCard(item.name, item.link);
  addCard(newCard);
});

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const name = formTitleInput.value;
  const link = formLinkInput.value;
  addCard(name, link);

  openAddPopup(popupAdd);

  elementImage.addEventListener("click", openFoto);
}

popupAdd.addEventListener("submit", handleCardFormSubmit);

///openFoto//
const cardPicture = document.querySelector(".card");
const cardOpen = "card_open";
const popupCardImage = document.querySelector(".card__foto");
const popupCardTitle = document.querySelector(".card__caption");
const elementImage = document.querySelector(".element__image");
const cardCloseButton = document.querySelector("#card-close");

function openFoto() {
  cardPicture.classList.add("card_open");
  popupCardImage.src = this.src;
  popupCardTitle.alt = this.alt;
}
cardCloseButton.addEventListener("click", function () {
  cardPicture.classList.remove("card_open");
});
