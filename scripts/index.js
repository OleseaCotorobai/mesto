
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
//Форма редактировать профиль//

//Форма добавлять карточки//
let buttonCardEdit = document.querySelector(".profile__add-button");
let formTitleInput = formElement.querySelector("#title-input");
let formLinkInput = formElement.querySelector("#link-input");
let cardOverlay = document.querySelector("#add-button");
const elementTitle = document.querySelector(".element__title");
const elementImage = document.querySelector(".element__image");
const addCloseButton = document.querySelector("#close-button");

buttonCardEdit.addEventListener("click", function (event) {
 
  cardOverlay.classList.add(overlayActiveClass);
});
addCloseButton.addEventListener("click", function () {
  cardOverlay.classList.remove(overlayActiveClass);
});

function formCreateHandler(evt) {
  evt.preventDefault();
  const name = cardOverlay.querySelector('#title-input').value;
  const link = cardOverlay.querySelector('#link-input').value;
  document.querySelector('.element').prepend(element(name, link));
  formElement.reset();
  cardOverlay.classList.remove(overlayActiveClass);
}
formElement.addEventListener("submit", formCreateHandler); 

//Форма добавлять карточки//


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



///Карточки//
  const elementTemplate = document.querySelector('#element-template').content;
  const initialCardsElement = document.querySelector('.element');
  const cardsElement = elementTemplate.cloneNode(true);
  cardsElement.querySelector('.element__title').textContent;
  cardsElement.querySelector('.element__image').href;
  


  const content = document.querySelector('.content');
 
  
  initialCards.forEach(function(element) {
   

    
    const cardsElement = elementTemplate.cloneNode(true);
    cardsElement.querySelector('.element__title').textContent = element.name;
    cardsElement.querySelector('.element__image').src = element.link;
    initialCardsElement.prepend(cardsElement);
  });
  
  
function openFoto() {

}

 ///Лайк карточкам///
 

 const likeButtonActive = "element__active_like";
 const likeButton = document.querySelector('.element__like');
 likeButton.addEventListener("click", function (event){
 likeButton.classList.toggle(likeButtonActive);
 });

 ///Удалить карточки///
 
                             


function deletePhoto(elementPhoto) {
  elementPhoto.remove();
  cardsElement.querySelector(".element__delete").addEventListener("click", function() {
    deletePhoto(cardsElement); 
  });
};
