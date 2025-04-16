const menu_tag = document.querySelector("#toggle");

const toggle = (state) => {
  if (window.innerWidth < 600) {
    const background_mobile_menu = document.querySelector(
      "#background_mobile_menu"
    );
    if (state) {
      menu_tag.style.transform = "translate(25%)";
      background_mobile_menu.style.visibility = "visible";
      background_mobile_menu.style.opacity = "1";
      document.body.style.overflow = "hidden";
    } else {
      menu_tag.style.transform = "translate(125%)";
      background_mobile_menu.style.visibility = "hidden";
      background_mobile_menu.style.opacity = "0";
      document.body.style.overflow = "auto";
    }
  }
};

let start;
let end;

menu_tag.addEventListener("touchstart", (e) => {
  start = e.changedTouches[0].clientX;
});

menu_tag.addEventListener("touchend", (e) => {
  end = e.changedTouches[0].clientX;
  const diff = end - start;
  if (diff > 50) {
    toggle(false);
  } else if (diff < -50) {
    toggle(true);
  }
});

const getData = async (pageNumber, pageSize) => {
  const url = `https://brandstestowy.smallhost.pl/api/random${
    pageNumber ? `?pageNumber=${pageNumber}` : ""
  }${pageSize ? "&" : ""}${pageSize ? `pageSize=${pageSize}` : ""}`;
  const data = await fetch(url);
  const jsonData = await data.json();
  return jsonData;
};

const optionsNumberCalculate = async () => {
  const optionsNumber = [];
  const numbers = await getData(1, 100);
  for (let index = 0; index < numbers.data.length; index = index + 14) {
    if (index > 0) {
      optionsNumber.push(index);
    }
  }
  return optionsNumber;
};
