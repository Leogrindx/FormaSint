const options = async () => {
  const optionsNumber = await optionsNumberCalculate();
  return optionsNumber.map((e) => `{<option value="${e}">${e}</option>}`);
};
const itemsForSlider = async () => {
  const data = await getData();
  const html = data.data.map(
    (e) =>
      `<div class="swiper-slide">
            <div class="item">
            <div class="img_block_item">
              <div class="buttons_item">
                <div class="status_item">
                  <p>bestseller</p>
                </div>
                <div class="like">
                  <img src="img/like.png" alt="like" />
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
  return html;
};

const itemsForPage = async () => {
  const data = await getData(1, 14);
  const html = data.data.map(
    (e) =>
      `<div class="itemPage ${e.id < 6 ? "orederItem" : ""}">
        <div class="itemBlock">
          <div class="img_block_item">
            <div class="idItem">ID: ${e.id < 10 ? `0${e.id}` : e.id}</div>
            <div class="img_item">
              <img src="${e.image}" alt="product" />
            </div>
          </div>
        </div>
      </div>`
  );
  return html;
};
