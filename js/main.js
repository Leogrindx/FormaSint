const getData = async (pageNumber, pageSize) => {
  const url = `https://brandstestowy.smallhost.pl/api/random${
    pageNumber ? `?pageNumber=${pageNumber}` : ""
  }${pageSize ? "&" : ""}${pageSize ? `pageSize=${pageSize}` : ""}`;
  const data = await fetch(url);
  const jsonData = await data.json();
  return jsonData;
};

miniLogo.addEventListener("mouseover", () => {
  miniLogoImg.src = "img/hoverLogo.svg";
});

miniLogo.addEventListener("mouseout", () => {
  miniLogoImg.src = "img/miniLogo.svg";
});

swiperSlide.forEach((e) => {
  e.addEventListener("mouseover", (c) => {
    e.querySelector(".like").classList.add("opacityOn");
  });
  e.addEventListener("mouseout", () => {
    e.querySelector(".like").classList.remove("opacityOn");
  });
});

likes.forEach((e) => {
  e.addEventListener("mouseover", () => {
    e.src = "img/likeHover.svg";
    e.classList.add("opacityOff");
  });
  e.addEventListener("mouseout", () => {
    e.src = "img/like.svg";
    e.classList.remove("opacityOff");
  });
});

const toggleMenu = (state) => {
  if (window.innerWidth < 980) {
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

closeMenus.forEach((e) => {
  e.addEventListener("click", (e) => {
    toggleMenu(false);
  });
});

openMenuHumburger.addEventListener("click", (e) => {
  toggleMenu(true);
});

menu_tag.addEventListener("touchstart", (e) => {
  start = e.changedTouches[0].clientX;
});

menu_tag.addEventListener("touchend", (e) => {
  end = e.changedTouches[0].clientX;
  const diff = end - start;
  if (diff > 50) {
    toggleMenu(false);
  } else if (diff < -50) {
    toggleMenu(true);
  }
});

const select = () => {
  document.querySelector("#options").classList.toggle("showOptions");
  document.querySelector("#select").classList.toggle("showSelect");
  document.querySelector("#selectBox").classList.toggle("showBox");
};

selectDom.addEventListener("click", select);

document.querySelectorAll(".option").forEach((e) => {
  e.addEventListener("click", (e) => {
    const size = e.target.innerHTML;
    const sizes = [14, 24, 36].filter((e) => e != size);
    const options = document.querySelectorAll(".option");
    for (let i = 0; i < options.length; i++) {
      options[i].innerHTML = sizes[i];
    }
    select();
    document.querySelector("#size").innerHTML = size;
    numberOfPage = 1;
    render("items", banner(), false);
    itemsForPage(numberOfPage, size);
    numberOfPage = 2;
  });
});
