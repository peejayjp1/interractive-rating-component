// Get rating value from radio button
let ratingValue = "";
function getRating() {
  ratingValue = document.querySelector('input[name="rating"]:checked').value;
  return ratingValue;
}

// Elements used to show and hide the cards on submit
const showResults = document.querySelector('.thankYouCard');
const hideRatings = document.querySelector('.ratingCard');

const formSubmit = document.getElementById("ratingForm");
const ratingString = document.getElementById("ratingResult");

// event.preventDefault() stops the form from submitting 
formSubmit.addEventListener("submit", function (event) {
  event.preventDefault()
  ratingString.textContent = `You selected ${getRating()} out of 5`;
  showResults.style.display = 'flex';
  hideRatings.style.display = 'none';
});