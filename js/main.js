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

const number_of_items = async () => {
  try {
    const response = await fetch(
      "https://brandstestowy.smallhost.pl/api/random?pageSize=100"
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const numbes = json.data.length;
    for (let index = 0; index < json.data.length; index + 14) {
      console.log(index);
    }
  } catch (error) {
    console.error(error.message);
  }
};
