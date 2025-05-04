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