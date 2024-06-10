// Challenge 1

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city");
  console.log(searchInput.value);

  let h1 = document.querySelector("h1");
  if (searchInput.value) {
    h1.innerHTML = `${searchInput.value}`;
  } else {
    h1.innerHTML = null;
  }
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

//Challenge 2

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formatedDayTime = days[day];
  return `${formatedDayTime} ${hours}:${minutes}`;
}

let currentDayTime = document.querySelector("#current-day-time");
let now = new Date();
currentDayTime.innerHTML = formatDate(now);
