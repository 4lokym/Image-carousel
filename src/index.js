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


const transitioning = function objectThatManagesTheTransitioning(){
  let count = 1;
  const images = [...document.querySelectorAll(".img")]
  const num = images.length;

  function print(){
    console.log(images);
  }

  const change = function(){
    console.log("transition");
    if(count >= num){
      count = 0;
    }
    images.map((x) =>{
      x.style.transform = `translateX(${-count *100}%)`;
    })
    count++;
  }

  return {change, print}
}();

setInterval(transitioning.change, 10000);