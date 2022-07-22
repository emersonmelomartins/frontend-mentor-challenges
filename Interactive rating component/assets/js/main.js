function handleSubmit(event) {
  event.preventDefault();

  const ratingContainer = document.querySelector(".rating-container");
  const ratingSubmitted = document.querySelector(".rating-submitted");
  const selectedRating = document.querySelector(".selected-rating");
  const ratingValue = document.querySelector("input[name='rating']:checked").value;

  ratingContainer.classList.add("hidden");
  ratingSubmitted.classList.remove("hidden");
  
  selectedRating.innerHTML = ratingValue;
}
