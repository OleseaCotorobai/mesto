const formsValidationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__text",
  inputErrorClass: "popup__error",
};

function enableValidation(data) {
  const forms = [...document.querySelectorAll(data.formSelector)];

  forms.forEach((form) => editProfileForm(form, data));
}

function editProfileForm(form, config) {
  form.addEventListener("submit", handleSubmit);

  const inputs = [...form.querySelectorAll(config.inputSelector)];

  inputs.forEach((input) =>
    input.addEventListener("input", () => handleField(form, input, config))
  );
}

function handleSubmit(event) {
  event.preventDefault();
}

function handleField(form, input, config) {
  if (input.validity.valid) {
    hideError(form, input, config);
  } else {
    showError(form, input, config);
  }
}

function showError(form, input, config) {
  input.classList.add(config.inputErrorClass);

  const errorElement = form.querySelector('')
}

function hideError(form, input, config) {
  input.classList.remove(config.inputErrorClass);
}

enableValidation(formsValidationConfig);
