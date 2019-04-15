<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4" v-if="trainers.length < 1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 85 100"
          class="container-fluid p-0"
        >
          <rect fill="#6300BF" class="cls-1" width="85" height="100" />
        </svg>
      </div>
      <div class="col-12 col-md-6 col-lg-4" v-if="trainers.length < 1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 85 100"
          class="container-fluid p-0"
        >
          <rect fill="#6300BF" class="cls-1" width="85" height="100" />
        </svg>
      </div>
      <div class="col-12 col-md-6 col-lg-4" v-if="trainers.length < 1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 85 100"
          class="container-fluid p-0"
        >
          <rect fill="#6300BF" class="cls-1" width="85" height="100" />
        </svg>
      </div>
      <div
        v-for="(trainer, key) in trainers"
        :key="key"
        class="col-12 col-sm-6 col-lg-4 mt-3"
      >
        <div class="trainer_card">
          <img
            :src="path(trainer.image[0].image)"
            class="container-fluid"
            alt=""
          />
          <div class="trainer_block">
            <div class="trainer_info p-2">
              <h5>{{ trainer.user.fullName }}</h5>
              <p>{{ trainer.about }}</p>
              <router-link
                :to="{ name: 'Тренер', query: { user_id: trainer.user.id } }"
                class="button"
                >Узнать подробнее</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { MODEL } from "../queries";
import errorProcessing from "../utils/errorProcessing";

export default {
  name: "trainers",
  data: () => ({
    trainers: []
  }),
  created() {
    axios
      .post(MODEL, {
        query: `
        query {
          allTrainers {
            about
            image {
              image
            }
            user {
              id
              fullName
            }
          }
        }
      `
      })
      .then(res => {
        this.trainers = res.data.data.allTrainers;
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
    path(path) {
      return process.env.VUE_APP_HOST + path;
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/vars";

.trainer_card {
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  & > img {
    padding: 0;
  }
  & > .trainer_block {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > .trainer_info {
      background-color: transparentize($violet, 0.5);
      text-align: left;
      color: #fff;
      position: relative;
      width: 100%;
      &:before {
        content: "";
        position: absolute;
        top: -100px;
        left: 0px;
        right: 0px;
        height: 100px;
        background-size: 100% 100px;
      }
      &:after {
        content: "";
        position: absolute;
        bottom: -100px;
        left: 0px;
        right: 0px;
        height: 100px;
        background-size: 100% 100px;
      }
      & > h5 {
        font-weight: bold;
      }
      & > p {
        font-weight: 100;
      }
      & > .button {
        background-color: #fff;
        color: $violet;
        font-weight: bold;
        border-radius: 50px;
        text-align: center;
        padding: 8px 15px;
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
}

.container > .row > * {
  &:nth-child(odd) .trainer_info:before {
    background-image: url("../assets/img/left_top_wave.svg");
  }
  &:nth-child(even) .trainer_info:before {
    background-image: url("../assets/img/right_top_wave.svg");
  }
  &:nth-child(odd) .trainer_info:after {
    background-image: url("../assets/img/left_bottom_wave.svg");
  }
  &:nth-child(even) .trainer_info:after {
    background-image: url("../assets/img/right_bottom_wave.svg");
  }
}
</style>
