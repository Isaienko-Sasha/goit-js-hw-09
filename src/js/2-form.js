const STORAGE_KEY = "feedback-form-state"

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");
const input = form.querySelector("input");

let formData = {
  email: '',
  message: '',
};

form.addEventListener("input", onTextareaInput);

function onTextareaInput(event) {
    const { name, value } = event.target;
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

loadFormData();

function loadFormData() {
    const saveData = localStorage.getItem(STORAGE_KEY);

    if (saveData) {
        try {
            formData = JSON.parse(saveData);

            textarea.value = formData.message || '';
            input.value = formData.email || '';
        } catch (error) {

        }
    }
}


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

console.log(formData);

    form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {
    email: '',
    message: '',
  };
}