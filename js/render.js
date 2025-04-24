const itemsForSlider = async () => {
  const data = await getData(1, 10);
  const html = data.data.map(
    (e) => `
    <div class="swiper-slide">
      <div class="item">
        <div class="itemHover"></div>
        <div class="img_block_item">
          <div class="buttons_item">
            <div class="status_item">
              <p>bestseller</p>
            </div>
            <div>
              <img class="like" src="img/like.svg" alt="like" />
            </div>
          </div>
          <div class="img_item">
            <img src="${e.image}" alt="product" />
          </div>
        </div>
        <div class="text">
          <div class="name">
            <p>${e.text}</p>
          </div>
          <div class="price">
            <p>€</p>
            <p class="number">300,00</p>
            <p>EUR</p>
          </div>
        </div>
      </div>
    </div>`
  );
  return html.join(" ");
};

const itemsForPage = async (number = 1, size = 14) => {
  const data = await getData(number, size);
  const html = data.data.map(
    (e) =>
      `<div class="itemPage ${
        e.id < 6 ? "orederItem" : ""
      }" onclick="togglePopup('${e.image}', ${e.id}, true)">
        <div class="itemBlock">
          <div class="img_block_item">
            <div class="idItem">ID: ${e.id < 10 ? `0${e.id}` : e.id}</div>
            <div class="img_item">
              <img src="${e.image}" alt="product" />
            </div>
          </div>
        </div>
      </div>
      `
  );
  return html.join(" ");
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

const render = async (id, payload, typeRender = true) => {
  console.log("render");
  const html = await payload;
  const idDOC = document.querySelector(`#${id}`);
  if (typeRender) {
    idDOC.innerHTML += html;
  } else {
    idDOC.innerHTML = html;
  }
};

render("slider", itemsForSlider());
render("page", itemsForPage());

const togglePopup = (img, id, state) => {
  if (state) {
    render("popup", popup(id, img), false);
    document.body.style.overflow = "hidden";
  } else {
    render("popup", "", false);
    document.body.style.overflow = "auto";
  }
};

window.addEventListener("scroll", (e) => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  const size = Number(document.querySelector("#size").innerHTML);
  if (
    Math.ceil(scrolled) === scrollable ||
    Math.ceil(scrolled) - scrollable === 1
  ) {
    render("page", itemsForPage(numberOfPage, size));
    numberOfPage++;
    const banner = document.querySelector("#banner");
    if (banner) {
      banner.style.display = "none";
    }
  }
});
