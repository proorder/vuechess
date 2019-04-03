<template>
  <div class="container py-5">
    <div class="row mb-5">
      <div class="page_description col-12 p-5">
        <h3 class="display-5">Описание страницы магазина</h3>
        <hr class="my-4" />
        <p class="lead">
          Как и описание со всех остальных страниц в подобных блоках, попадет в
          гугл
        </p>
      </div>
    </div>

    <div class="row">
      <div
        :key="key"
        v-for="(product, key) in products"
        class="col-4 p-2"
        :style="{ backgroundColor: mathColor() }"
      >
        <div class="inventory-page_item">
          <div
            class="col-12 inventory-page_item__img"
            :style="{ backgroundImage: 'url(' + product.images[0] + ')' }"
          />
          <div class="col-12 p-3">
            <h4>{{ product.header }}</h4>
            <p>
              {{ product.description }}
              <br />
              Стоимость: {{ product.price }}
              <br />
              Имеющееся количество: {{ product.quantity }}
            </p>
            <div class="text-center">
              <a href="#more">Смотреть подробнее</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import errorProcessing from "../utils/errorProcessing";
import { PRODUCTS } from "../queries";

export default {
  name: "inventory",
  data: () => ({
    products: []
  }),
  created() {
    axios
      .get(PRODUCTS, { params: { status: "attributes" } })
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
  },
  methods: {
    mathColor() {
      const colors = [
        "FED6BC",
        "FFFADD",
        "DEF7FE",
        "E7ECFF",
        "C3FBD8",
        "FDEED9",
        "F6FFF8",
        "B5F2EA",
        "C6D8FF"
      ];
      return "#" + colors[Math.round(Math.random() * 9)];
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/vars";

.inventory-page_item__img {
  height: 200px;
  background-position: center;
  background-size: cover;
}
</style>
