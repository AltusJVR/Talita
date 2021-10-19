/* Lets link javascript to HTML/CSS */
/* in index.html create a div with the class of burger */

const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  // burger.classList.toggle("clicked");

  if (burger.classList.contains("clicked")) {
    burger.classList.remove("clicked");
  } else {
    burger.classList.add("clicked");
  }
});
