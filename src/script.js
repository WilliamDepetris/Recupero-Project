/**
 * script.js
 * JavaScript validation for the application form
 * @author William Depetris
 */

function validateForm(event) {
  console.log("Validating form...");

  const form = document.getElementById("formCandidatura");
  const name = document.getElementById("nome");
  const email = document.getElementById("email");
  const position = document.getElementById("offerta");
  const resume = document.getElementById("cv");

  // Clear previous error messages
  document.querySelectorAll(".error-message").forEach((el) => el.remove());

  // Clear custom validity messages
  [name, email, position, resume].forEach((input) =>
    input.setCustomValidity("")
  );

  let valid = true;

  // Validate name
  if (!name.value.trim()) {
    valid = false;
    console.log("Name is missing");
    showError(name, "Il nome è obbligatorio.");
    name.setCustomValidity("Il nome è obbligatorio.");
  }

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    valid = false;
    console.log("Email is missing");
    showError(email, "L'email è obbligatoria.");
    email.setCustomValidity("L'email è obbligatoria.");
  } else if (!emailPattern.test(email.value)) {
    valid = false;
    console.log("Invalid email format");
    showError(email, "Formato email non valido.");
    email.setCustomValidity("Formato email non valido.");
  }

  // Validate position selection
  if (!position.value || position.value === "") {
    valid = false;
    console.log("Position is not selected");
    showError(position, "Seleziona un'offerta di lavoro.");
    position.setCustomValidity("Seleziona un'offerta di lavoro.");
  }

  // Validate resume upload
  if (!resume.files.length) {
    valid = false;
    console.log("Resume is missing");
    showError(resume, "Carica il tuo CV.");
    resume.setCustomValidity("Carica il tuo CV.");
  } else {
    const allowedExtensions = [".pdf", ".doc", ".docx"];
    const file = resume.files[0];
    const fileExtension = file.name
      .slice(file.name.lastIndexOf("."))
      .toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
      valid = false;
      console.log("Invalid resume format");
      showError(resume, "Formato CV non valido. Usa PDF, DOC o DOCX.");
      resume.setCustomValidity("Formato CV non valido. Usa PDF, DOC o DOCX.");
    }
  }

  if (!valid) {
    console.log("Form is invalid");
    event.preventDefault();
  }
}

function showError(input, message) {
  if (input.parentElement.querySelector(".error-message")) return;

  const error = document.createElement("div");
  error.className = "error-message";
  error.textContent = message;
  error.style.color = "red";
  error.style.fontSize = "0.9rem";
  error.style.marginTop = "0.2rem";

  input.parentElement.appendChild(error);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formCandidatura");
  if (form) {
    form.addEventListener("submit", validateForm);
  }
});
