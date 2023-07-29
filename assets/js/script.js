document.addEventListener("DOMContentLoaded", function () {
  const collapsibleBtn = document.querySelector(".collapsible-btn");
  const collapsibleContent = document.querySelector(".collapsible-content");

  collapsibleBtn.addEventListener("click", function () {
    if (collapsibleContent.style.display === "none") {
      collapsibleContent.style.display = "block";
    } else {
      collapsibleContent.style.display = "none";
    }
  });
});
