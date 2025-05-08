const render = async (id, payload, typeRender = true) => {
  const html = await payload;
  const idDOC = document.querySelector(`#${id}`);
  if (typeRender) {
    idDOC.innerHTML += html;
  } else {
    idDOC.innerHTML = html;
  }
};

const popup = (id, image) => {
  const html = `<div class="popup">
    <div class="popupBox">
      <div class="tablePopup">
        <div class="idPopup">ID: ${id < 10 ? `0${id}` : id}</div>
        <div class="closePopup" onclick="togglePopup('','', false)">
          <div>
            <img src="img/close.png" alt="item${id}" />
          </div>
          <div class="textClose">
            <p>close</p>
          </div>
        </div>
      </div>
      <img
        class="popupImg"
        src="${image}"
        alt=""
      />
    </div>
  </div>`;
  return html;
};

const banner = () => {
  const html = `
      <div class="banner" id="banner">
        <div class="textTitleBannerBox">
          <div class="textTitleBanner">
            <p>Forma’sint</p>
            <h1>You'll look and feel like the champion.</h1>
          </div>
          <button class="buttonTitleBanner">
            <p>Check this out</p>
            <div><img src="img/arrowButton.svg" alt="arrow" /></div>
          </button>
        </div>
        <img class="imgTitleBanner" src="img/titlePage.jfif" alt="" />
      </div>`;
  return html;
};

const togglePopup = (id, img, state) => {
  if (state) {
    render("popup", popup(id, img), false);
    document.body.style.overflow = "hidden";
  } else {
    render("popup", "", false);
    document.body.style.overflow = "auto";
  }
};

const itemsForPage = async (numberOfPage = 1, size = 14) => {
  const data = await getData(numberOfPage, size);
  const items = document.querySelector("#items");
  const html = data.data.forEach((e) => {
    const itemPage = document.createElement("div");
    itemPage.classList = `itemPage ${e.id < 6 ? "orederItem" : ""}`;
    itemPage.addEventListener("click", () => {
      togglePopup(e.id, e.image, true);
    });
    itemPage.innerHTML = `
        <div class="itemBlock">
          <div class="img_block_item">
            <div class="idItem">ID: ${e.id < 10 ? `0${e.id}` : e.id}</div>
            <div class="img_item">
              <img src="${e.image}" alt="product" />
            </div>
          </div>
        </div>
    `;
    items.appendChild(itemPage);
  });
};

render("items", banner());
itemsForPage();

window.addEventListener("scroll", (e) => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  const size = Number(document.querySelector("#size").innerHTML);
  if (
    Math.ceil(scrolled) === scrollable ||
    Math.ceil(scrolled) - scrollable === 1
  ) {
    itemsForPage(numberOfPage, size);
    numberOfPage++;
  }
});
