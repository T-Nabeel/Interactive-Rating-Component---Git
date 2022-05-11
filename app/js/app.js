const submitBtn = document.querySelector(".rating-box__btn");
const ratingBox = document.querySelector(".rating-box");
const thanksCard = document.querySelector(".thankyou-card");
const ratingNums = document.querySelectorAll(".rating-box--number");
const rating = document.getElementById("rating");
let ratingScore = null;

// Submit button event
submitBtn.addEventListener("click", onSubmit);

// Rating numbers event
ratingNums.forEach((btn) => {
  btn.addEventListener("click", handleRatingNums);
});

// Submit onClick function
function onSubmit() {

  if (ratingScore == null) {
    alert ("Please select a Rating");
  }
  else {
    ratingBox.classList.add("card-hidden");
    thanksCard.classList.remove("card-hidden");
    rating.textContent = ratingScore;
  }

  
}

// Rating numbers function
function handleRatingNums(event) {
  ratingNums.forEach((btn) => {
    btn.classList.remove("checked");
  });
  event.target.classList.add("checked");

  // updating rating score
  ratingScore = event.target.textContent;
}
