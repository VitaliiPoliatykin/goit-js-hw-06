const refs = {
    validationInput: document.querySelector(`#valiadation-input`),
};

const testValidation = (quantity) => {
    if (quantity.currentTarget.value === "") return;

    quantity.currentTarget.value.length > refs.validationInput.dataset.length
        ? refs.validationInput.classList.add("invalid")
        : refs.validationInput.classList.add("valid")
}

const resetValidation = (quantity) =>
    refs.validationInput.classList.remove("valid", "invalid");

refs.validationInput.addEventListener("blur", testValidation);
refs.validationInput.addEventListener("focus", resetValidation);