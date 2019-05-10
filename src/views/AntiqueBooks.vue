<template>
  <div class="container py-5">
    <div class="row">
      <div class="page_description p-5 col-12">
        <h3 class="display-5">Антикварные книги</h3>
        <hr class="my-4" />
        <p class="lead">
          Здесь вы сможете найти книги изданные небольшим тиражом.
        </p>
      </div>
    </div>

    <div
      :key="key"
      v-for="(product, key) in products"
      class="inventory_item row my-4"
    >
      <div class="col-6 p-5">
        <h4>{{ product.header }}</h4>
        <p>{{ product.description }}</p>
        <p>{{ product.price }} рублей.</p>
        <div class="text-center">
          <a href="#addToCart">Добавить в корзину</a>
        </div>
      </div>
      <div class="inventory_item__img-demo col-6">
        <div
          v-for="(image, key) in product.images"
          class="inventory_item__img-demo_img"
          :key="key"
          :style="{ 'background-image': 'url(' + image + ')' }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { PRODUCTS } from "../queries";
import errorProcessing from "../utils/errorProcessing";

export default {
  name: "AntiqueBooks",
  metaInfo: {
    title: process.env.VUE_APP_TITLE + " | Купить антикварные книги по шахматам"
  },
  data: () => ({
    products: []
  }),
  created() {
    axios
      .get(PRODUCTS, { params: { product_type: "book" } })
      .then(res => {
        this.products = res.data;
      })
      .catch(err => {
        if (err.response === undefined) {
          this.$store.commit("connectionRefused", {
            refused: this.created
          });
        }
        errorProcessing(err);
      });
  }
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
