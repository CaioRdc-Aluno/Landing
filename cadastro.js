const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const confirmar = document.querySelector("#conSenha");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  if (senha.value.length < 8) {
    e.preventDefault();

    senha.style.borderColor = "red";
    senha.style.borderWidth = "2px";
    document.querySelector("#spanSenha").style.display = "block";
  } else {
    senha.style.borderColor = "white";
    senha.style.borderWidth = "1px";
    document.querySelector("#spanSenha").style.display = "none";
  }
  if (confirmar.value !== senha.value) {
    e.preventDefault();

    confirmar.style.borderColor = "red";
    confirmar.style.borderWidth = "2px";
    document.querySelector("#spanConSenha").style.display = "block";
  } else {
    confirmar.style.borderColor = "white";
    confirmar.style.borderWidth = "1px";
    document.querySelector("#spanConSenha").style.display = "none";
  }
});
