const input = document.querySelector(`#name-input`);
const output = document.querySelector(`#name-output`);

input.addEventListener(`input`, newInput);

function newInput(name) {
    output.textContent = name.currentTarget.value;
    if (name.currentTarget.value === ``) {
        output.textContent = `Anonymous`;
    }
}