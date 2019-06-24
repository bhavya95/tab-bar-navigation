const tabs = document.querySelectorAll(".tab");
const body = document.body;

tabs.forEach(clickedTab => {
  clickedTab.addEventListener("click", function() {
    tabs.forEach(tab => {
      tab.classList.remove("active");
    });
    this.classList.add("active");
    const clickedTabBGColor = getComputedStyle(this).getPropertyValue("color");
    body.style.background = clickedTabBGColor;
  });
});
