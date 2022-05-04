const selectEl = document.getElementById("select");
const registrationImage = document.getElementById("lang-img");
const textToChange = document.getElementById("text-to-change");
const labels = document.querySelectorAll("label");
const options = document.querySelectorAll("option");
const button = document.querySelector(".form-submit-button");

selectEl.addEventListener("change", function () {
  switch (this.value) {
    case "c++":
      registrationImage.src = "./Assets/C++.svg";
      break;
    case "java":
      registrationImage.src = "./Assets/Java.svg";
      break;
    case "python":
      registrationImage.src = "./Assets/Python.svg";
      break;
    case "javascript":
      registrationImage.src = "./Assets/javascript.svg";
      break;
    case "c-sharp":
      registrationImage.src = "./Assets/c-sharp.svg";
      break;
    case "go":
      registrationImage.src = "./Assets/Go.svg";
      break;

    default:
      setSneakyRicardo(this);
  }
});

function setSneakyRicardo(elem) {
  registrationImage.src = "./Assets/Ricardo.png";
  registrationImage.style.transform = "scale(-1,1)";
  textToChange.innerText = "запису на танці";
  labels[2].innerText = "Хореограф";
  options[elem.selectedIndex].innerText = "Рікардо Мілос";
  document.body.style.backgroundImage = "url(./Assets/DiscoHall.jpg)";
}

button.addEventListener("click", function () {
  console.log(this.className);
  // this.classList.toggle('form-submit-button');
});
