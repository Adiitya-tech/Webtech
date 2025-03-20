let input = document.querySelector("input");
let textarea = document.querySelector("textarea");
let submitLink = document.querySelector("#submitLink");
let description = "";
let subject = "";

input.addEventListener("input", (e) => {
  subject = encodeURIComponent(e.target.value);
});

textarea.addEventListener("input", (e) => {
  description = encodeURIComponent(e.target.value);
});

submitLink.addEventListener("click", (e) => {
  submitLink.href = `mailto:matsagar.adi@gmail.com?subject=${subject}&body=${description}`;
});
