<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-6">
        В этом месяце вами заинтересовалось пользователей:
        <br />
        <span v-if="requests === null">(загрузка)</span>
        <span v-else>{{ requests }}</span>
      </div>
      <div class="col-6">
        Информацию о себе вы можете изменить на этой странице:
        <br />
        <router-link :to="{ name: 'Информация о тренере' }" class="button"
          >Изменить данные</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { MODEL } from "../queries";
import errorProcessing from "../utils/errorProcessing";

export default {
  name: "profile",
  data: () => ({
    requests: null
  }),
  created() {
    axios
      .post(MODEL, {
        query: `
        query {
          requestsCount {
            count
          }
        }
      `
      })
      .then(res => {
        this.requests = +res.data.data.requestsCount.count;
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
  metaInfo: {
    title: process.env.VUE_APP_TITLE + " | Персональный профиль пользователя"
  }
};
</script>
