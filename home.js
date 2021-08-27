function home() {
  const elements = document.querySelector(".F1left").querySelectorAll("p");

  const popup = document.querySelector("#popupContainer");

  const openPopUp = (item) => {
    popup.style.display = "block";
    console.log("event", item);
    if (item.target.tagName.toLowerCase() === "p") {
      item.target.style.backgroundColor = "#c4c5c7";
    }
  };

  const onLeave = (item) => {
    popup.style.display = "none";
    if (item.target.tagName.toLowerCase() === "p") {
      item.target.style.backgroundColor = "#f4f5f7";
    }
  };

  elements.forEach((item, index) => {
    item.addEventListener("mouseover", openPopUp);
    item.addEventListener("mouseleave", onLeave);
  });

  popup.addEventListener("mouseover", openPopUp);
  popup.addEventListener("mouseleave", onLeave);
}
home();
