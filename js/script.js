function replaceName() {
  let storedName = localStorage.getItem("userName");

  if (!storedName) {
    storedName = prompt("Hi, can you write your name here?", "");
    localStorage.setItem("userName", storedName);
  }
  document.getElementById("name").innerHTML = storedName;
}

function replaceName() {
  let storedName = localStorage.getItem("userName");

  if (!storedName) {
    storedName = prompt("Hi, can you write your name here?", "");
    localStorage.setItem("userName", storedName);
  }
  document.getElementById("name").innerHTML = storedName;
}

function resetName() {
  localStorage.removeItem("userName");
  replaceName();
}

window.onload = replaceName;

// Submitting Form
function submitForm() {
  const form = document.getElementById("messageForm");
  const formData = new FormData(form);
  const messageBox = document.getElementById("messageBox");

  let resultHTML = "";
  formData.forEach((value, key) => {
    resultHTML += `<p><strong>${key}:</strong> ${value}</p>`;
  });

  messageBox.innerHTML = resultHTML;
}

// Slider
let currentIndex = 0;
const images = document.querySelectorAll(".slider-banner");
const totalImages = images.length;

function changeImage() {
  images[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % totalImages;
  images[currentIndex].style.display = "block";
}

setInterval(changeImage, 2000);

// Navbar
function toggleNav() {
  var menuToggle = document.querySelector(".toggle");
  var navigation = document.querySelector(".nav-bar");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

// Thumbnail
function imgSlider(anything, switchClass) {
  document.querySelector(switchClass).src = anything;
}

function changeCategory(newText, displayNameId) {
  document.getElementById(displayNameId).textContent = newText;
}

function changeText(newText, displayTextId) {
  document.getElementById(displayTextId).textContent = newText;
}

function set1() {
  imgSlider("assets/Cherry_Red.png", ".switch");
  changeCategory("Cherry MX Red", "displayName");
  changeText("Linear", "displayText");
}

function set2() {
  imgSlider("assets/Gateron_Red.png", ".switch1");
  changeCategory("Gateron Red", "displayName1");
  changeText("Linear", "displayText1");
}

function set3() {
  imgSlider("assets/Kailh_BOX_Red.png", ".switch2");
  changeCategory("Kailh BOX Red", "displayName2");
  changeText("Linear");
}
