export const dropDownMenu = function() {
  class Option {
    constructor(textContent, action, bgColor, textColor, height, hoverEff = true) {
      this._textContent = textContent;
      this._action = action;
      this._bgColor = bgColor;
      this._height = height;
      this._textColor = textColor;
      this._hoverEff = hoverEff;
    }
    get textContent() {
      return this._textContent;
    }
    get action() {
      return this._action;
    }
    get bgColor() {
      return this._bgColor;
    }
    get height() {
      return this._height;
    }
    get textcolor() {
      return this._textColor;
    }
    get hoverEff(){
      return this._hoverEff;
    }
  }

  const makeBlock = function makeBlockForDropDownList(option) {
    const block = document.createElement("button");
    block.textContent = option.textContent;
    block.addEventListener("click", option.action);
    block.style.border = "none";
    block.style.cursor = "pointer";
    block.style.backgroundColor = option._bgColor ? option.bgColor : "inherit";
    block.style.color = option.textColor ? option.textColor : "inherit";
    block.style.display = "grid";
    block.style.alignItems = "center";
    block.style.justifyContent = "center";

    block.style.width = "100%";
    block.style.height = option.height ? option.height : "2rem";

    if(option.hoverEff){
      block.addEventListener("mouseover", () =>{
        block.style.filter = "brightness(90%)"
      });
      block.addEventListener("mouseleave", () => {
        block.style.filter = "none";
      })
    }

    return block;
  };

  const makeList = function makeDropDownList(
    options,
    width = "inherit",
    bgColor = "inherit",
    color = "inherit",
  ) {
    const dropDownList = document.createElement("div");
    dropDownList.classList.add("dropDownList");
    dropDownList.style.position = "absolute";
    dropDownList.style.display = "flex";
    dropDownList.style.flexDirection = "column";
    dropDownList.style.width = width;
    dropDownList.style.color = color;
    dropDownList.style.backgroundColor = bgColor;

    options.map((option) => {
      dropDownList.appendChild(makeBlock(option));
    });

    return dropDownList;
  };

  const makeMenuButton = function makeTheButtonThatOpensTheDropDownMenu(
    menuOption,
    options,
    width = "4rem",
    height = "100%",
    bgColor = "inherit",
    color = "inherit",
  ) {
    const menuBlock = makeBlock(menuOption);

    const container = document.createElement("div");
    container.classList.add("container");
    container.style.width = width;
    container.style.height = height;
    container.style.backgroundColor = bgColor;
    container.style.color = color;

    container.appendChild(menuBlock);

    const dropDownList = makeList(options);
    dropDownList.style.display = "none";

    menuBlock.addEventListener("click", () => {
      if (dropDownList.style.display === "flex") {
        dropDownList.style.display = "none";
      } else {
        dropDownList.style.display = "flex";
      }
    });
    container.addEventListener("mouseleave", () => {dropDownList.style.display = "none"});

    container.appendChild(dropDownList);
    return container;
  };

  return{Option, makeBlock, makeList, makeMenuButton};
}();