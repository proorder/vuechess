<template>
  <div class="container py-5">
    <div class="row">
      <div class="page_description p-5 col-12">
        <h3 class="display-5">Антикварные книги</h3>
        <hr class="my-4" />
        <p class="lead">
          Описание раздела, которое попадет в гугл потому что находится в тегах
          "h1" и "p".
        </p>
      </div>
    </div>

    <div class="inventory_item row my-4">
      <div class="col-6 p-5">
        <h4>Виолетта скоро добавит материалы</h4>
        <p>
          Большое количество редких и интересных книг предложенных вам в удобном
          виде.
        </p>
        <div class="text-center">
          <a href="#more">Смотреть подробнее</a>
        </div>
      </div>
      <div class="inventory_item__img-demo col-6">
        <div class="inventory_item__img-demo_img" style="" />
        <div class="inventory_item__img-demo_img" style="" />
        <div class="inventory_item__img-demo_img" style="" />
      </div>
    </div>

    <div class="inventory_item row my-4">
      <div class="col-6 p-5">
        <h4>Виолетта скоро добавит материалы</h4>
        <p>
          Большое количество редких и интересных книг предложенных вам в удобном
          виде.
        </p>
        <div class="text-center">
          <a href="#more">Смотреть подробнее</a>
        </div>
      </div>
      <div class="inventory_item__img-demo col-6">
        <div class="inventory_item__img-demo_img" style="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AntiqueBooks"
};
</script>

<style lang="scss">
@import "../assets/scss/vars";

.inventory_item {
  background-color: $light-color;
  box-shadow: -1000px 0 0 0 $light-color;
  & a:before {
    content: ">> ";
  }
  & a:after {
    content: " <<";
  }
  &:nth-of-type(odd) {
    box-shadow: 1000px 0 0 0 $light-color;
  }
}

.inventory_item__img-demo {
  position: relative;
  overflow: hidden;
}

.inventory_item__img-demo_img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: 100% auto;
  background-position: center;
  transition: all 500ms;
}

.inventory_item__img-demo_img:nth-of-type(2) {
  transform: translateX(80%);
  cursor: pointer;
  &:hover {
    transform: translateX(0px);
    &:before {
      background-color: transparentize($light-color, 1);
    }
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparentize($light-color, 0.3);
  }
}

.inventory_item__img-demo_img:nth-of-type(3) {
  transform: translateX(90%);
  cursor: pointer;
  &:hover {
    transform: translateX(0px);
    &:before {
      background-color: transparentize($light-color, 1);
    }
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparentize($light-color, 0.1);
  }
}
</style>
