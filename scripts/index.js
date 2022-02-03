let buttonProfileEdit = document.querySelector(".profile__edit-button");
let buttonClose = document.querySelector(".popup__close-button");
let overlay = document.querySelector(".overlay");
let overlayActiveClass = "overlay_active";
const formElement = document.querySelector(".popup__form");
const popup = document.querySelector(".popup");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
let formNameInput = formElement.querySelector("#name-input");
let formDescriptionInput = formElement.querySelector("#job-input");

const popupAdd = document.querySelector(".overlay_type_place");
let buttonCardEdit = document.querySelector(".profile__add-button");
let formTitleInput = popupAdd.querySelector("#title-input");
let formLinkInput = popupAdd.querySelector("#link-input");
let cardOverlay = document.querySelector("#add-button");
const elementTitle = document.querySelector(".element__title");

const addCloseButton = document.querySelector("#close-button");

const elementTemplate = document.querySelector("#element-template").content;
const initialCardsElement = document.querySelector(".element");
const cardsElement = elementTemplate.cloneNode(true);
cardsElement.querySelector(".element__title").textContent;
cardsElement.querySelector(".element__image").href;

const content = document.querySelector(".content");

const likeButtonActive = "element__active_like";
const likeButton = document.querySelector(".element__like");

///Карточки//
const initialCards = [
  {
    name: "Каллиграфиа",
    link: "https://i.postimg.cc/Pf0BdPHP/geraltyichen-Afj-IGVWHp7-Q-unsplash.jpg",
  },
  {
    name: "Искусство",
    link: "https://i.postimg.cc/VN7VpN4s/geraltyichen-TMq-Alpp-R-Qk-unsplash.jpg",
  },

  {
    name: "Газета",
    link: "https://i.postimg.cc/FR7B4Qny/markus-spiske-d-Td4-Kw-d-Qfo-unsplash.jpg",
  },
  {
    name: "Ретро машина",
    link: "https://i.postimg.cc/vZtj7hVV/markus-spiske-Cdx-Nfc-Q-m-M-unsplash.jpg",
  },
  {
    name: "Книги",
    link: "https://i.postimg.cc/j2yvxq67/mary-skrynnikova-H-8zn9-NVo-Ww-unsplash.jpg",
  },
  {
    name: "Улица в снегу",
    link: "https://i.postimg.cc/sfWT9KFg/krisjanis-kazaks-TCRzp-VCUua-I-unsplash.jpg",
  },
];

///Форма редактировать профиль//
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

//Форма добавлять карточки//

buttonCardEdit.addEventListener("click", function (event) {
  cardOverlay.classList.add(overlayActiveClass);
});
addCloseButton.addEventListener("click", function () {
  cardOverlay.classList.remove(overlayActiveClass);
});

// Add card
function addCard(name, link) {
  const cardsElement = elementTemplate.cloneNode(true);

  cardsElement.querySelector(".element__title").textContent = name;
  cardsElement.querySelector(".element__image").src = link;

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

  initialCardsElement.prepend(cardsElement);
}

initialCards.forEach((item) => addCard(item.name, item.link));

function formCreateHandler(evt) {
  evt.preventDefault();

  const name = formTitleInput.value;
  const link = formLinkInput.value;
  addCard(name, link);

  cardOverlay.classList.remove(overlayActiveClass);
  // formElement.reset();
}

popupAdd.addEventListener("submit", formCreateHandler);

///openFoto//
const cardPicture = document.querySelector(".card");
const cardOpen = "card_open";
const popupCardImage = document.querySelector(".card__foto");
const popupCardTitle = document.querySelector(".card__caption");
const elementImage = document.querySelector(".element__image");
const cardCloseButton = document.querySelector("#card-close");

function openFoto(evt) {
  cardPicture.classList.add("card_open");
  popupCardImage.src = evt.target.src;
  popupCardTitle.textContent = evt.target.alt;
  
}

elementImage.addEventListener("click", openFoto);
cardCloseButton.addEventListener("click", function() {
  cardPicture.classList.remove("card_open");
});

