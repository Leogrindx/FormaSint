const toggle = (state) => {
  const menu_tag = document.querySelector("#toggle");
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
};

const getData = async (pageNumber, pageSize) => {
  console.log(pageNumber, pageSize);
  const url = `https://brandstestowy.smallhost.pl/api/random${
    pageNumber ? `?pageNumber=${pageNumber}` : ""
  }${pageSize ? "&" : ""}${pageSize ? `pageSize=${pageSize}` : ""}`;
  console.log(url);
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

const render = async (id, payload) => {
  const html = await payload;
  const idDOC = document.querySelector(`#${id}`);
  idDOC.innerHTML += html.join(" ");
};

render("select", options());
render("slider", itemsForSlider());
render("page", itemsForPage());
