const hamburgerBtn = document.querySelector(".hamburger-btn");
const nav = document.getElementById("primary-navigation");
const dropDowns = document.querySelectorAll(".dropdown-img");


hamburgerBtn.addEventListener("click", () => {
  let isVisible = nav.getAttribute("data-visible");
  if (isVisible === "false") {
	nav.setAttribute("data-visible", "true");
	hamburgerBtn.setAttribute("aria-expended", "true");
  } else {
	nav.setAttribute("data-visible", "false");
	hamburgerBtn.setAttribute("aria-expended", "false");
  }
});

function addDropDownEle(target) {
  let isVisible = target.getAttribute("data-visible");
  if (isVisible === "false") {
	target.setAttribute("data-visible", "true");
  } else {
	target.setAttribute("data-visible", "false");
  }
}

dropDowns.forEach((ele, idx) => {
  ele.addEventListener("click", () => {
	if (idx === 0) {
	  const hiddenIconList = document.getElementById("hidden-icon-list");
	  addDropDownEle(hiddenIconList);
	} else {
	  const hiddenPlainList = document.getElementById("hidden-plain-list");
	  addDropDownEle(hiddenPlainList);
	}
  });
});