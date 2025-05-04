import { dropDownMenu } from "4lokym-dropdownmenu";
import "./style.css";

document
  .querySelector("nav")
  .appendChild(
    dropDownMenu.makeMenuButton(
      new dropDownMenu.Option("testMenu", null, null, "white", "100%"),
      [
        new dropDownMenu.Option("test", () => alert("test")),
        new dropDownMenu.Option("test", () => alert("test")),
      ],
      "6rem",
      undefined,
    ),
  );

document
  .querySelector("nav")
  .appendChild(
    dropDownMenu.makeMenuButton(
      new dropDownMenu.Option("testMenu", null, null, "white", "100%"),
      [
        new dropDownMenu.Option("test", () => alert("test")),
        new dropDownMenu.Option("test", () => alert("test")),
      ],
      "6rem",
      undefined,
    ),
  );

const transitioning = (function objectThatManagesTheTransitioning() {
  let count = 1;
  const images = [...document.querySelectorAll(".img")];
  const num = images.length;

  const btn_container = document.querySelector(".btn-container");

  function print() {
    console.log(images);
  }

  const change = function makeAllImagesTransition_OnLastGoBackToStart() {
    console.log("transition");
    if (count >= num) {
      count = 0;
    }
    images.map((x) => {
      x.style.transform = `translateX(${-count * 100}%)`;
    });
    count++;
  };

  const addButton = function addASingleButton(temp) {
    const button = document.createElement("button");
    button.addEventListener("click", () => {
      images.map((x) => {
        x.style.transform = `translateX(${-temp * 100}%)`;
      });
      count = temp+1;
    });
    btn_container.appendChild(button);
  };

  const addButtons = function addAsManyButtonsAsTheImages() {
    let temp = 0;

    for (temp; temp < num; temp++) {
      addButton(temp);
    }
  };

  return { change, print, addButtons };
})();

transitioning.addButtons();
setInterval(transitioning.change, 10000);
